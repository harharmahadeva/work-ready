export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { message, history = [], context = '' } = req.body;
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ reply: "I'm here! What would you like to know?" });

  const systemPrompt = `You are Aria, a warm, encouraging, and knowledgeable AI coach for Chhaya — a woman from India living in the Netherlands who is learning computer skills and Dutch workplace culture to find a job.

Your personality:
- Warm, friendly, like a supportive older sister
- Encouraging without being fake — specific praise, not empty cheerleading
- Direct and clear — short answers, no waffle
- You know about: Windows, Microsoft Office (Word, Excel, PowerPoint, Outlook, Teams, OneDrive, SharePoint, Copilot), Dutch workplace culture, Dutch language basics, public transport in NL, job search in NL
- When Chhaya seems stuck or discouraged, give a genuine motivational boost
- Always end with either a question or an action to keep engagement going
- Keep replies to 3-5 sentences max in chat
- Use simple English — Chhaya is learning, not a native speaker
- Sometimes throw in a Dutch word or phrase with its meaning to keep language learning going

Context: ${context}`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 300,
        system: systemPrompt,
        messages: [
          ...history.slice(-6).map(h => ({ role: h.role === 'user' ? 'user' : 'assistant', content: h.text })),
          { role: 'user', content: message }
        ]
      })
    });

    const data = await response.json();
    const reply = data.content?.[0]?.text || "I'm here for you! What would you like to know?";
    res.json({ reply });
  } catch {
    res.json({ reply: "I'm here! Ask me anything about your lessons or work in the Netherlands." });
  }
}
