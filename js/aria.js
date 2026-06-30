// Aria - Chhaya's AI voice coach
const Aria = (() => {
  let synth = window.speechSynthesis;
  let voice = null;
  let speaking = false;
  let indicator = null;

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

  // ElevenLabs TTS — cache blobs so repeated lines don't hit the API twice
  const audioCache = new Map();
  let currentAudio = null;

  async function speakEL(text, { onEnd } = {}) {
    try {
      if (currentAudio) { currentAudio.pause(); currentAudio = null; }
      speaking = true;
      if (indicator) indicator.classList.add('show');

      let url = audioCache.get(text);
      if (!url) {
        const res = await fetch('/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text })
        });
        if (!res.ok) throw new Error('tts failed');
        const blob = await res.blob();
        url = URL.createObjectURL(blob);
        audioCache.set(text, url);
      }

      const audio = new Audio(url);
      currentAudio = audio;
      audio.onended = () => {
        speaking = false;
        currentAudio = null;
        if (indicator) indicator.classList.remove('show');
        if (onEnd) onEnd();
      };
      audio.onerror = () => {
        speaking = false;
        currentAudio = null;
        if (indicator) indicator.classList.remove('show');
        speakFallback(text, { onEnd });
      };
      audio.play();
    } catch {
      speakFallback(text, { onEnd });
    }
  }

  function speakFallback(text, { rate = 0.88, pitch = 1.05, onEnd } = {}) {
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

  function speak(text, { rate = 0.88, pitch = 1.05, onEnd } = {}) {
    speakEL(text, { onEnd }).catch(() => speakFallback(text, { rate, pitch, onEnd }));
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

  function stop() {
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    synth.cancel();
    speaking = false;
    if (indicator) indicator.classList.remove('show');
  }
  function isSpeaking() { return speaking; }

  // Pick a random item from an array
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  // ── Weather ──
  const WMO = {
    0: { label: 'clear skies', emoji: '☀️' },
    1: { label: 'mainly clear', emoji: '🌤️' },
    2: { label: 'partly cloudy', emoji: '⛅' },
    3: { label: 'overcast', emoji: '☁️' },
    45: { label: 'foggy', emoji: '🌫️' },
    48: { label: 'foggy', emoji: '🌫️' },
    51: { label: 'light drizzle', emoji: '🌦️' },
    53: { label: 'drizzle', emoji: '🌦️' },
    55: { label: 'heavy drizzle', emoji: '🌧️' },
    61: { label: 'light rain', emoji: '🌧️' },
    63: { label: 'rain', emoji: '🌧️' },
    65: { label: 'heavy rain', emoji: '🌧️' },
    71: { label: 'light snow', emoji: '🌨️' },
    73: { label: 'snow', emoji: '❄️' },
    75: { label: 'heavy snow', emoji: '❄️' },
    80: { label: 'rain showers', emoji: '🌦️' },
    81: { label: 'rain showers', emoji: '🌧️' },
    82: { label: 'heavy showers', emoji: '⛈️' },
    95: { label: 'thunderstorm', emoji: '⛈️' },
  };

  async function fetchWeather(lat = 51.98, lon = 5.91, timezone = 'Europe/Amsterdam') {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4000);
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode&timezone=${encodeURIComponent(timezone)}`,
        { signal: controller.signal }
      );
      clearTimeout(timeout);
      const data = await res.json();
      const temp = Math.round(data.current.temperature_2m);
      const code = data.current.weathercode;
      const w = WMO[code] || { label: 'cloudy', emoji: '☁️' };
      return { temp, label: w.label, emoji: w.emoji };
    } catch {
      return null;
    }
  }

  // ── Scripted motivational lines (arrays for variety) ──
  const lines = {
    welcome: "Hi Chhaya! I'm Aria, your personal work coach. I'm so happy you're here. Together we're going to build all the skills you need to walk into any office with confidence. Are you ready? Let's do this!",

    firstLesson: [
      "You just finished your very first lesson. That means you've already started - and most people never even begin. You are not most people, Chhaya.",
      "First lesson done! You know what? The hardest step is always the first one - and you just took it. I'm so proud of you.",
      "Look at you - one lesson down! That might seem small, but it's how every great journey begins. Keep going!"
    ],

    wrongAnswer: [
      "That one was tricky! Don't worry at all - getting it wrong now means you'll remember it forever. Let me explain it a different way.",
      "No worries! This is exactly how learning works. Every mistake is your brain getting stronger. Let's try again.",
      "Almost! You're closer than you think. Take a breath and let's look at it together.",
      "That's okay - this catches a lot of people out. The fact that you tried is what matters most."
    ],

    rightAnswer: [
      "That's exactly right! Well done!",
      "Yes! Perfect. You've got this.",
      "Correct! See? You're smarter than you think.",
      "Brilliant! That's exactly the answer.",
      "Spot on! You're doing great."
    ],

    allRight: [
      "Perfect score! You really understood that. Brilliant!",
      "Full marks! That was impressive, Chhaya.",
      "Everything correct! You are on fire today.",
      "One hundred percent! That confidence is going to serve you so well at work."
    ],

    moduleComplete: (name) => pick([
      `You just completed the ${name} module! That is a real achievement. Every lesson you finish brings you one step closer to that job. I'm so proud of you.`,
      `The ${name} module - finished! You should feel genuinely good about yourself right now. That took real commitment.`,
      `${name} - done! Chhaya, you are building something real here. One module at a time, you are becoming job-ready.`
    ]),

    comeback: (name) => pick([
      `Welcome back, ${name}! I missed you. You were doing so well. Shall we pick up exactly where you left off?`,
      `${name}! You came back - I knew you would. Ready to keep going? You were on such a good streak.`,
      `Good to see you again, ${name}! Every time you come back, you're investing in your future. Let's make today count.`
    ]),

    pronunciation3fail: [
      "This one is genuinely hard - even Dutch people find it tricky to explain! Let's move on and come back to it. Your effort is what matters, not perfection.",
      "Don't be hard on yourself - pronunciation takes time and repetition. You're doing the right thing by practicing. Let's continue.",
      "That sound is one of the trickiest in Dutch! Native speakers practised for years. Give yourself some grace and let's keep moving."
    ],

    screenshotGood: [
      "I can see your work on screen - and you did it correctly! That's exactly what an employer would want to see. You're building real skills now.",
      "Perfect! That's exactly right. If a manager could see your screen right now, they'd be impressed.",
      "Brilliant work! You followed every step correctly. This is exactly the kind of confidence you'll bring to your new job."
    ],

    streakDay: (n) => pick([
      `${n} days in a row! That kind of consistency is exactly what successful people do. You should be really proud of yourself.`,
      `${n} days straight! Do you know how rare that is? Most people give up. You just keep showing up. Amazing.`,
      `${n} day streak! Your future employer is going to get someone who never gives up. That's you, Chhaya.`
    ]),

    allDone: "Chhaya. You did it. Every single module. You came here knowing very little about computers and the Dutch workplace - and look at you now. You are ready. Go get that job. I believe in you completely.",

    encourageStart: (lesson) => pick([
      `Today we're learning ${lesson}. By the end of this lesson you'll know exactly what to do - and you'll feel so much more confident. Let's go!`,
      `${lesson} - this one is really practical. You're going to use this skill in your very first week at work. Pay attention!`,
      `Ready? We're doing ${lesson} today. This is the kind of thing Dutch colleagues will expect you to know - and after this, you will.`
    ]),

    micGood: [
      "That sounded great! Clear and confident - just like that at work.",
      "Excellent! Your pronunciation is really improving. Keep that energy.",
      "Perfect! That was clear and natural. A Dutch colleague would understand you perfectly."
    ],

    micRetry: [
      "Almost there! Try once more - just a little slower and clearer.",
      "So close! Take a breath and try again - you've got this.",
      "Nearly perfect! One more time, nice and steady."
    ],

    xpEarned: (n) => pick([
      `You earned ${n} experience points! You're growing every single day.`,
      `${n} XP! Every point is proof that you showed up and did the work.`,
      `${n} more XP in the bank! You're making real progress, Chhaya.`
    ]),

    laptopModule: (name) => pick([
      `Quick heads up - this is the ${name} module and you will need your Windows laptop to practice properly. If you're on your phone right now, open Chrome on your laptop and go to work-ready dot vercel dot app. Your progress is saved and ready for you there!`,
      `For ${name} lessons, you really want to be on your laptop so you can try everything as we go. If you're on your phone, hop onto your laptop and go to work-ready dot vercel dot app - I'll be right here waiting!`,
      `Hey - just to let you know, ${name} is a hands-on module and you'll need your laptop open alongside me. If you're on your phone, that's okay for now - but switch to your laptop when you can. The address is work-ready dot vercel dot app.`
    ]),

    laptopExercise: [
      "Now it's time to try this on your actual laptop! Pause here, open your laptop, and follow the steps. When you're done, come back and upload your screenshot so I can check your work.",
      "This is a hands-on exercise - you'll need your laptop for this one. Do it now while it's fresh. Come back here when you're ready to upload your screenshot!",
      "Practice time! Open your laptop and try what we just learned. Don't skip this - doing it yourself is how it really sticks. I'll be here when you come back with your screenshot."
    ],

    weatherGreets: {
      sunny: [
        "What a beautiful sunny day in Arnhem! Perfect energy for learning something new.",
        "The sun is out! Use that good energy - let's have a brilliant session today.",
        "Gorgeous weather outside! Come on, let's make the most of this sunny mood."
      ],
      cloudy: [
        "A bit grey outside, but you're here - and that's what matters. Let's brighten the day with a good lesson.",
        "Cloudy in Arnhem today, but inside we're making sunshine. Ready to learn?",
        "Dutch weather, right? But don't let the clouds slow you down. Let's go!"
      ],
      rain: [
        "It's raining in Arnhem - perfect weather to stay in and learn something! Let's make good use of this cosy day.",
        "Rainy day outside - ideal! No distractions, just you, me, and a great lesson. Let's do this.",
        "Dutch rain! You know what they say - there's no bad weather, only bad preparation. And you're preparing perfectly."
      ],
      cold: [
        "It's chilly out there in Arnhem! Warm up your brain with today's lesson.",
        "Brr, cold day! Good thing you're inside learning. Let's heat things up with something new.",
      ],
      warm: [
        "Lovely and warm in Arnhem today! Ride that good energy into your lesson.",
        "Beautiful warm weather out there! You're doing the right thing investing in yourself today.",
      ]
    }
  };

  async function greet(name, user = {}) {
    const h = new Date().getHours();
    const timeGreet = h < 5 ? 'Good night' : h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : h < 21 ? 'Good evening' : 'Good night';

    const city = user.city || 'Arnhem';
    const fallbackWeatherLines = [
      `I couldn't check the weather in ${city} right now, but whatever it's like outside - you're in the right place!`,
      `Not sure what the weather is doing in ${city} today, but rain or shine, you're here. That's what counts.`,
    ];

    const weather = await fetchWeather(user.lat, user.lon, user.timezone);
    let weatherLine = '';
    if (weather) {
      const { temp, label } = weather;
      let bucket;
      if (label.includes('rain') || label.includes('drizzle') || label.includes('shower') || label.includes('storm')) bucket = 'rain';
      else if (label.includes('snow') || temp < 5) bucket = 'cold';
      else if (label.includes('clear') || label.includes('sunny')) bucket = 'sunny';
      else if (temp > 22) bucket = 'warm';
      else bucket = 'cloudy';
      weatherLine = ' ' + pick(lines.weatherGreets[bucket]).replace(/in Arnhem/g, `in ${city}`).replace(/Arnhem/g, city);
    } else {
      weatherLine = ' ' + pick(fallbackWeatherLines);
    }

    const fullGreeting = `${timeGreet}, ${name}!${weatherLine}`;
    return new Promise(resolve => {
      speakEL(fullGreeting, { onEnd: resolve }).catch(() => {
        speakFallback(fullGreeting, { onEnd: resolve });
      });
    });
  }

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
      return "I'm here! Tell me more - what's on your mind?";
    }
  }

  return { init, speak, speakDutch, stop, isSpeaking, lines, pick, greet, chat, fetchWeather };
})();
