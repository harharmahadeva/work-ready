export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { spoken, question, expectedConcept } = req.body;
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    const keywords = expectedConcept.toLowerCase().split(' ');
    const hits = keywords.filter(k => k.length > 3 && spoken.toLowerCase().includes(k)).length;
    return res.json({ correct: hits >= 1, feedback: hits >= 1 ? "That sounds right!" : "Good try! Let me explain a bit more." });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 150,
        messages: [
          { role: 'system', content: 'You are a helpful, encouraging language coach. Reply only with valid JSON.' },
          { role: 'user', content: `Question: "${question}"\nExpected concept: "${expectedConcept}"\nStudent said: "${spoken}"\n\nIs the student's answer conceptually correct? Reply with JSON only: {"correct": true/false, "feedback": "one encouraging sentence"}` }
        ]
      })
    });
    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || '{}';
    const json = JSON.parse(text.match(/\{.*\}/s)?.[0] || '{"correct":true,"feedback":"Good answer!"}');
    res.json(json);
  } catch {
    res.json({ correct: true, feedback: "Good effort! Keep going." });
  }
}
