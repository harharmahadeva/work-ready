# Work Ready — Changelog

## v2.1.0 — 2026-06-30 — Windows Basics expanded (10 lessons)

### New lessons added to Windows Basics module
- **Using a web browser** (lesson 6): Chrome vs Edge, tabs (Ctrl+T/W), downloads folder, bookmarks, zoom — covers daily browser use for Outlook Web, Teams, SharePoint, LinkedIn
- **Switching programs, split screen & screenshots** (lesson 7): Alt+Tab, Win+Tab, Win+Left/Right snap to split screen, Win+Shift+S snipping tool, PrtScn
- **Printing, Print to PDF & connecting a printer** (lesson 8): Ctrl+P, print settings (copies/colour/orientation), connecting to network printer, Microsoft Print to PDF workflow
- **Connecting to external screen or projector** (lesson 9): HDMI/USB-C cables, Win+P display modes (Duplicate/Extend/Second screen only), presentation tips, troubleshooting black screen
- **Command Prompt (CMD) basics** (lesson 10): opening CMD, ipconfig/ping for network diagnosis, dir/cd/cd../cls for navigation, hostname/tasklist/systeminfo, using Up arrow to repeat commands

### Version bumps
- lessons.js v21 → v22, APP_VERSION 2.0.0 → 2.1.0
- SW cache work-ready-v23 → work-ready-v24

---

## v2.0.0 — 2026-06-30 — Phase 2: Full Professional Curriculum

### New modules (6 modules, 17 lessons, ~90 minutes of content)
- **Microsoft Outlook** (4 lessons): inbox/folders/shortcuts, professional email writing, CC/BCC/attachments/etiquette, calendar and meeting invites
- **Microsoft Teams** (4 lessons): layout/channels, chat/status/professional habits, video calls/screen sharing, file sharing and collaboration
- **Microsoft Excel** (5 lessons): cells/rows/columns, data entry and formatting, SUM/AVERAGE/COUNT formulas, sorting/filtering/charts, practical work scenarios (expense report, team list)
- **Dutch Language - Deeper** (2 lessons): numbers/time/days/months (including the half-drie rule), writing Dutch business emails with English explanations throughout
- **Cover Letter** (1 lesson): sollicitatiebrief structure, 3-paragraph format, Dutch-specific rules, call to action
- **Work Rights NL** (1 lesson): contract types, holiday leave and vakantiegeld, sick leave procedure (phone call rule), bruto vs netto salary, BSN number

### Content improvements
- All Dutch language lessons now taught in English first for clarity
- Dutch email lesson includes full template Chhaya can use immediately
- Excel content specifically acknowledges her Finance Masters degree
- Work Rights lesson specifically addresses common mistakes made by newcomers to NL

---

## v1.0.4 — 2026-06-30 — Mood check-in + dynamic themes

### New
- Daily check-in card (4-5×/week, 70% chance if not checked in today): Aria asks how Chhaya is feeling
- Mic or text input for check-in response
- Groq AI reads the mood: energised / okay / stressed / sad / overwhelmed
- Aria speaks a personal, empathetic reply + lesson suggestion
- Entire app theme shifts dynamically based on mood:
  - **Energised** — default purple/blue (sharp, energetic)
  - **Okay** — teal/cyan (calm, focused)
  - **Stressed** — mint green (soothing)
  - **Sad** — warm amber/orange (cosy, comforting)
  - **Overwhelmed** — soft lavender (quiet, gentle)
- Mood theme persists across sessions via localStorage
- Check-in appears 3.5s after greeting so Aria's voice plays first

---

## v1.0.3 — 2026-06-29 — Weather + varied Aria messages

### New
- Live Arnhem weather on home screen (temp + condition via Open-Meteo, no API key needed)
- Aria spoken greeting now includes a weather-aware line (sunny/cloudy/rain/cold/warm buckets)
- All motivational lines (right answer, wrong answer, mic feedback, module complete, etc.) now pick randomly from multiple variants — no more repeating the same line

---

## v1.0.2 — 2026-06-29 — Nav + greeting fixes

### Fixes
- Bottom nav (Home / Aria) now visible during lessons so Chhaya can navigate without going back first
- Home screen greeting is now time-aware: Good morning / Good afternoon / Good evening / Good night

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
