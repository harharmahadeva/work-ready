export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { image, task } = req.body;
  const apiKey = process.env.GROQ_API_KEY;

  // Groq supports vision via llama-3.2-11b-vision-preview
  if (!apiKey) return res.json({ correct: true, feedback: "Great work! I can see you gave it a try. Well done!" });

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.2-11b-vision-preview',
        max_tokens: 200,
        messages: [{
          role: 'user',
          content: [
            { type: 'image_url', image_url: { url: image } },
            { type: 'text', text: `Task the student was asked to do: "${task}"\n\nLook at this screenshot. Did the student complete the task? Be warm and encouraging. Reply with JSON only: {"correct": true/false, "feedback": "2-3 encouraging sentences mentioning what you can see"}` }
          ]
        }]
      })
    });
    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || '{}';
    const json = JSON.parse(text.match(/\{.*\}/s)?.[0] || '{"correct":true,"feedback":"I can see your work — well done!"}');
    res.json(json);
  } catch {
    res.json({ correct: true, feedback: "I can see your screenshot — great effort! You're doing brilliantly." });
  }
}
