const REPO = 'harharmahadeva/work-ready';
const FILE = 'data/feedback.json';
const GH_API = 'https://api.github.com';

async function ghGet(token) {
  const r = await fetch(`${GH_API}/repos/${REPO}/contents/${FILE}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' }
  });
  if (!r.ok) throw new Error('gh read failed');
  const j = await r.json();
  return { sha: j.sha, data: JSON.parse(Buffer.from(j.content, 'base64').toString('utf8')) };
}

async function ghPut(token, sha, data) {
  const content = Buffer.from(JSON.stringify(data, null, 2)).toString('base64');
  const r = await fetch(`${GH_API}/repos/${REPO}/contents/${FILE}`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'feedback: new entry', content, sha })
  });
  if (!r.ok) throw new Error('gh write failed');
}

export default async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return res.status(500).json({ error: 'No GitHub token configured' });

  if (req.method === 'GET') {
    try {
      const { data } = await ghGet(token);
      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json({ error: 'Could not read feedback' });
    }
  }

  if (req.method === 'POST') {
    const { reviewer, type, screen, rating, comment, lesson, timestamp } = req.body;
    if (!comment?.trim()) return res.status(400).json({ error: 'No comment' });

    try {
      const { sha, data } = await ghGet(token);
      data.push({ id: Date.now(), reviewer, type, screen, rating, comment, lesson, timestamp });
      await ghPut(token, sha, data);
      return res.status(200).json({ ok: true });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Could not save feedback' });
    }
  }

  res.status(405).end();
}
