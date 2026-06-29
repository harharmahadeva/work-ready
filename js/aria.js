// Aria — Chhaya's AI voice coach
const Aria = (() => {
  let synth = window.speechSynthesis;
  let voice = null;
  let speaking = false;
  let indicator = null;

  // Pick best female voice
  function pickVoice() {
    const voices = synth.getVoices();
    const preferred = ['Samantha', 'Karen', 'Moira', 'Tessa', 'Victoria', 'Fiona',
      'Google UK English Female', 'Microsoft Zira', 'Microsoft Hazel', 'en-GB', 'en-US'];
    for (const name of preferred) {
      const v = voices.find(v => v.name.includes(name) || v.lang.startsWith(name));
      if (v) return v;
    }
    return voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('female'))
      || voices.find(v => v.lang.startsWith('en'))
      || voices[0];
  }

  function init() {
    indicator = document.getElementById('aria-speaking');
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = () => { voice = pickVoice(); };
    }
    voice = pickVoice();
  }

  function speak(text, { rate = 0.88, pitch = 1.05, onEnd } = {}) {
    if (!synth) return;
    synth.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.voice = voice || pickVoice();
    utt.rate = rate;
    utt.pitch = pitch;
    utt.lang = 'en-GB';
    utt.onstart = () => { speaking = true; if (indicator) indicator.classList.add('show'); };
    utt.onend = () => { speaking = false; if (indicator) indicator.classList.remove('show'); if (onEnd) onEnd(); };
    utt.onerror = () => { speaking = false; if (indicator) indicator.classList.remove('show'); };
    synth.speak(utt);
  }

  function speakDutch(text, { onEnd } = {}) {
    if (!synth) return;
    synth.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    const dutchVoice = synth.getVoices().find(v => v.lang.startsWith('nl')) || voice;
    utt.voice = dutchVoice;
    utt.rate = 0.82;
    utt.pitch = 1.05;
    utt.lang = 'nl-NL';
    utt.onstart = () => { speaking = true; if (indicator) indicator.classList.add('show'); };
    utt.onend = () => { speaking = false; if (indicator) indicator.classList.remove('show'); if (onEnd) onEnd(); };
    synth.speak(utt);
  }

  function stop() { synth.cancel(); speaking = false; if (indicator) indicator.classList.remove('show'); }
  function isSpeaking() { return speaking; }

  // ── Scripted motivational lines ──
  const lines = {
    welcome: "Hi Chhaya! I'm Aria, your personal work coach. I'm so happy you're here. Together we're going to build all the skills you need to walk into any office with confidence. Are you ready? Let's do this!",
    firstLesson: "You just finished your very first lesson. That means you've already started — and most people never even begin. You are not most people, Chhaya.",
    wrongAnswer: "That one was tricky! Don't worry at all — getting it wrong now means you'll remember it forever. Let me explain it a different way.",
    rightAnswer: "That's exactly right! Well done!",
    allRight: "Perfect score! You really understood that. Brilliant!",
    moduleComplete: (name) => `You just completed the ${name} module! That is a real achievement. Every lesson you finish brings you one step closer to that job. I'm so proud of you.`,
    comeback: (name) => `Welcome back, ${name}! I missed you. You were doing so well. Shall we pick up exactly where you left off?`,
    pronunciation3fail: "This one is genuinely hard — even Dutch people find it tricky to explain! Let's move on and come back to it. Your effort is what matters, not perfection.",
    screenshotGood: "I can see your work on screen — and you did it correctly! That's exactly what an employer would want to see. You're building real skills now.",
    streakDay: (n) => `${n} days in a row! That kind of consistency is exactly what successful people do. You should be really proud of yourself.`,
    allDone: "Chhaya. You did it. Every single module. You came here knowing very little about computers and the Dutch workplace — and look at you now. You are ready. Go get that job. I believe in you completely.",
    encourageStart: (lesson) => `Today we're learning ${lesson}. By the end of this lesson you'll know exactly what to do — and you'll feel so much more confident. Let's go!`,
    micGood: "That sounded great! Clear and confident — just like that at work.",
    micRetry: "Almost there! Try once more — just a little slower and clearer.",
    xpEarned: (n) => `You earned ${n} experience points! You're growing every single day.`,
    goodMorning: "Good morning! What a great day to learn something new. What shall we work on today?",
    goodAfternoon: "Good afternoon! You're here — that means you're serious about your future. Let's make the most of today.",
    goodEvening: "Good evening! Even in the evening you're here learning. That dedication will absolutely pay off.",
  };

  function greet(name) {
    const h = new Date().getHours();
    if (h < 12) speak(lines.goodMorning);
    else if (h < 17) speak(lines.goodAfternoon);
    else speak(lines.goodEvening);
  }

  // ── Contextual chat with Claude API ──
  async function chat(userMsg, context = '') {
    try {
      const history = Storage.getChatHistory().slice(-6);
      const res = await fetch('/api/aria', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history, context })
      });
      const data = await res.json();
      const reply = data.reply || "I'm here for you! What would you like to know?";
      Storage.addChatMsg('user', userMsg);
      Storage.addChatMsg('assistant', reply);
      return reply;
    } catch {
      return "I'm here! Tell me more — what's on your mind?";
    }
  }

  return { init, speak, speakDutch, stop, isSpeaking, lines, greet, chat };
})();
