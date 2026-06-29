const Storage = (() => {
  const KEY = 'wr_progress';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
  }
  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  return {
    getUser() { return load().user || null; },
    setUser(u) { const d = load(); d.user = u; save(d); },
    clearUser() { const d = load(); delete d.user; save(d); },

    getProgress() { return load().progress || {}; },
    setLessonDone(moduleId, lessonIdx) {
      const d = load();
      if (!d.progress) d.progress = {};
      if (!d.progress[moduleId]) d.progress[moduleId] = [];
      if (!d.progress[moduleId].includes(lessonIdx)) d.progress[moduleId].push(lessonIdx);
      save(d);
    },
    getLessonsDone(moduleId) { return (load().progress || {})[moduleId] || []; },
    getModulePercent(moduleId, total) {
      const done = this.getLessonsDone(moduleId).length;
      return total ? Math.round((done / total) * 100) : 0;
    },
    getTotalPercent(modules) {
      let done = 0, total = 0;
      modules.forEach(m => { total += m.lessons.length; done += this.getLessonsDone(m.id).length; });
      return total ? Math.round((done / total) * 100) : 0;
    },

    getXP() { return load().xp || 0; },
    addXP(n) { const d = load(); d.xp = (d.xp || 0) + n; save(d); return d.xp; },

    getBadges() { return load().badges || []; },
    addBadge(id) { const d = load(); if (!d.badges) d.badges = []; if (!d.badges.includes(id)) { d.badges.push(id); save(d); return true; } return false; },

    getOnboarded() { return load().onboarded || false; },
    setOnboarded() { const d = load(); d.onboarded = true; save(d); },

    getChatHistory() { return load().chat || []; },
    addChatMsg(role, text) {
      const d = load();
      if (!d.chat) d.chat = [];
      d.chat.push({ role, text, ts: Date.now() });
      if (d.chat.length > 40) d.chat = d.chat.slice(-40);
      save(d);
    },

    getLastLesson() { return load().lastLesson || null; },
    setLastLesson(moduleId, lessonIdx, lessonTitle, moduleName) {
      const d = load(); d.lastLesson = { moduleId, lessonIdx, lessonTitle, moduleName }; save(d);
    },

    getMood() { return load().mood || { lastCheck: null, current: 'energised' }; },
    setMood(mood) { const d = load(); d.mood = { lastCheck: new Date().toDateString(), current: mood }; save(d); },

    getStreak() { return load().streak || { count: 0, last: null }; },
    updateStreak() {
      const d = load();
      const today = new Date().toDateString();
      if (!d.streak) d.streak = { count: 0, last: null };
      if (d.streak.last === today) return d.streak.count;
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      d.streak.count = d.streak.last === yesterday ? d.streak.count + 1 : 1;
      d.streak.last = today;
      save(d);
      return d.streak.count;
    }
  };
})();
