export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { text } = req.body;
  if (!text) return res.status(400).end();

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'no key' });

  // Rachel — warm, calm, natural female voice
  const VOICE_ID = '21m00Tcm4TlvDq8ikWAM';

  // Fix pronunciation: Chhaya → "Chaaya" so ElevenLabs says it naturally
  const processedText = text.replace(/Chhaya/g, 'Chaaya').replace(/chhaya/g, 'chaaya');

  try {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg',
      },
      body: JSON.stringify({
        text: processedText,
        model_id: 'eleven_turbo_v2',
        voice_settings: {
          stability: 0.65,
          similarity_boost: 0.60,
          style: 0.12,
          use_speaker_boost: false
        }
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('ElevenLabs error:', err);
      return res.status(502).json({ error: 'tts failed' });
    }

    const buffer = await response.arrayBuffer();
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(Buffer.from(buffer));
  } catch (e) {
    console.error('TTS exception:', e);
    res.status(500).json({ error: 'tts error' });
  }
}
