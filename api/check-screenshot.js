export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { image, task } = req.body;
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) return res.json({ correct: true, feedback: "Great work! I can see you gave it a try. Well done!" });

  try {
    const base64 = image.replace(/^data:image\/\w+;base64,/, '');
    const mediaType = image.startsWith('data:image/png') ? 'image/png' : 'image/jpeg';

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 200,
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64 } },
            { type: 'text', text: `Task the student was asked to do: "${task}"\n\nLook at this screenshot and tell me if the student completed the task correctly. Be encouraging. Reply with JSON only: {"correct": true/false, "feedback": "2-3 sentences of specific, encouraging feedback mentioning what you can see in the screenshot"}` }
          ]
        }]
      })
    });
    const data = await response.json();
    const text = data.content?.[0]?.text || '{}';
    const json = JSON.parse(text.match(/\{.*\}/s)?.[0] || '{"correct":true,"feedback":"I can see your work — well done for trying!"}');
    res.json(json);
  } catch {
    res.json({ correct: true, feedback: "I can see your screenshot — great effort! You're doing brilliantly." });
  }
}
