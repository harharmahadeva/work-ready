export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { reviewer, type, screen, rating, comment, lesson, timestamp } = req.body;

  if (!comment || comment.trim().length < 2) {
    return res.status(400).json({ error: 'No feedback provided' });
  }

  const typeLabel = {
    content: '📚 Content Feedback',
    ui: '🎨 UI/UX Feedback',
    bug: '🐛 Bug Report',
    general: '💬 General Feedback'
  }[type] || '💬 Feedback';

  const stars = rating ? '⭐'.repeat(rating) + '☆'.repeat(5 - rating) : 'Not rated';

  const html = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8f8f8;padding:20px;border-radius:12px">
  <div style="background:#1a1d35;border-radius:10px;padding:20px;margin-bottom:16px">
    <h2 style="color:#fff;margin:0 0 4px">${typeLabel}</h2>
    <p style="color:#9ba3c8;margin:0;font-size:13px">Work Ready App — Reviewer Feedback</p>
  </div>
  <table style="width:100%;background:#fff;border-radius:10px;padding:20px;border-collapse:collapse">
    <tr><td style="padding:8px 0;color:#666;font-size:13px;width:120px"><strong>Reviewer</strong></td><td style="padding:8px 0;font-size:13px">${reviewer}</td></tr>
    <tr><td style="padding:8px 0;color:#666;font-size:13px"><strong>Type</strong></td><td style="padding:8px 0;font-size:13px">${type}</td></tr>
    <tr><td style="padding:8px 0;color:#666;font-size:13px"><strong>Screen</strong></td><td style="padding:8px 0;font-size:13px">${screen || 'Not specified'}</td></tr>
    ${lesson ? `<tr><td style="padding:8px 0;color:#666;font-size:13px"><strong>Lesson</strong></td><td style="padding:8px 0;font-size:13px">${lesson}</td></tr>` : ''}
    <tr><td style="padding:8px 0;color:#666;font-size:13px"><strong>Rating</strong></td><td style="padding:8px 0;font-size:13px">${stars}</td></tr>
    <tr><td style="padding:8px 0;color:#666;font-size:13px;vertical-align:top"><strong>Feedback</strong></td><td style="padding:8px 0;font-size:14px;line-height:1.6">${comment.replace(/\n/g, '<br>')}</td></tr>
    <tr><td style="padding:8px 0;color:#666;font-size:13px"><strong>Time</strong></td><td style="padding:8px 0;font-size:13px">${timestamp}</td></tr>
  </table>
</div>`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'WorkReady Feedback <onboarding@resend.dev>',
        to: ['sandeepsharma1984@gmail.com'],
        subject: `[Work Ready] ${typeLabel} from ${reviewer}`,
        html
      })
    });

    if (!r.ok) {
      const err = await r.text();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Email failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
}
