# Work Ready — Changelog

## v1.0.1 — 2026-06-29 — Desktop fixes + SW cache bust

### Fixes
- Desktop/laptop: lesson header and Aria header no longer stuck to top of browser chrome (added top padding in desktop media query)
- Service worker bumped to `work-ready-v5` — forces all users to receive fresh CSS/JS on next visit
- CSS cache buster bumped to `?v=10`

---

## v1.0.0 — 2026-06-29 — Phase 1 Launch

### New features
- Full Phase 1 content: 5 modules, 19 lessons total
  - **Windows Basics** (5 lessons): power/login/shutdown, mouse/keyboard/shortcuts, desktop/taskbar/search, files/folders/saving, troubleshooting
  - **Microsoft Word** (4 lessons): opening/saving, formatting, bullet points/tables, printing/PDF
  - **Office Culture** (4 lessons): first day, Dutch directness, meetings, departments/hierarchy
  - **Dutch at Work** (3 lessons): greetings, asking for help, small talk
  - **Job Search NL** (3 lessons): Dutch CV, where to find jobs, the Dutch interview
- Aria AI coach — voice + Claude Haiku chat, motivational lines, greets by time of day
- Voice mic practice — Web Speech Recognition, pronunciation scoring
- Screenshot exercises — Claude Vision checks user's work
- XP points + badges + daily streak tracking
- PIN login (SHA-256 hashed)
- Resume card — "Continue where you left off" on home screen
- Sign out button — clears session, keeps all progress
- Version number displayed on home screen
- Responsive layout — optimised for both mobile (Android/iOS) and desktop Chrome
- PWA installable — add to home screen on Android/iOS
- Service worker — offline caching of all app assets

### UI
- Dark indigo/blue gradient theme
- 2-column module grid on mobile, 3-column on desktop/laptop
- Centered header with name, XP pill, progress bar
- Compact module cards: icon + name + phase tag + progress bar
- Aria card with animated pulse indicator
- Bottom navigation: Home + Aria tabs
