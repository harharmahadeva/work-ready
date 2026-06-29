export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { message } = req.body;
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ mood: 'okay', reply: "Thanks for sharing that with me. I'm here for you!", suggestion: 'normal' });

  const systemPrompt = `You are Aria, an empathetic AI coach for Chhaya - a woman from India living in Arnhem, Netherlands, working hard to find a job. She just shared how she's feeling today.

Your job:
1. Detect her emotional state from her message. Pick ONE mood from: energised, okay, stressed, sad, overwhelmed
2. Write a warm, genuine, personal reply (2-3 sentences). Like a caring older sister - not clinical, not fake cheerful. Match her energy.
3. Suggest a lesson approach based on mood.

Rules:
- If sad or overwhelmed: be extra gentle. Acknowledge her feelings first before any learning talk. If she seems very low, gently mention she can always talk to someone she trusts.
- If stressed: reassure her, suggest something manageable
- If energised: match that energy, be excited with her
- Never diagnose. Never be preachy. Keep it human.
- Use her name (Chhaya) naturally, once.
- Keep reply under 60 words.

Respond with ONLY valid JSON, no markdown:
{
  "mood": "energised|okay|stressed|sad|overwhelmed",
  "reply": "...",
  "suggestion": "push|normal|easy|chat",
  "suggestionText": "short phrase like 'Let's tackle something new!' or 'Let's take it gentle today'"
}`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 200,
        temperature: 0.7,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ]
      })
    });

    const data = await response.json();
    const raw = data.choices?.[0]?.message?.content || '{}';
    const parsed = JSON.parse(raw.replace(/```json|```/g, '').trim());
    res.json({
      mood: parsed.mood || 'okay',
      reply: parsed.reply || "Thanks for sharing that. I'm always here for you.",
      suggestion: parsed.suggestion || 'normal',
      suggestionText: parsed.suggestionText || "Let's continue where you left off"
    });
  } catch {
    res.json({ mood: 'okay', reply: "Thanks for sharing that with me, Chhaya. I'm always here.", suggestion: 'normal', suggestionText: "Let's keep going!" });
  }
}
