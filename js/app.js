// Work Ready — Main App
document.addEventListener('DOMContentLoaded', () => {
  Speech.init();
  Aria.init();

  // ── PIN login ──
  const CORRECT_PIN = '1234'; // change to actual PIN
  let pinEntry = '';

  const pinDots = document.querySelectorAll('.pin-dot');
  const pinError = document.getElementById('pin-error');

  document.querySelectorAll('.pin-key').forEach(key => {
    key.addEventListener('click', () => {
      const val = key.dataset.val;
      if (val === 'del') {
        pinEntry = pinEntry.slice(0, -1);
      } else if (pinEntry.length < 4) {
        pinEntry += val;
      }
      updatePinDots();
      if (pinEntry.length === 4) checkPin();
    });
  });

  function updatePinDots() {
    pinDots.forEach((d, i) => d.classList.toggle('filled', i < pinEntry.length));
  }

  async function checkPin() {
    const hash = await sha256(pinEntry);
    fetch('/data/users.json').then(r => r.json()).then(data => {
      const user = data.users.find(u => u.pin_hash === hash);
      if (user) {
        Storage.setUser(user);
        pinError.textContent = '';
        Storage.getOnboarded() ? goHome() : goOnboard();
      } else {
        pinError.textContent = 'Incorrect PIN — try again';
        pinEntry = '';
        updatePinDots();
        setTimeout(() => { pinError.textContent = ''; }, 2000);
      }
    }).catch(() => {
      // Dev fallback: any 4-digit PIN works
      if (pinEntry === '1234') {
        Storage.setUser({ id: 'chhaya', name: 'Chhaya', lang: 'en' });
        Storage.getOnboarded() ? goHome() : goOnboard();
      } else {
        pinError.textContent = 'Incorrect PIN — try again';
        pinEntry = '';
        updatePinDots();
      }
    });
  }

  // Simple SHA-256 polyfill via SubtleCrypto
  async function sha256(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  // Sync fallback for comparison
  function sha256Sync(str) {
    // We use async sha256 above; here just compare directly for dev
    return str;
  }

  // ── Onboarding slides ──
  const onboardSlides = [
    {
      emoji: '👋',
      title: 'Welcome, Chhaya!',
      text: "I'm Aria, your personal work coach. I'll be with you every step of the way — teaching, encouraging, and cheering you on.",
    },
    {
      emoji: '🎯',
      title: 'What we\'ll cover',
      text: 'Computer skills, Microsoft Office, Dutch workplace culture, public transport, job search — everything you need to walk into any Dutch office with confidence.',
    },
    {
      emoji: '🎤',
      title: 'Voice + Mic learning',
      text: "I'll speak to you and you'll speak back. Say phrases out loud, answer questions by voice, and I'll check if you're on the right track.",
    },
    {
      emoji: '📸',
      title: 'Real practice',
      text: "Some exercises ask you to try things on your laptop and upload a screenshot. I'll check your work and give you feedback.",
    },
    {
      emoji: '💛',
      title: 'Go at your own pace',
      text: "There are no timers, no failing, no judgement. Just learning, growing, and building your confidence one lesson at a time. You've got this!",
    }
  ];
  let obIdx = 0;

  function renderOnboard() {
    const s = onboardSlides[obIdx];
    document.getElementById('ob-emoji').textContent = s.emoji;
    document.getElementById('ob-title').textContent = s.title;
    document.getElementById('ob-text').textContent = s.text;
    document.querySelectorAll('.onboard-dot').forEach((d, i) => d.classList.toggle('on', i === obIdx));
    document.getElementById('ob-next').textContent = obIdx < onboardSlides.length - 1 ? 'Next →' : "Let's start! 🚀";
  }

  document.getElementById('ob-next').addEventListener('click', () => {
    if (obIdx < onboardSlides.length - 1) {
      obIdx++;
      renderOnboard();
      const slide = onboardSlides[obIdx];
      Aria.speak(slide.text);
    } else {
      Storage.setOnboarded();
      goHome();
      setTimeout(() => {
        const u = Storage.getUser();
        Aria.speak(Aria.lines.welcome);
      }, 500);
    }
  });

  // ── Navigation ──
  let currentScreen = 'login';

  function show(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.toggle('hidden', s.id !== 'screen-' + id));
    currentScreen = id;
    const showNav = ['home', 'aria-chat'].includes(id);
    document.getElementById('bottom-nav').style.display = showNav ? 'flex' : 'none';
  }

  function goHome() {
    show('home');
    renderHome();
    const streak = Storage.updateStreak();
    if (streak > 1) setTimeout(() => Aria.speak(Aria.lines.streakDay(streak)), 1000);
    else {
      const u = Storage.getUser();
      if (u) setTimeout(() => Aria.greet(u.name), 800);
    }
  }

  function goOnboard() {
    show('onboard');
    renderOnboard();
    setTimeout(() => Aria.speak(onboardSlides[0].text), 500);
  }

  // ── Logout ──
  window.logout = function() {
    Storage.clearUser();
    show('login');
    pinEntry = '';
    updatePinDots();
  };

  // ── Home screen ──
  function renderHome() {
    const u = Storage.getUser();
    if (!u) return;
    document.getElementById('home-name').textContent = u.name;
    document.getElementById('home-version').textContent = 'v' + APP_VERSION;

    const pct = Storage.getTotalPercent(MODULES);
    document.getElementById('home-prog-fill').style.width = pct + '%';
    document.getElementById('home-prog-pct').textContent = pct + '%';

    const xp = Storage.getXP();
    document.getElementById('home-xp').textContent = xp + ' XP';

    // Resume card
    const resumeEl = document.getElementById('resume-card');
    const last = Storage.getLastLesson();
    if (last) {
      const mod = MODULES.find(m => m.id === last.moduleId);
      if (mod) {
        resumeEl.style.display = 'flex';
        document.getElementById('resume-text').textContent = last.lessonTitle;
        document.getElementById('resume-mod').textContent = last.moduleName;
        resumeEl.onclick = () => { activeModule = mod; openLesson(last.lessonIdx); };
      } else {
        resumeEl.style.display = 'none';
      }
    } else {
      resumeEl.style.display = 'none';
    }

    const grid = document.getElementById('module-grid');
    grid.innerHTML = '';
    MODULES.forEach((m, idx) => {
      const pct = Storage.getModulePercent(m.id, m.lessons.length);
      const doneCount = Storage.getLessonsDone(m.id).length;
      const card = document.createElement('div');
      const isLastOdd = MODULES.length % 2 !== 0 && idx === MODULES.length - 1;
      card.className = 'module-card' + (isLastOdd ? ' mc-wide' : '');
      card.innerHTML = `
        ${pct === 100 ? '<div class="mc-done-badge">✓</div>' : ''}
        <div class="mc-row1">
          <div class="mc-icon">${m.icon}</div>
          <div class="mc-info">
            <div class="mc-name">${m.name}</div>
            <div class="mc-phase">${m.phase}</div>
          </div>
        </div>
        <div class="mc-bottom">
          <div class="mc-count">${doneCount}/${m.lessons.length}</div>
          <div class="mc-bar"><div class="mc-fill" style="width:${pct}%;background:${m.color}"></div></div>
        </div>
      `;
      card.addEventListener('click', () => openModule(m));
      grid.appendChild(card);
    });
  }

  // ── Module / Lesson ──
  let activeModule = null;
  let activeLessonIdx = 0;
  let activeStepIdx = 0;
  let quizAnswered = false;

  function openModule(mod) {
    activeModule = mod;
    // Find first incomplete lesson
    const doneList = Storage.getLessonsDone(mod.id);
    activeLessonIdx = mod.lessons.findIndex((_, i) => !doneList.includes(i));
    if (activeLessonIdx === -1) activeLessonIdx = 0;
    openLesson(activeLessonIdx);
  }

  function openLesson(idx) {
    activeLessonIdx = idx;
    activeStepIdx = 0;
    quizAnswered = false;

    const lesson = activeModule.lessons[idx];
    Storage.setLastLesson(activeModule.id, idx, lesson.title, activeModule.name);
    document.getElementById('lesson-mod-name').textContent = activeModule.name;
    document.getElementById('lesson-title').textContent = lesson.title;

    // Progress dots
    const dotsEl = document.getElementById('lesson-prog');
    dotsEl.innerHTML = lesson.steps.map((_, i) => `<div class="lesson-prog-dot ${i === 0 ? 'active' : ''}"></div>`).join('');

    show('lesson');
    renderStep();

    // Aria intro
    const introLine = Aria.lines.encourageStart(lesson.title);
    setTimeout(() => Aria.speak(introLine), 500);
  }

  function renderStep() {
    const lesson = activeModule.lessons[activeLessonIdx];
    const step = lesson.steps[activeStepIdx];
    const body = document.getElementById('lesson-body');
    body.innerHTML = '';
    quizAnswered = false;

    // Update progress dots
    document.querySelectorAll('.lesson-prog-dot').forEach((d, i) => {
      d.classList.toggle('done', i < activeStepIdx);
      d.classList.toggle('active', i === activeStepIdx);
    });

    switch (step.type) {
      case 'learn': renderLearnCard(step, body); break;
      case 'aria': renderAriaMsg(step, body); break;
      case 'quiz': renderQuiz(step, body); break;
      case 'speak': renderMic(step, body); break;
      case 'exercise': renderExercise(step, body); break;
      case 'complete': renderComplete(step, body); break;
    }

    body.scrollTop = 0;
  }

  function nextStep() {
    const lesson = activeModule.lessons[activeLessonIdx];
    if (activeStepIdx < lesson.steps.length - 1) {
      activeStepIdx++;
      renderStep();
    }
  }

  function renderLearnCard(step, body) {
    let listHtml = '';
    if (step.list) listHtml = `<ul>${step.list.map(l => `<li>${l}</li>`).join('')}</ul>`;

    let dutchHtml = '';
    if (step.dutch && step.dutch.length) {
      dutchHtml = `<div class="dutch-card">
        <div class="dc-label">🇳🇱 Dutch terms</div>
        <div class="dutch-grid">
          ${step.dutch.map(d => `<div class="dutch-pair">
            <div class="dw">${d.nl}</div>
            <div class="de">${d.en}</div>
            <div class="speak-btn" onclick="Aria.speakDutch('${d.nl.replace(/'/g, "\\'")}')">🔊 Hear it</div>
          </div>`).join('')}
        </div>
      </div>`;
    }

    body.innerHTML = `
      <div class="card">
        <div class="card-icon">${step.icon || '📖'}</div>
        <h3>${step.title}</h3>
        <p>${step.body}</p>
        ${listHtml}
      </div>
      ${dutchHtml}
      <button class="btn btn-primary btn-block" onclick="nextStep()">Continue →</button>
    `;
  }

  function renderAriaMsg(step, body) {
    body.innerHTML = `
      <div class="aria-msg">
        <div class="aria-msg-avatar">🎙️</div>
        <div class="aria-msg-body">
          <p>"${step.text}"</p>
          <div class="play-btn" onclick="Aria.speak('${step.text.replace(/'/g, "\\'")}')">🔊 Play again</div>
        </div>
      </div>
      <button class="btn btn-primary btn-block" onclick="nextStep()">Got it →</button>
    `;
    Aria.speak(step.text);
  }

  function renderQuiz(step, body) {
    const optHtml = step.options.map((opt, i) => `
      <div class="quiz-opt" id="opt-${i}" onclick="answerQuiz(${i})">
        <div class="opt-icon" id="opt-icon-${i}"></div>
        ${opt}
      </div>`).join('');

    body.innerHTML = `
      <div class="quiz-card">
        <h3>❓ ${step.question}</h3>
        <div class="quiz-options">${optHtml}</div>
        <div class="quiz-feedback" id="quiz-feedback" style="display:none"></div>
      </div>
      <button class="btn btn-primary btn-block" id="quiz-next" style="display:none" onclick="nextStep()">Continue →</button>
    `;
  }

  window.answerQuiz = function(idx) {
    if (quizAnswered) return;
    quizAnswered = true;
    const lesson = activeModule.lessons[activeLessonIdx];
    const step = lesson.steps[activeStepIdx];
    const correct = idx === step.correct;

    document.querySelectorAll('.quiz-opt').forEach((el, i) => {
      el.style.pointerEvents = 'none';
      if (i === step.correct) { el.classList.add('correct'); document.getElementById('opt-icon-' + i).textContent = '✓'; }
      else if (i === idx && !correct) { el.classList.add('wrong'); document.getElementById('opt-icon-' + i).textContent = '✗'; }
    });

    const fb = document.getElementById('quiz-feedback');
    fb.style.display = 'block';
    if (correct) {
      fb.className = 'quiz-feedback good';
      fb.textContent = '✓ ' + step.feedback;
      Storage.addXP(10);
      Aria.speak(Aria.lines.rightAnswer);
    } else {
      fb.className = 'quiz-feedback bad';
      fb.textContent = '💡 ' + step.feedback;
      Aria.speak(Aria.lines.wrongAnswer);
    }
    document.getElementById('quiz-next').style.display = 'block';
  };

  function renderMic(step, body) {
    body.innerHTML = `
      <div class="mic-card">
        <h3>🎤 Speaking Practice</h3>
        <p class="text-sm" style="margin-bottom:8px">${step.instruction}</p>
        <div class="target-phrase">
          ${step.phrase}
          ${step.phraseNl ? `<div class="phrase-nl">🇳🇱 ${step.phraseNl}</div>` : ''}
        </div>
        <div style="text-align:center">
          <div class="text-sm mt-8">Aria says it first — then tap the mic and say it yourself</div>
          <button class="mic-btn" id="mic-btn" onclick="startMic('${step.phrase.replace(/'/g, "\\'")}','${step.lang || 'en-US'}')">🎤</button>
          <div class="mic-waves" id="mic-waves" style="display:none">
            ${[...Array(7)].map((_, i) => `<div class="mic-wave-bar" style="height:${4 + Math.random() * 14}px;animation-delay:${i * 0.08}s"></div>`).join('')}
          </div>
          <div class="mic-result" id="mic-result" style="display:none"></div>
        </div>
      </div>
      <button class="btn btn-primary btn-block" id="mic-next" style="display:none" onclick="nextStep()">Continue →</button>
      <button class="btn btn-ghost btn-block mt-8" onclick="nextStep()">Skip for now</button>
    `;
    // Aria models the phrase first
    const lang = step.lang || 'en-US';
    if (lang.startsWith('nl')) {
      Aria.speakDutch(step.phrase);
    } else {
      Aria.speak(step.phrase);
    }
  }

  let micAttempts = 0;
  window.startMic = async function(phrase, lang) {
    const btn = document.getElementById('mic-btn');
    const waves = document.getElementById('mic-waves');
    const result = document.getElementById('mic-result');

    if (!Speech.isSupported()) {
      result.style.display = 'block';
      result.className = 'mic-result retry';
      result.textContent = 'Microphone not supported in this browser. Try Chrome on Android.';
      document.getElementById('mic-next').style.display = 'block';
      return;
    }

    btn.classList.add('listening');
    waves.style.display = 'flex';
    result.style.display = 'none';
    btn.textContent = '⏹';

    try {
      const spoken = await Speech.listen(lang, 8000);
      btn.classList.remove('listening');
      waves.style.display = 'none';
      btn.textContent = '🎤';

      const score = Speech.scorePronunciation(spoken, phrase);
      result.style.display = 'block';

      if (score >= 60) {
        result.className = 'mic-result good';
        result.textContent = `✓ "${spoken}" — Score: ${score}% — Well done!`;
        Storage.addXP(15);
        Aria.speak(Aria.lines.micGood);
        document.getElementById('mic-next').style.display = 'block';
        micAttempts = 0;
      } else {
        micAttempts++;
        result.className = 'mic-result retry';
        result.textContent = `You said: "${spoken}" — Try once more!`;
        if (micAttempts >= 3) {
          Aria.speak(Aria.lines.pronunciation3fail);
          document.getElementById('mic-next').style.display = 'block';
        } else {
          Aria.speak(Aria.lines.micRetry);
        }
      }
    } catch (err) {
      btn.classList.remove('listening');
      waves.style.display = 'none';
      btn.textContent = '🎤';
      result.style.display = 'block';
      result.className = 'mic-result retry';
      result.textContent = err === 'timeout' ? 'No speech detected — tap mic and speak' : 'Microphone error — tap Skip for now';
      document.getElementById('mic-next').style.display = 'block';
    }
  };

  function renderExercise(step, body) {
    body.innerHTML = `
      <div class="ss-card">
        <h3>${step.title}</h3>
        <p class="text-sm" style="margin:8px 0 12px">${step.task}</p>
        <div class="ss-steps">
          <div class="ss-step"><span>1.</span>Do the task on your laptop</div>
          <div class="ss-step"><span>2.</span>Press Win+Shift+S to take a screenshot</div>
          <div class="ss-step"><span>3.</span>Upload it below — I'll check your work!</div>
        </div>
        <label class="ss-upload" onclick="document.getElementById('ss-input').click()">
          <div class="up-icon">📷</div>
          <p>Tap to upload your screenshot</p>
          <input type="file" id="ss-input" accept="image/*" onchange="handleScreenshot(this, '${step.checkDescription.replace(/'/g, "\\'")}')">
        </label>
        <img class="ss-preview" id="ss-preview">
        <div class="loading" id="ss-loading" style="display:none"><div class="spinner"></div> Aria is checking your work...</div>
        <div class="ss-feedback" id="ss-feedback"></div>
      </div>
      <button class="btn btn-primary btn-block" id="ss-next" style="display:none" onclick="nextStep()">Continue →</button>
      <button class="btn btn-ghost btn-block mt-8" onclick="nextStep()">Skip exercise</button>
    `;
    Aria.speak("Now try this on your actual computer. When you're done, take a screenshot and upload it here. I'll check your work!");
  }

  window.handleScreenshot = async function(input, taskDesc) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target.result;
      const preview = document.getElementById('ss-preview');
      preview.src = dataUrl;
      preview.style.display = 'block';

      document.getElementById('ss-loading').style.display = 'flex';

      const result = await Speech.checkScreenshot(dataUrl, taskDesc);
      document.getElementById('ss-loading').style.display = 'none';

      const fb = document.getElementById('ss-feedback');
      fb.style.display = 'block';
      if (result.correct || result.feedback) {
        fb.className = 'ss-feedback good';
        fb.textContent = '✓ ' + (result.feedback || Aria.lines.screenshotGood);
        Storage.addXP(20);
        Aria.speak(result.feedback || Aria.lines.screenshotGood);
      } else {
        fb.className = 'ss-feedback bad';
        fb.textContent = '💡 ' + (result.feedback || 'Good try! Check the instructions and try again.');
        Aria.speak(result.feedback || 'Good try! Look at the steps again and give it another go.');
      }
      document.getElementById('ss-next').style.display = 'block';
    };
    reader.readAsDataURL(file);
  };

  function renderComplete(step, body) {
    const totalXP = Storage.addXP(step.xp);
    Storage.setLessonDone(activeModule.id, activeLessonIdx);

    const isFirst = Storage.getLessonsDone(activeModule.id).length === 1 && activeLessonIdx === 0;
    const allModDone = Storage.getLessonsDone(activeModule.id).length === activeModule.lessons.length;

    body.innerHTML = `
      <div class="complete-card">
        <div class="cc-icon">${allModDone ? '🏆' : '⭐'}</div>
        <h2>${allModDone ? 'Module Complete!' : 'Lesson Complete!'}</h2>
        <p>${step.ariaMsg}</p>
        <div class="xp-badge">+${step.xp} XP · Total: ${totalXP} XP</div>
      </div>
      <button class="btn btn-primary btn-block" onclick="goNextLesson()">
        ${getNextLessonLabel()}
      </button>
      <button class="btn btn-ghost btn-block mt-8" onclick="goHomeFromLesson()">Back to home</button>
    `;

    const msg = allModDone ? Aria.lines.moduleComplete(activeModule.name) : (isFirst ? Aria.lines.firstLesson : step.ariaMsg);
    setTimeout(() => Aria.speak(msg), 300);
  }

  function getNextLessonLabel() {
    const next = activeLessonIdx + 1;
    if (next < activeModule.lessons.length) return 'Next lesson →';
    return 'Back to modules 🏠';
  }

  window.goNextLesson = function() {
    const next = activeLessonIdx + 1;
    if (next < activeModule.lessons.length) openLesson(next);
    else goHomeFromLesson();
  };

  window.goHomeFromLesson = function() {
    goHome();
  };

  window.nextStep = nextStep;

  // Back button in lesson
  document.getElementById('lesson-back').addEventListener('click', () => {
    if (activeStepIdx > 0) { activeStepIdx--; renderStep(); }
    else goHomeFromLesson();
  });

  // ── Aria Chat Screen ──
  document.getElementById('nav-aria').addEventListener('click', openAriaChat);
  document.getElementById('aria-home-card').addEventListener('click', openAriaChat);

  function openAriaChat() {
    show('aria-chat');
    const hist = Storage.getChatHistory();
    const chatBody = document.getElementById('chat-body');
    chatBody.innerHTML = '';

    if (hist.length === 0) {
      addBubble('aria', "Hi! I'm Aria 👋 I'm here whenever you need me — ask me anything about lessons, office life in the Netherlands, or just have a chat. What's on your mind?");
      Aria.speak("Hi! I'm here. Ask me anything — about lessons, work, or just to talk. What's on your mind?");
    } else {
      hist.slice(-10).forEach(m => addBubble(m.role === 'user' ? 'user' : 'aria', m.text));
    }
    showSuggestions();
  }

  function addBubble(role, text) {
    const body = document.getElementById('chat-body');
    const div = document.createElement('div');
    div.className = 'chat-bubble ' + (role === 'aria' ? 'aria' : 'user');
    if (role === 'aria') div.innerHTML = `<div class="bubble-name">Aria</div>${text}`;
    else div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function addTyping() {
    const body = document.getElementById('chat-body');
    const div = document.createElement('div');
    div.className = 'chat-bubble aria typing';
    div.id = 'typing-indicator';
    div.innerHTML = '<div class="bubble-name">Aria</div><span class="dot"></span><span class="dot"></span><span class="dot"></span>';
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function removeTyping() {
    const t = document.getElementById('typing-indicator');
    if (t) t.remove();
  }

  async function sendToAria(msg) {
    if (!msg.trim()) return;
    addBubble('user', msg);
    document.getElementById('chat-input').value = '';
    addTyping();

    const progress = Storage.getProgress();
    const context = `User is Chhaya. Progress: ${JSON.stringify(progress)}. Be warm, encouraging, and helpful about Dutch workplace skills.`;

    const reply = await Aria.chat(msg, context);
    removeTyping();
    addBubble('aria', reply);
    Aria.speak(reply);
    showSuggestions();
  }

  document.getElementById('chat-send').addEventListener('click', () => {
    sendToAria(document.getElementById('chat-input').value);
  });

  document.getElementById('chat-input').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendToAria(e.target.value); }
  });

  // Voice input in chat
  let chatMicOn = false;
  document.getElementById('chat-mic').addEventListener('click', async () => {
    const btn = document.getElementById('chat-mic');
    if (chatMicOn) return;
    chatMicOn = true;
    btn.classList.add('on');
    btn.textContent = '⏹';
    try {
      const spoken = await Speech.listen('en-US', 10000);
      document.getElementById('chat-input').value = spoken;
      sendToAria(spoken);
    } catch { }
    chatMicOn = false;
    btn.classList.remove('on');
    btn.textContent = '🎤';
  });

  const suggestions = [
    'How do I save a Word document?',
    'What is poldermodel?',
    'How do I say Good morning in Dutch?',
    'What should I wear on my first day?',
    'How do I use Ctrl+Z?',
    'What is SharePoint?',
    'Tell me about Dutch interview culture',
    'How do I ask for help at work?',
    'What is OV-chipkaart?',
    'Give me a confidence boost!'
  ];

  function showSuggestions() {
    const el = document.getElementById('chat-suggestions');
    const picks = suggestions.sort(() => Math.random() - 0.5).slice(0, 4);
    el.innerHTML = picks.map(s => `<div class="chat-sugg" onclick="sendToAria('${s}')">${s}</div>`).join('');
  }

  // ── Bottom nav ──
  document.getElementById('nav-home').addEventListener('click', goHome);

  // ── Init ──
  const saved = Storage.getUser();
  if (saved) {
    Storage.getOnboarded() ? goHome() : goOnboard();
  } else {
    show('login');
  }

  // ── Service worker ──
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
});
