export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { spoken, question, expectedConcept } = req.body;
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    const keywords = expectedConcept.toLowerCase().split(' ');
    const hits = keywords.filter(k => k.length > 3 && spoken.toLowerCase().includes(k)).length;
    return res.json({ correct: hits >= 1, feedback: hits >= 1 ? "That sounds right!" : "Good try! Let me explain a bit more." });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 150,
        messages: [{
          role: 'user',
          content: `Question: "${question}"\nExpected concept: "${expectedConcept}"\nStudent said: "${spoken}"\n\nIs the student's answer conceptually correct? Reply with JSON only: {"correct": true/false, "feedback": "one encouraging sentence"}`
        }]
      })
    });
    const data = await response.json();
    const text = data.content?.[0]?.text || '{}';
    const json = JSON.parse(text.match(/\{.*\}/s)?.[0] || '{"correct":true,"feedback":"Good answer!"}');
    res.json(json);
  } catch {
    res.json({ correct: true, feedback: "Good effort! Keep going." });
  }
}
