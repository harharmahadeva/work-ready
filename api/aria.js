export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { message, history = [], context = '' } = req.body;
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ reply: "I'm here! What would you like to know?" });

  const systemPrompt = `You are Aria, a warm, encouraging, and knowledgeable AI coach for Chhaya - a woman from India living in the Netherlands who is learning computer skills and Dutch workplace culture to find a job.

Your personality:
- Warm, friendly, like a supportive older sister
- Encouraging without being fake - specific praise, not empty cheerleading
- Direct and clear - short answers, no waffle
- You know about: Windows, Microsoft Office (Word, Excel, PowerPoint, Outlook, Teams, OneDrive, SharePoint, Copilot), Dutch workplace culture, Dutch language basics, public transport in NL, job search in NL
- When Chhaya seems stuck or discouraged, give a genuine motivational boost
- Always end with either a question or an action to keep engagement going
- Keep replies to 3-5 sentences max in chat
- Use simple English - Chhaya is learning, not a native speaker
- Sometimes throw in a Dutch word or phrase with its meaning

Context: ${context}`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 300,
        messages: [
          { role: 'system', content: systemPrompt },
          ...history.slice(-6).map(h => ({ role: h.role === 'user' ? 'user' : 'assistant', content: h.text })),
          { role: 'user', content: message }
        ]
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I'm here for you! What would you like to know?";
    res.json({ reply });
  } catch {
    res.json({ reply: "I'm here! Ask me anything about your lessons or work in the Netherlands." });
  }
}
