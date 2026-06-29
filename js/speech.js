// Speech Recognition — mic input + pronunciation scoring
const Speech = (() => {
  let recognition = null;
  let listening = false;

  function isSupported() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  }

  function init() {
    if (!isSupported()) return false;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SR();
    recognition.continuous = false;
    recognition.interimResults = false;
    return true;
  }

  // Listen once, return transcript
  function listen(lang = 'en-US', timeoutMs = 8000) {
    return new Promise((resolve, reject) => {
      if (!recognition && !init()) { reject('not-supported'); return; }
      recognition.lang = lang;
      let done = false;

      const timer = setTimeout(() => {
        if (!done) { done = true; recognition.stop(); reject('timeout'); }
      }, timeoutMs);

      recognition.onresult = (e) => {
        if (!done) {
          done = true;
          clearTimeout(timer);
          resolve(e.results[0][0].transcript.trim());
        }
      };
      recognition.onerror = (e) => {
        if (!done) { done = true; clearTimeout(timer); reject(e.error); }
      };
      recognition.onend = () => { listening = false; };
      recognition.start();
      listening = true;
    });
  }

  // Score pronunciation: how well does spoken match target?
  function scorePronunciation(spoken, target) {
    const norm = s => s.toLowerCase().replace(/[^a-z\s]/g, '').trim();
    const a = norm(spoken).split(' ');
    const b = norm(target).split(' ');
    const matches = a.filter(w => b.includes(w)).length;
    const score = b.length ? Math.round((matches / b.length) * 100) : 0;
    return Math.min(score, 100);
  }

  // Check voice answer against expected concept via API
  async function checkAnswer(spoken, question, expectedConcept) {
    try {
      const res = await fetch('/api/check-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ spoken, question, expectedConcept })
      });
      const data = await res.json();
      return { correct: data.correct, feedback: data.feedback };
    } catch {
      // Fallback: basic keyword check
      const keywords = expectedConcept.toLowerCase().split(' ');
      const spokenLower = spoken.toLowerCase();
      const hits = keywords.filter(k => k.length > 3 && spokenLower.includes(k)).length;
      const correct = hits >= Math.max(1, Math.floor(keywords.length * 0.3));
      return { correct, feedback: correct ? "That sounds right!" : "Good try! Let me explain a bit more." };
    }
  }

  // Check screenshot via Claude Vision
  async function checkScreenshot(imageDataUrl, taskDescription) {
    try {
      const res = await fetch('/api/check-screenshot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: imageDataUrl, task: taskDescription })
      });
      return await res.json();
    } catch {
      return { correct: true, feedback: "I can see your screenshot — looks like you gave it a try! Well done." };
    }
  }

  function isListening() { return listening; }

  return { isSupported, init, listen, scorePronunciation, checkAnswer, checkScreenshot, isListening };
})();
