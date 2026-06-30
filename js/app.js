// Work Ready - Main App
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
        if (user.role === 'reviewer') Aria.disable();
        else Aria.enable();
        initFeedback(user);
        if (Storage.getOnboarded()) {
          goHome();
        } else {
          Storage.setOnboarded(); // mark now so re-login never shows it again
          goOnboard();
        }
      } else {
        pinError.textContent = 'Incorrect PIN - try again';
        pinEntry = '';
        updatePinDots();
        setTimeout(() => { pinError.textContent = ''; }, 2000);
      }
    }).catch(() => {
      pinError.textContent = 'Could not connect - check your internet and try again';
      pinEntry = '';
      updatePinDots();
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
  function getOnboardSlides(name) { return [
    {
      emoji: '👋',
      title: `Welcome, ${name}!`,
      text: "I'm Aria, your personal work coach. I'll be with you every step of the way - teaching, encouraging, and cheering you on.",
    },
    {
      emoji: '🎯',
      title: 'What we\'ll cover',
      text: 'Computer skills, Microsoft Office, Dutch workplace culture, public transport, job search - everything you need to walk into any Dutch office with confidence.',
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
  ]; }
  let obIdx = 0;
  let onboardSlides = [];

  function renderOnboard() {
    const s = onboardSlides[obIdx];
    document.getElementById('ob-emoji').textContent = s.emoji;
    document.getElementById('ob-title').textContent = s.title;
    document.getElementById('ob-text').textContent = s.text;
    document.querySelectorAll('.onboard-dot').forEach((d, i) => d.classList.toggle('on', i === obIdx));
    document.getElementById('ob-next').textContent = obIdx < onboardSlides.length - 1 ? 'Next' : "Let's start! 🚀";
  }

  document.getElementById('ob-skip').addEventListener('click', () => {
    Storage.setOnboarded();
    Aria.stop();
    goHome();
  });

  document.getElementById('ob-next').addEventListener('click', () => {
    if (obIdx < onboardSlides.length - 1) {
      obIdx++;
      renderOnboard();
      const slide = onboardSlides[obIdx];
      Aria.speak(slide.text);
    } else {
      Storage.setOnboarded();
      goHome();
    }
  });

  // ── Navigation ──
  let currentScreen = 'login';
  let hasGreeted = false;

  function show(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.toggle('hidden', s.id !== 'screen-' + id));
    currentScreen = id;
    const showNav = ['home', 'aria-chat', 'lesson'].includes(id);
    document.getElementById('bottom-nav').style.display = showNav ? 'flex' : 'none';
    // Hide speaking indicator on login/onboard so it never covers buttons
    const indicator = document.getElementById('aria-speaking');
    if (indicator) indicator.classList.toggle('force-hide', ['login', 'onboard'].includes(id));
  }

  // ── Mood theme ──
  const MOOD_EMOJIS = { energised: '⚡', okay: '😊', stressed: '😤', sad: '💙', overwhelmed: '🌊' };
  const MOOD_LABELS = { energised: 'Energised', okay: 'Feeling good', stressed: 'A bit stressed', sad: 'Feeling low', overwhelmed: 'Overwhelmed' };

  // ── Late night / early morning check ──
  function getLateNightMessages(name, city) { return [
    { emoji: '🌙', title: `It's quite late, ${name}!`, text: `It's past 11pm and your brain needs rest to remember what you learn. Sleep is actually part of learning - your mind processes everything while you sleep. Can I ask you to rest tonight and come back tomorrow? I'll be here.` },
    { emoji: '🌛', title: `Still up, ${name}?`, text: `It's late in ${city}! I love that you're dedicated - truly. But a tired brain learns slower and forgets faster. Your future employer needs the best version of you, and that version needs sleep. Rest up, okay?` },
    { emoji: '💤', title: "Your brain needs rest!", text: "Learning late at night can feel productive but the memory doesn't stick as well. I care about your progress AND your wellbeing. Please consider getting some sleep - we can pick this up fresh tomorrow morning!" },
  ]; }
  function getEarlyMorningMessages(name) { return [
    { emoji: '🌅', title: `You're up early, ${name}!`, text: `It's very early - are you okay? Whether you couldn't sleep or you're just super motivated, I'm proud of you. Just make sure you're getting enough rest overall. Your health comes first. Want to do a short lesson or just chat?` },
    { emoji: '🌄', title: "Early bird!", text: "Good morning! You're up before the sun - that's dedication! Just checking - are you getting enough sleep? Rest is essential for learning and for showing up well at job interviews. Take care of yourself first." },
  ]; }

  function checkLateNight() {
    const h = new Date().getHours();
    const isLate = h >= 23;
    const isEarly = h >= 0 && h < 5;
    if (!isLate && !isEarly) return;

    const u = Storage.getUser();
    const name = u?.name || 'there';
    const city = u?.city || 'your city';
    const pool = isLate ? getLateNightMessages(name, city) : getEarlyMorningMessages(name);
    const msg = pool[Math.floor(Math.random() * pool.length)];

    document.getElementById('latenight-emoji').textContent = msg.emoji;
    document.getElementById('latenight-title').textContent = msg.title;
    document.getElementById('latenight-text').textContent = msg.text;
    document.getElementById('latenight-modal').classList.remove('hidden');

    setTimeout(() => Aria.speak(msg.text), 300);

    document.getElementById('latenight-continue').onclick = () => {
      document.getElementById('latenight-modal').classList.add('hidden');
      Aria.stop();
    };
    document.getElementById('latenight-close').onclick = () => {
      document.getElementById('latenight-modal').classList.add('hidden');
      Aria.stop();
      // Don't navigate away — let her choose
    };
  }

  function applyMoodTheme(mood) {
    document.documentElement.setAttribute('data-mood', mood === 'energised' ? '' : mood);
    Storage.setMood(mood);
  }

  function shouldCheckIn() {
    const { lastCheck } = Storage.getMood();
    const today = new Date().toDateString();
    if (lastCheck === today) return false;
    // 70% chance if last check was >20hrs ago
    return Math.random() < 0.70;
  }

  function renderCheckIn() {
    const el = document.getElementById('checkin-card');
    if (!el) return;
    el.style.display = 'block';
    el.innerHTML = `
      <div class="checkin-card">
        <div class="checkin-top">
          <div class="checkin-avatar">🎙️</div>
          <div class="checkin-question">
            <strong>Hey ${Storage.getUser()?.name || 'there'}, how are you feeling today?</strong>
            Tell me anything - good day, tough day, nervous, excited. I'm here.
          </div>
        </div>
        <div class="checkin-input-row">
          <textarea class="checkin-text" id="checkin-text" placeholder="Type how you're feeling... or tap the mic" rows="2"></textarea>
          <button class="checkin-mic" id="checkin-mic">🎤</button>
        </div>
        <div style="display:flex;gap:8px;align-items:center;justify-content:space-between">
          <button class="checkin-send" id="checkin-send">Share with Aria</button>
          <button class="checkin-dismiss" id="checkin-dismiss">Skip for now</button>
        </div>
      </div>`;

    document.getElementById('checkin-dismiss').onclick = () => {
      el.style.display = 'none';
      Storage.setMood(Storage.getMood().current); // mark today checked so no repeat
    };

    document.getElementById('checkin-send').onclick = () => submitCheckIn();

    document.getElementById('checkin-text').addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitCheckIn(); }
    });

    // Mic for check-in
    const micBtn = document.getElementById('checkin-mic');
    let micActive = false;
    micBtn.onclick = () => {
      if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        alert('Speech not supported on this browser'); return;
      }
      if (micActive) return;
      micActive = true;
      micBtn.classList.add('listening');
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      const rec = new SR();
      rec.lang = 'en-GB';
      rec.interimResults = false;
      rec.onresult = e => {
        document.getElementById('checkin-text').value = e.results[0][0].transcript;
        micBtn.classList.remove('listening');
        micActive = false;
        submitCheckIn();
      };
      rec.onerror = () => { micBtn.classList.remove('listening'); micActive = false; };
      rec.onend = () => { micBtn.classList.remove('listening'); micActive = false; };
      rec.start();
    };
  }

  async function submitCheckIn() {
    const text = document.getElementById('checkin-text')?.value?.trim();
    if (!text) return;
    const el = document.getElementById('checkin-card');
    el.innerHTML = `<div class="checkin-card"><div class="loading"><div class="spinner"></div> Aria is listening...</div></div>`;

    try {
      const res = await fetch('/api/mood', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });
      const data = await res.json();
      const { mood, reply, suggestion, suggestionText } = data;

      applyMoodTheme(mood);

      el.innerHTML = `
        <div class="checkin-card">
          <div class="checkin-top">
            <div class="checkin-avatar">🎙️</div>
            <div style="flex:1">
              <div class="mood-badge">${MOOD_EMOJIS[mood] || '💫'} ${MOOD_LABELS[mood] || mood}</div>
              <div class="checkin-reply" style="margin-top:8px">${reply}</div>
              <div class="checkin-suggestion" style="margin-top:8px">→ ${suggestionText}</div>
            </div>
          </div>
          <button class="checkin-dismiss" id="checkin-close" style="text-align:right">Got it, let's go ›</button>
        </div>`;

      document.getElementById('checkin-close').onclick = () => { el.style.display = 'none'; };
      setTimeout(() => Aria.speak(reply), 300);

    } catch {
      el.style.display = 'none';
    }
  }

  function goHome() {
    const u = Storage.getUser();
    if (u?.role === 'admin') { renderAdminDashboard(); return; }
    show('home');
    renderHome();
    // Restore saved mood theme
    const { current } = Storage.getMood();
    if (current) applyMoodTheme(current);

    const streak = Storage.updateStreak();
    if (u && !hasGreeted) {
      hasGreeted = true;
      Aria.greet(u.name, u).then(() => {
        if (streak > 1) {
          setTimeout(() => Aria.speak(Aria.lines.streakDay(streak)), 500);
        }
      });
    }

    // Laptop nudge for mobile users
    renderLaptopNudge();

    // Late night / early morning check (shows after greeting)
    setTimeout(() => checkLateNight(), 2000);

    // Check-in (after a short delay so greeting plays first, skip if late-night modal showing)
    if (shouldCheckIn()) setTimeout(() => {
      const h = new Date().getHours();
      if (h >= 23 || (h >= 0 && h < 5)) return; // late night modal takes priority
      renderCheckIn();
    }, 3500);
  }

  // ── Laptop nudge ──
  const LAPTOP_MODULES = ['windows', 'word', 'outlook', 'teams', 'excel'];
  const APP_URL = 'work-ready.vercel.app';

  function isMobile() {
    return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || window.innerWidth < 768;
  }

  // Speak a line then call a callback when it finishes
  function speakThen(text, onEnd) {
    Aria.speak(text, { onEnd });
  }

  function shouldShowNudge() {
    if (!isMobile()) return false;
    const last = localStorage.getItem('nudge-dismissed');
    if (!last) return true;
    // Show again after 24 hours
    return Date.now() - parseInt(last) > 86400000;
  }

  function renderLaptopNudge() {
    const el = document.getElementById('laptop-nudge');
    if (!el || !shouldShowNudge()) return;
    el.classList.remove('hidden');

    document.getElementById('ln-close').onclick = () => {
      el.classList.add('hidden');
      localStorage.setItem('nudge-dismissed', Date.now());
    };

    const copyBtn = document.getElementById('ln-copy');
    copyBtn.onclick = () => {
      navigator.clipboard.writeText('https://' + APP_URL).then(() => {
        copyBtn.textContent = '✓ Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.textContent = '📋 Copy link';
          copyBtn.classList.remove('copied');
        }, 2500);
      }).catch(() => {
        // Fallback for older browsers
        copyBtn.textContent = 'https://' + APP_URL;
      });
    };
  }

  function getLaptopBannerHtml(moduleName) {
    if (!isMobile()) return '';
    return `
      <div class="laptop-banner">
        <div class="lb-icon">💻</div>
        <div class="lb-text">
          <strong>${moduleName}</strong> needs a laptop. Open Chrome on your laptop and go to:
          <span class="lb-url">${APP_URL}</span>
        </div>
      </div>`;
  }

  function goOnboard() {
    const u = Storage.getUser();
    onboardSlides = getOnboardSlides(u?.name || 'there');
    obIdx = 0;
    show('onboard');
    renderOnboard();
    setTimeout(() => Aria.speak(onboardSlides[0].text), 500);
  }

  // ── Logout ──
  window.logout = function() {
    Aria.stop();
    Aria.enable();
    hasGreeted = false;
    Storage.clearUser();
    show('login');
    pinEntry = '';
    updatePinDots();
    document.getElementById('fb-trigger').classList.add('hidden');
  };

  // ── Reviewer Feedback ──
  let fbRating = 0;
  let fbType = 'content';

  function initFeedback(user) {
    if (user.role !== 'reviewer') return;
    document.getElementById('fb-trigger').classList.remove('hidden');

    document.getElementById('fb-trigger').onclick = () => {
      const tag = document.getElementById('fb-screen-tag');
      tag.textContent = 'Screen: ' + (currentScreen || 'home');
      document.getElementById('fb-modal').classList.remove('hidden');
      document.getElementById('fb-status').textContent = '';
      document.getElementById('fb-text').value = '';
      fbRating = 0;
      updateStars(0);
    };

    document.getElementById('fb-close').onclick = () =>
      document.getElementById('fb-modal').classList.add('hidden');

    document.querySelectorAll('.fb-type-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.fb-type-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        fbType = btn.dataset.type;
      };
    });

    document.querySelectorAll('.fb-star').forEach(star => {
      star.onclick = () => { fbRating = parseInt(star.dataset.val); updateStars(fbRating); };
      star.onmouseover = () => updateStars(parseInt(star.dataset.val));
      star.onmouseout = () => updateStars(fbRating);
    });

    document.getElementById('fb-submit').onclick = submitFeedback;
  }

  function updateStars(n) {
    document.querySelectorAll('.fb-star').forEach((s, i) =>
      s.classList.toggle('on', i < n));
  }

  async function submitFeedback() {
    const comment = document.getElementById('fb-text').value.trim();
    const status = document.getElementById('fb-status');
    if (!comment) { status.textContent = 'Please write something first.'; status.className = 'fb-status err'; return; }

    const btn = document.getElementById('fb-submit');
    btn.textContent = 'Sending...'; btn.disabled = true;
    status.textContent = ''; status.className = 'fb-status';

    const u = Storage.getUser();
    const lessonEl = document.getElementById('lesson-title');

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reviewer: u?.name || 'Dinesh',
          type: fbType,
          screen: currentScreen,
          rating: fbRating,
          comment,
          lesson: lessonEl?.textContent || '',
          timestamp: new Date().toLocaleString('en-NL', { timeZone: 'Europe/Amsterdam' })
        })
      });
      if (res.ok) {
        status.textContent = 'Feedback sent! Thank you.'; status.className = 'fb-status ok';
        document.getElementById('fb-text').value = '';
        setTimeout(() => document.getElementById('fb-modal').classList.add('hidden'), 1800);
      } else {
        throw new Error();
      }
    } catch {
      status.textContent = 'Failed to send. Please try again.'; status.className = 'fb-status err';
    }
    btn.textContent = 'Send Feedback'; btn.disabled = false;
  }

  // ── Admin Dashboard ──
  async function renderAdminDashboard() {
    show('home');
    const u = Storage.getUser();
    document.getElementById('home-greeting').textContent = 'Admin';
    document.getElementById('home-name').textContent = u.name;
    document.getElementById('home-xp').textContent = 'Reviewer Dashboard';
    document.getElementById('home-prog-pct').textContent = '';
    document.getElementById('home-prog-fill').style.width = '0%';
    document.getElementById('home-weather').textContent = '';
    document.getElementById('home-version').textContent = '';
    document.getElementById('checkin-card').style.display = 'none';
    document.getElementById('resume-card').style.display = 'none';
    document.getElementById('aria-home-card').style.display = 'none';
    document.getElementById('laptop-nudge').classList.add('hidden');

    const grid = document.getElementById('module-grid');
    const title = document.querySelector('.section-title');
    title.textContent = 'Feedback from Reviewers';
    grid.innerHTML = '<div class="fb-loading">Loading feedback...</div>';

    try {
      const res = await fetch('/data/feedback.json?t=' + Date.now());
      const items = await res.json();

      if (!items.length) {
        grid.innerHTML = '<div class="fb-empty">No feedback yet. Share the app with Dinesh to get started.</div>';
        return;
      }

      const typeIcon = { content: '📚', ui: '🎨', bug: '🐛', general: '💬' };
      grid.innerHTML = [...items].reverse().map(f => `
        <div class="fb-item" style="grid-column:1/-1">
          <div class="fb-item-top">
            <span class="fb-item-type">${typeIcon[f.type] || '💬'} ${f.type}</span>
            <span class="fb-item-stars">${'★'.repeat(f.rating || 0)}${'☆'.repeat(5 - (f.rating || 0))}</span>
            <span class="fb-item-who">${f.reviewer} · ${f.screen || ''}</span>
          </div>
          ${f.lesson ? `<div class="fb-item-lesson">Lesson: ${f.lesson}</div>` : ''}
          <div class="fb-item-comment">${f.comment}</div>
          <div class="fb-item-time">${f.timestamp}</div>
        </div>
      `).join('');
    } catch {
      grid.innerHTML = '<div class="fb-empty">Could not load feedback.</div>';
    }

    // Refresh button
    const refreshBtn = document.createElement('button');
    refreshBtn.className = 'btn btn-ghost btn-block';
    refreshBtn.style.marginTop = '8px';
    refreshBtn.textContent = '↻ Refresh';
    refreshBtn.onclick = renderAdminDashboard;
    grid.after(refreshBtn);

    Aria.speak(`Welcome back, ${u.name}. Here is the latest reviewer feedback.`);
  }

  // ── Home screen ──
  function renderHome() {
    const u = Storage.getUser();
    if (!u) return;
    document.getElementById('home-name').textContent = u.name;
    document.getElementById('home-version').textContent = 'v' + APP_VERSION;

    const hr = new Date().getHours();
    const greet = hr < 12 ? 'Good morning' : hr < 17 ? 'Good afternoon' : hr < 21 ? 'Good evening' : 'Good night';
    document.getElementById('home-greeting').textContent = greet;

    // Weather (async, updates when ready)
    const weatherEl = document.getElementById('home-weather');
    if (weatherEl) {
      weatherEl.textContent = '';
      Aria.fetchWeather(u?.lat, u?.lon, u?.timezone).then(w => {
        if (w) weatherEl.textContent = `${w.emoji} ${w.temp}°C · ${w.label} in ${u?.city || 'your city'}`;
      });
    }

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

    // Inject laptop banner for mobile users on laptop-required modules
    const bannerEl = document.getElementById('lesson-laptop-banner');
    if (bannerEl) {
      if (isMobile() && LAPTOP_MODULES.includes(activeModule.id)) {
        bannerEl.innerHTML = getLaptopBannerHtml(activeModule.name);
        bannerEl.style.display = 'block';
      } else {
        bannerEl.style.display = 'none';
      }
    }

    renderStep();

    // Aria intro — if mobile + laptop module, add laptop reminder after intro
    const introLine = Aria.lines.encourageStart(lesson.title);
    if (isMobile() && LAPTOP_MODULES.includes(activeModule.id)) {
      // Speak intro first, then laptop nudge after it finishes
      setTimeout(() => {
        speakThen(introLine, () => {
          setTimeout(() => Aria.speak(Aria.lines.laptopModule(activeModule.name)), 600);
        });
      }, 500);
    } else {
      setTimeout(() => Aria.speak(introLine), 500);
    }
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
    const u = Storage.getUser();
    const userName = u?.name || 'your name';
    let listHtml = '';
    if (step.list) listHtml = `<ul>${step.list.map(l => `<li>${l.replace(/\{name\}/g, userName)}</li>`).join('')}</ul>`;

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
      <button class="btn btn-primary btn-block" onclick="nextStep()">Continue</button>
    `;
  }

  function renderAriaMsg(step, body) {
    const u = Storage.getUser();
    const text = step.text.replace(/\{name\}/g, u?.name || 'you');
    body.innerHTML = `
      <div class="aria-msg">
        <div class="aria-msg-avatar">🎙️</div>
        <div class="aria-msg-body">
          <p>"${text}"</p>
          <div class="play-btn" onclick="Aria.speak('${text.replace(/'/g, "\\'")}')">🔊 Play again</div>
        </div>
      </div>
      <button class="btn btn-primary btn-block" onclick="nextStep()">Got it</button>
    `;
    Aria.speak(text);
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
      <button class="btn btn-primary btn-block" id="quiz-next" style="display:none" onclick="nextStep()">Continue</button>
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
      Aria.speak(Aria.pick(Aria.lines.rightAnswer));
    } else {
      fb.className = 'quiz-feedback bad';
      fb.textContent = '💡 ' + step.feedback;
      Aria.speak(Aria.pick(Aria.lines.wrongAnswer));
    }
    document.getElementById('quiz-next').style.display = 'block';
  };

  function renderMic(step, body) {
    const u = Storage.getUser();
    const userName = u?.name || 'your name';
    const phrase = step.phrase.replace(/\{name\}/g, userName);
    const phraseNl = (step.phraseNl || '').replace(/\{name\}/g, userName);
    body.innerHTML = `
      <div class="mic-card">
        <h3>🎤 Speaking Practice</h3>
        <p class="text-sm" style="margin-bottom:8px">${step.instruction}</p>
        <div class="target-phrase">
          ${phrase}
          ${phraseNl ? `<div class="phrase-nl">🇳🇱 ${phraseNl}</div>` : ''}
        </div>
        <div style="text-align:center">
          <div class="text-sm mt-8">Aria says it first - then tap the mic and say it yourself</div>
          <button class="mic-btn" id="mic-btn" onclick="startMic('${phrase.replace(/'/g, "\\'")}','${step.lang || 'en-US'}')">🎤</button>
          <div class="mic-waves" id="mic-waves" style="display:none">
            ${[...Array(7)].map((_, i) => `<div class="mic-wave-bar" style="height:${4 + Math.random() * 14}px;animation-delay:${i * 0.08}s"></div>`).join('')}
          </div>
          <div class="mic-result" id="mic-result" style="display:none"></div>
        </div>
      </div>
      <button class="btn btn-primary btn-block" id="mic-next" style="display:none" onclick="nextStep()">Continue</button>
      <button class="btn btn-ghost btn-block mt-8" onclick="nextStep()">Skip for now</button>
    `;
    // Aria models the phrase first
    const lang = step.lang || 'en-US';
    if (lang.startsWith('nl')) {
      Aria.speakDutch(phrase);
    } else {
      Aria.speak(phrase);
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
        result.textContent = `✓ "${spoken}" - Score: ${score}% - Well done!`;
        Storage.addXP(15);
        Aria.speak(Aria.pick(Aria.lines.micGood));
        document.getElementById('mic-next').style.display = 'block';
        micAttempts = 0;
      } else {
        micAttempts++;
        result.className = 'mic-result retry';
        result.textContent = `You said: "${spoken}" - Try once more!`;
        if (micAttempts >= 3) {
          Aria.speak(Aria.pick(Aria.lines.pronunciation3fail));
          document.getElementById('mic-next').style.display = 'block';
        } else {
          Aria.speak(Aria.pick(Aria.lines.micRetry));
        }
      }
    } catch (err) {
      btn.classList.remove('listening');
      waves.style.display = 'none';
      btn.textContent = '🎤';
      result.style.display = 'block';
      result.className = 'mic-result retry';
      result.textContent = err === 'timeout' ? 'No speech detected - tap mic and speak' : 'Microphone error - tap Skip for now';
      document.getElementById('mic-next').style.display = 'block';
    }
  };

  function renderExercise(step, body) {
    // Aria speaks a laptop reminder for exercise steps on mobile
    const exerciseAriaLine = isMobile() && LAPTOP_MODULES.includes(activeModule.id)
      ? Aria.pick(Aria.lines.laptopExercise)
      : "Now try this on your actual computer. When you're done, take a screenshot and upload it here. I'll check your work!";
    setTimeout(() => Aria.speak(exerciseAriaLine), 400);

    body.innerHTML = `
      <div class="ss-card">
        <h3>${step.title}</h3>
        <p class="text-sm" style="margin:8px 0 12px">${step.task}</p>
        <div class="ss-steps">
          <div class="ss-step"><span>1.</span>Do the task on your laptop</div>
          <div class="ss-step"><span>2.</span>Press Win+Shift+S to take a screenshot</div>
          <div class="ss-step"><span>3.</span>Upload it below - I'll check your work!</div>
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
      <button class="btn btn-primary btn-block" id="ss-next" style="display:none" onclick="nextStep()">Continue</button>
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
        const ssGood = Aria.pick(Aria.lines.screenshotGood);
        fb.textContent = '✓ ' + (result.feedback || ssGood);
        Storage.addXP(20);
        Aria.speak(result.feedback || ssGood);
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

    const msg = allModDone ? Aria.lines.moduleComplete(activeModule.name) : (isFirst ? Aria.pick(Aria.lines.firstLesson) : step.ariaMsg);
    setTimeout(() => Aria.speak(msg), 300);
  }

  function getNextLessonLabel() {
    const next = activeLessonIdx + 1;
    if (next < activeModule.lessons.length) return 'Next lesson';
    return 'Back to home';
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
      addBubble('aria', "Hi! I'm Aria 👋 I'm here whenever you need me - ask me anything about lessons, office life in the Netherlands, or just have a chat. What's on your mind?");
      Aria.speak("Hi! I'm here. Ask me anything - about lessons, work, or just to talk. What's on your mind?");
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
    const cu = Storage.getUser();
    const context = `User is ${cu?.name || 'the learner'}, located in ${cu?.city || 'the Netherlands'}. Progress: ${JSON.stringify(progress)}. Be warm, encouraging, and helpful about Dutch workplace skills.`;

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

  // ── Service worker — auto-update ──
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(reg => {
      // If a new SW is already waiting (downloaded in background), activate it now
      if (reg.waiting) {
        reg.waiting.postMessage({ type: 'SKIP_WAITING' });
      }

      // When a new SW finishes installing and is waiting, activate it immediately
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (!newWorker) return;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            newWorker.postMessage({ type: 'SKIP_WAITING' });
          }
        });
      });
    }).catch(() => {});

    // When SW changes (new one activated), reload silently to get fresh files
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  }
});
