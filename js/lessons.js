// All module + lesson content
const APP_VERSION = '1.0.0';

const MODULES = [
  // ═══════════════════════════════════════════
  //  1. WINDOWS BASICS
  // ═══════════════════════════════════════════
  {
    id: 'windows',
    icon: '💻',
    name: 'Windows Basics',
    phase: 'Foundation',
    color: '#4f6ef7',
    lessons: [
      {
        title: 'Turning on, logging in & shutting down',
        time: '4 min',
        steps: [
          {
            type: 'learn', icon: '🖥️',
            title: 'The Power Button',
            body: 'Every computer has a power button. On a laptop it is usually at the top-right of the keyboard. Press it once — do NOT hold it.',
            dutch: [{ nl: 'Aan/uit-knop', en: 'Power button' }, { nl: 'Opstarten', en: 'Start up' }]
          },
          {
            type: 'aria',
            text: "Before we start, I want to say something important. You might feel like everyone else knows this already. They don't. Everyone learned this for the first time at some point. Today is your turn — and you are going to do brilliantly."
          },
          {
            type: 'learn', icon: '🔐',
            title: 'Logging In',
            body: 'When Windows starts, it shows a login screen. Click your name, then type your password. Press Enter.',
            list: ['Type carefully — passwords are case-sensitive (A ≠ a)', 'Click the eye icon 👁 to see what you typed', 'Press Win+L to lock the screen when you step away'],
            dutch: [{ nl: 'Inloggen', en: 'Log in' }, { nl: 'Wachtwoord', en: 'Password' }, { nl: 'Scherm vergrendelen', en: 'Lock screen' }]
          },
          {
            type: 'learn', icon: '⚡',
            title: 'Sleep vs Shut Down',
            body: 'There is a difference — and it matters at work!',
            list: ['Sleep (Slaapstand) — quick pause, uses a little power', 'Shut down (Afsluiten) — fully off, saves power', 'Restart (Opnieuw opstarten) — fixes many problems', 'NEVER just pull the plug — you can lose your work'],
            dutch: [{ nl: 'Slaapstand', en: 'Sleep' }, { nl: 'Afsluiten', en: 'Shut down' }, { nl: 'Opnieuw opstarten', en: 'Restart' }]
          },
          {
            type: 'quiz',
            question: 'Your laptop is running slow. What should you try first?',
            options: ['Pull out the power cable', 'Restart the computer', 'Buy a new laptop', 'Call IT immediately'],
            correct: 1,
            feedback: 'Correct! Opnieuw opstarten (Restart) fixes most common problems. It clears the memory and starts fresh.'
          },
          {
            type: 'quiz',
            question: 'You are going for lunch. What should you do?',
            options: ['Leave it open and logged in', 'Shut it down completely', 'Press Win+L to lock the screen', 'Close the lid'],
            correct: 2,
            feedback: 'Win+L locks the screen instantly. Your work stays open but no one can access it. This is the professional thing to do.'
          },
          {
            type: 'speak',
            instruction: 'Say this out loud — Aria will say it first, then you repeat:',
            phrase: 'I need to restart the computer',
            phraseNl: 'Ik moet de computer opnieuw opstarten',
            lang: 'en-US'
          },
          {
            type: 'complete', xp: 20,
            ariaMsg: "You just finished your first lesson! You now know how to start, log in, lock and shut down a Windows computer. That's a real skill — and you've already got it. Next up: mouse and keyboard!"
          }
        ]
      },
      {
        title: 'Mouse, keyboard & essential shortcuts',
        time: '5 min',
        steps: [
          {
            type: 'learn', icon: '🖱️',
            title: 'The Mouse — 3 things to know',
            body: 'A mouse has left click, right click, and a scroll wheel. Each does something different.',
            list: ['Left click — select something or open it', 'Right click — opens a menu with options', 'Scroll wheel — scroll up and down a page'],
            dutch: [{ nl: 'Klikken', en: 'Click' }, { nl: 'Rechtermuisknop', en: 'Right-click' }, { nl: 'Scrollen', en: 'Scroll' }]
          },
          {
            type: 'learn', icon: '⌨️',
            title: '5 Shortcuts that save you every day',
            body: 'These 5 shortcuts work in almost every program. Learn them and your colleagues will be impressed.',
            list: ['Ctrl+C — Copy (Kopiëren)', 'Ctrl+V — Paste (Plakken)', 'Ctrl+Z — Undo (Ongedaan maken) ← your best friend!', 'Ctrl+S — Save (Opslaan)', 'Ctrl+A — Select All (Alles selecteren)'],
            dutch: [{ nl: 'Kopiëren', en: 'Copy (Ctrl+C)' }, { nl: 'Plakken', en: 'Paste (Ctrl+V)' }, { nl: 'Ongedaan maken', en: 'Undo (Ctrl+Z)' }, { nl: 'Opslaan', en: 'Save (Ctrl+S)' }]
          },
          {
            type: 'aria',
            text: "Ctrl+Z is the most important shortcut in the world. Made a mistake? Ctrl+Z. Deleted something by accident? Ctrl+Z. It undoes the last thing you did. Press it as many times as you need. Use it fearlessly!"
          },
          {
            type: 'quiz',
            question: 'You accidentally deleted a paragraph. What do you press?',
            options: ['Ctrl+C', 'Ctrl+S', 'Ctrl+Z', 'Ctrl+V'],
            correct: 2,
            feedback: 'Ctrl+Z — Ongedaan maken — undoes your last action. Press it multiple times to go back further.'
          },
          {
            type: 'quiz',
            question: 'You want to copy text and paste it somewhere else. What are the two shortcuts?',
            options: ['Ctrl+X then Ctrl+V', 'Ctrl+C then Ctrl+V', 'Ctrl+A then Ctrl+S', 'Ctrl+Z then Ctrl+Y'],
            correct: 1,
            feedback: 'Ctrl+C to copy, then Ctrl+V to paste. If you want to move text, use Ctrl+X to cut, then Ctrl+V.'
          },
          {
            type: 'speak',
            instruction: 'Practice saying this — you might need to say it at work:',
            phrase: 'Can you show me how to do that on the keyboard?',
            phraseNl: 'Kunt u mij laten zien hoe ik dat op het toetsenbord doe?',
            lang: 'en-US'
          },
          {
            type: 'complete', xp: 20,
            ariaMsg: "Mouse and keyboard — done! You now know the 5 shortcuts that professional office workers use every single day. You are already ahead of many people who have been working for years and never learned these."
          }
        ]
      },
      {
        title: 'Desktop, taskbar & finding things fast',
        time: '4 min',
        steps: [
          {
            type: 'learn', icon: '🖥️',
            title: 'The Windows Desktop',
            body: 'The desktop is the main screen you see after logging in. It has icons you can double-click to open programs.',
            list: ['Icons on desktop = shortcuts, not the actual files', 'Desktop should be tidy — do NOT save everything here', 'Right-click empty space → New → to create something'],
            dutch: [{ nl: 'Bureaublad', en: 'Desktop' }, { nl: 'Pictogram', en: 'Icon' }, { nl: 'Snelkoppeling', en: 'Shortcut' }]
          },
          {
            type: 'learn', icon: '📌',
            title: 'The Taskbar — your control centre',
            body: 'The bar at the bottom of the screen. It shows open programs and pinned shortcuts.',
            list: ['Click a program on the taskbar to switch to it', 'Right-click a program → Pin to taskbar', 'Bottom-right corner: WiFi, sound, clock, battery'],
            dutch: [{ nl: 'Taakbalk', en: 'Taskbar' }, { nl: 'Vastmaken', en: 'Pin to taskbar' }, { nl: 'Meldingen', en: 'Notifications' }]
          },
          {
            type: 'learn', icon: '🔍',
            title: 'Search — the fastest way to find anything',
            body: 'Press the Windows key (⊞) and just start typing. Find any program, file, or setting instantly.',
            list: ['Press ⊞ Win and type "Word" → opens Microsoft Word', 'Type "Settings" → opens Windows Settings', 'This is what professionals use every day'],
            dutch: [{ nl: 'Zoeken', en: 'Search' }, { nl: 'Instellingen', en: 'Settings' }, { nl: 'Startmenu', en: 'Start menu' }]
          },
          {
            type: 'exercise',
            title: '💻 Try it on your laptop!',
            task: 'Press the Windows key on your keyboard. Type "Notepad" and press Enter. Notepad will open. Close it by clicking the X at the top right.',
            screenshotTask: 'Open Notepad and take a screenshot showing it is open on your screen.',
            checkDescription: 'Screenshot should show Notepad open on a Windows desktop'
          },
          {
            type: 'quiz',
            question: 'What is the fastest way to open Microsoft Word?',
            options: ['Look through all desktop icons', 'Press the Windows key and type "Word"', 'Open File Explorer and search', 'Ask a colleague'],
            correct: 1,
            feedback: 'Press ⊞ Win and type the name of any program — it appears instantly. This is what fast workers do!'
          },
          {
            type: 'complete', xp: 25,
            ariaMsg: "You now know how to navigate Windows like someone who's been using it for years. The search shortcut alone will make you faster than many of your future colleagues!"
          }
        ]
      },
      {
        title: 'Files, folders & saving your work',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "This lesson is SO important. Most people who lose work at the office lose it because they didn't save it properly. After today, that will never happen to you."
          },
          {
            type: 'learn', icon: '📁',
            title: 'Files and Folders',
            body: 'A file is a document, photo, or any piece of work. A folder is a container that organises files.',
            list: ['File (Bestand) — your document, spreadsheet, photo', 'Folder (Map) — container to organise files', 'File Explorer (Verkenner) — the app to manage them all'],
            dutch: [{ nl: 'Bestand', en: 'File' }, { nl: 'Map', en: 'Folder' }, { nl: 'Verkenner', en: 'File Explorer' }, { nl: 'Prullenbak', en: 'Recycle bin' }]
          },
          {
            type: 'learn', icon: '💾',
            title: 'Saving — do it constantly!',
            body: 'Press Ctrl+S every few minutes while working. Get into this habit on day one.',
            list: ['Ctrl+S — Save (Opslaan)', 'Ctrl+Shift+S or File → Save As — save with a new name', 'OneDrive files save automatically — AutoSave ON at the top'],
            dutch: [{ nl: 'Opslaan', en: 'Save' }, { nl: 'Opslaan als', en: 'Save as' }, { nl: 'Automatisch opslaan', en: 'AutoSave' }]
          },
          {
            type: 'learn', icon: '🗂️',
            title: 'Where to save at work',
            body: 'At a Dutch company you will usually be told where to save. Common places:',
            list: ['Documents (Documenten) — your personal files', 'OneDrive — your cloud files, accessible anywhere', 'SharePoint — shared team files colleagues can also access', 'USB stick — avoid, companies prefer cloud storage'],
            dutch: [{ nl: 'Documenten', en: 'Documents folder' }, { nl: 'Bureaublad', en: 'Desktop' }, { nl: 'Netwerkschijf', en: 'Network drive' }]
          },
          {
            type: 'exercise',
            title: '💻 Try it on your laptop!',
            task: "Open Notepad. Type your name and today's date. Press Ctrl+S to save. Save in Documents as 'MyFirstFile'. Take a screenshot.",
            screenshotTask: 'Upload a screenshot showing Notepad open with your text, or the save dialog.',
            checkDescription: 'Screenshot shows Notepad open with text typed in it, or the save dialog'
          },
          {
            type: 'quiz',
            question: 'You are writing an important document. Which shortcut saves it?',
            options: ['Ctrl+P', 'Ctrl+S', 'Ctrl+O', 'Ctrl+N'],
            correct: 1,
            feedback: 'Ctrl+S saves your file. Make it a habit — press Ctrl+S every few minutes. In Dutch: Opslaan.'
          },
          {
            type: 'complete', xp: 25,
            ariaMsg: "Files, folders, saving — you've got it! At work, the first thing you should do when starting a document is save it with a proper name. Then Ctrl+S every few minutes. This habit will make you look so professional."
          }
        ]
      },
      {
        title: '🔧 Windows Troubleshooting',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "Things go wrong with computers — even for experts. What matters is staying calm and knowing what to try. After this lesson, when something breaks, you will know exactly what to do."
          },
          {
            type: 'learn', icon: '🐢',
            title: 'Computer is very slow',
            body: 'This is the most common problem. Try these steps in order:',
            list: ['Restart the computer (Opnieuw opstarten)', 'Close programs you are not using', 'Ctrl+Shift+Esc → Task Manager → close high CPU programs', 'Check if Windows is updating in the background'],
            dutch: [{ nl: 'Taakbeheer', en: 'Task Manager' }, { nl: 'Herstart', en: 'Restart' }, { nl: 'Programma sluiten', en: 'Close program' }]
          },
          {
            type: 'learn', icon: '🥶',
            title: 'Screen is frozen',
            body: "Don't panic! Try these steps:",
            list: ['Wait 30 seconds — it may fix itself', 'Alt+F4 to force-close the frozen program', 'If nothing works: hold the power button 5 seconds', 'Then start again normally'],
            dutch: [{ nl: 'Reageert niet', en: 'Not responding' }, { nl: 'Geforceerd sluiten', en: 'Force close' }]
          },
          {
            type: 'learn', icon: '📶',
            title: 'WiFi not working',
            body: 'Check these things in order:',
            list: ['Look at WiFi icon in taskbar — is it connected?', 'Click WiFi icon → disconnect → reconnect', 'Turn WiFi off and on again', 'Still not working → tell IT (Helpdesk)'],
            dutch: [{ nl: 'Wifi-verbinding', en: 'WiFi connection' }, { nl: 'Verbinden', en: 'Connect' }, { nl: 'Verbreken', en: 'Disconnect' }]
          },
          {
            type: 'quiz',
            question: 'Your screen is completely frozen. What do you do?',
            options: ['Immediately call IT', 'Pull out the power cable', 'Wait 30 sec, try Alt+F4, then hold power button if needed', 'Press Ctrl+Z'],
            correct: 2,
            feedback: 'Wait first — it may recover. Then Alt+F4 to close the frozen app. Hold the power button only as a last resort.'
          },
          {
            type: 'quiz',
            question: 'Which tool shows which programs are making your computer slow?',
            options: ['File Explorer (Verkenner)', 'Task Manager — Ctrl+Shift+Esc', 'Settings (Instellingen)', 'Recycle Bin (Prullenbak)'],
            correct: 1,
            feedback: 'Task Manager (Taakbeheer) shows all running programs and their power usage. Ctrl+Shift+Esc opens it instantly.'
          },
          {
            type: 'speak',
            instruction: 'At work you might need to call IT. Practice saying this:',
            phrase: 'Hello, my computer is not working correctly. Can you help me please?',
            phraseNl: 'Hallo, mijn computer werkt niet goed. Kunt u mij helpen?',
            lang: 'en-US'
          },
          {
            type: 'complete', xp: 30,
            ariaMsg: "You now know what to do when your computer has problems. At work, staying calm and following these steps will make you look completely professional. Your colleagues will be impressed that you don't panic — you just fix it!"
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  //  2. MICROSOFT WORD
  // ═══════════════════════════════════════════
  {
    id: 'word',
    icon: '📝',
    name: 'Microsoft Word',
    phase: 'Office',
    color: '#2563eb',
    lessons: [
      {
        title: 'Opening, creating and saving a document',
        time: '4 min',
        steps: [
          {
            type: 'learn', icon: '📝',
            title: 'Opening Microsoft Word',
            body: 'Press the Windows key, type "Word", and press Enter. Or click the Word icon on your taskbar.',
            list: ['Word opens with a Start screen — choose Blank document', 'Or choose a template for letters, CVs, reports', 'The document area is the white space in the middle'],
            dutch: [{ nl: 'Leeg document', en: 'Blank document' }, { nl: 'Sjabloon', en: 'Template' }, { nl: 'Lint', en: 'Ribbon (toolbar)' }]
          },
          {
            type: 'learn', icon: '💾',
            title: 'Saving your document — most important step!',
            body: 'Save your document FIRST before you start typing. Give it a clear name.',
            list: ['Ctrl+S — Save (Opslaan)', 'First time saving: choose where and give a filename', 'Use a clear name: "Report_June2026" not "document1"', 'AutoSave appears if using OneDrive — keep it ON (blue)'],
            dutch: [{ nl: 'Opslaan', en: 'Save (Ctrl+S)' }, { nl: 'Opslaan als', en: 'Save As' }, { nl: 'Bestandsnaam', en: 'Filename' }]
          },
          {
            type: 'exercise',
            title: '💻 Try it on your laptop!',
            task: 'Open Word. Create a blank document. Save it as "MyFirstWordDoc" in your Documents folder. Take a screenshot of Word open with your saved filename showing at the top.',
            screenshotTask: 'Upload a screenshot of Word open, showing the document name at the top.',
            checkDescription: 'Screenshot shows Microsoft Word open with a document title visible at the top (not "Document1")'
          },
          {
            type: 'quiz',
            question: 'You finished typing a Word document. What should you do before closing?',
            options: ['Click the X to close immediately', 'Press Ctrl+S to save, then close', 'Press Ctrl+P to print it', 'Nothing — it saves automatically'],
            correct: 1,
            feedback: 'Always Ctrl+S before closing! Even with AutoSave on, manually saving is a good habit.'
          },
          {
            type: 'complete', xp: 20,
            ariaMsg: "Opening and saving Word — done! You know the most important habit: save early, save often. This protects all your work."
          }
        ]
      },
      {
        title: 'Formatting text to look professional',
        time: '5 min',
        steps: [
          {
            type: 'learn', icon: '✍️',
            title: 'The Ribbon — your formatting toolbox',
            body: 'At the top of Word is the Ribbon (Lint). The Home tab has all the most-used formatting tools.',
            list: ['Bold (Vet) — Ctrl+B — makes text thick and strong', 'Italic (Cursief) — Ctrl+I — slants the text', 'Underline (Onderstrepen) — Ctrl+U — draws a line under', 'Font size — change the number to make text bigger/smaller'],
            dutch: [{ nl: 'Vet', en: 'Bold' }, { nl: 'Cursief', en: 'Italic' }, { nl: 'Onderstrepen', en: 'Underline' }, { nl: 'Lettertype', en: 'Font' }, { nl: 'Tekengrootte', en: 'Font size' }]
          },
          {
            type: 'learn', icon: '📐',
            title: 'Alignment and line spacing',
            body: 'Professional documents use consistent alignment and spacing.',
            list: ['Left align (Links uitlijnen) — standard for most text', 'Centre (Centreren) — for headings or titles', 'Right align (Rechts uitlijnen) — for dates', 'Line spacing 1.15 or 1.5 is easy to read'],
            dutch: [{ nl: 'Links uitlijnen', en: 'Left align' }, { nl: 'Centreren', en: 'Center' }, { nl: 'Regelafstand', en: 'Line spacing' }]
          },
          {
            type: 'exercise',
            title: '💻 Practice on your laptop!',
            task: "Open a new Word document. Type your full name centred, Bold, font size 20. Below it type today's date right-aligned. Below that type a sentence about yourself. Save and take a screenshot.",
            screenshotTask: 'Upload your screenshot showing the formatted document.',
            checkDescription: 'Screenshot shows a Word document with formatted text — bold centered title, date, and body text'
          },
          {
            type: 'quiz',
            question: 'What does Ctrl+B do in Word?',
            options: ['Opens a new document', 'Makes text Bold (Vet)', 'Saves the document', 'Underlines the text'],
            correct: 1,
            feedback: 'Ctrl+B makes selected text Bold (Vet). Select text first, then press Ctrl+B. Press again to remove bold.'
          },
          {
            type: 'complete', xp: 25,
            ariaMsg: "You can now format text professionally! Bold headings, proper alignment, correct font size — these small things make your documents look polished."
          }
        ]
      },
      {
        title: 'Bullet points, numbered lists & tables',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "Bullet points and tables are what transform a messy document into a professional one. Dutch employers love clear, structured information. After this lesson, your documents will look like they came from a professional."
          },
          {
            type: 'learn', icon: '• ',
            title: 'Bullet points & numbered lists',
            body: 'Use bullet points for lists of items with no order. Use numbered lists for steps or ranked items.',
            list: ['Home tab → click the bullet icon (•) to start a bullet list', 'Home tab → click the number icon (1.) for a numbered list', 'Press Enter after each item — it adds the next bullet/number automatically', 'Press Tab to indent to a sub-level', 'Press Backspace on empty bullet to exit the list'],
            dutch: [{ nl: 'Opsommingsteken', en: 'Bullet point' }, { nl: 'Genummerde lijst', en: 'Numbered list' }, { nl: 'Inspringing', en: 'Indentation' }]
          },
          {
            type: 'learn', icon: '📊',
            title: 'Tables — organising data neatly',
            body: 'Tables are perfect for comparing things, schedules, or any organised information.',
            list: ['Insert tab → Table → drag to choose how many rows and columns', 'Click inside a cell and type', 'Tab key moves to the next cell (right or new row at the end)', 'Right-click a cell → Insert Row or Insert Column to add more'],
            dutch: [{ nl: 'Tabel', en: 'Table' }, { nl: 'Rij', en: 'Row' }, { nl: 'Kolom', en: 'Column' }, { nl: 'Cel', en: 'Cell' }]
          },
          {
            type: 'quiz',
            question: 'You are writing step-by-step instructions. Which format is best?',
            options: ['Just long paragraphs', 'Bullet points', 'A numbered list', 'Bold text only'],
            correct: 2,
            feedback: 'A numbered list is perfect for step-by-step instructions — it shows the order clearly. Bullet points are better for unordered lists.'
          },
          {
            type: 'exercise',
            title: '💻 Try it on your laptop!',
            task: "Open Word. Create a 3-row, 2-column table. In column 1 type: Name, Date, Department. In column 2 fill in your own details. Add a heading above the table. Save and take a screenshot.",
            screenshotTask: 'Upload your screenshot showing the table in Word.',
            checkDescription: 'Screenshot shows a Word document with a table containing at least 3 rows and 2 columns'
          },
          {
            type: 'complete', xp: 25,
            ariaMsg: "Bullet lists and tables — professional document skills! Dutch workplaces love structured documents. You now write documents that are a pleasure to read."
          }
        ]
      },
      {
        title: 'Printing & saving as PDF',
        time: '4 min',
        steps: [
          {
            type: 'learn', icon: '🖨️',
            title: 'Printing a document',
            body: 'At work you will need to print documents for meetings, signatures, or records.',
            list: ['Ctrl+P — opens the Print dialog (Afdrukken)', 'Choose your printer from the dropdown', 'Set the number of copies (Exemplaren)', 'Click Print (Afdrukken) or Cancel to go back'],
            dutch: [{ nl: 'Afdrukken', en: 'Print' }, { nl: 'Printer', en: 'Printer (same)' }, { nl: 'Exemplaren', en: 'Copies' }, { nl: 'Annuleren', en: 'Cancel' }]
          },
          {
            type: 'learn', icon: '📄',
            title: 'Saving as PDF — the professional format',
            body: 'Always send documents as PDF, not Word. PDF looks the same on every computer and cannot be accidentally edited.',
            list: ['File → Save As → change "Word Document" to "PDF"', 'Or: File → Export → Create PDF/XPS', 'Name your PDF clearly: "CV_Chhaya_June2026.pdf"', 'A PDF opened in the browser or Adobe Reader is perfect for emailing'],
            dutch: [{ nl: 'PDF-bestand', en: 'PDF file' }, { nl: 'Exporteren', en: 'Export' }, { nl: 'Bijlage', en: 'Attachment (email)' }]
          },
          {
            type: 'aria',
            text: "Always send your CV as a PDF, never as a Word document. A Word file can look different on the employer's computer — fonts change, layout breaks. A PDF always looks exactly as you intended. This is one of those things that makes you look professional instantly."
          },
          {
            type: 'quiz',
            question: 'You want to email your CV to an employer. Which format should you send?',
            options: ['Word document (.docx)', 'PDF (.pdf)', 'Notepad (.txt)', 'Any format is fine'],
            correct: 1,
            feedback: 'Always send a PDF! It looks the same on every computer. Your carefully formatted CV will not break or change. This is standard professional practice.'
          },
          {
            type: 'speak',
            instruction: 'Practice saying this for a work situation:',
            phrase: 'I will send you the document as a PDF by email.',
            phraseNl: 'Ik stuur u het document als pdf per e-mail.',
            lang: 'en-US'
          },
          {
            type: 'complete', xp: 25,
            ariaMsg: "Printing and PDF — you've got it! Saving as PDF before sending is one of those small things that immediately tells employers and colleagues you know what you are doing."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  //  3. OFFICE CULTURE
  // ═══════════════════════════════════════════
  {
    id: 'office-culture',
    icon: '🏢',
    name: 'Office Culture',
    phase: 'Workplace',
    color: '#7c3aed',
    lessons: [
      {
        title: 'Your first day — what to expect',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "First days are nerve-wracking for everyone. Even people who have worked for 20 years feel nervous on a first day. What I'm going to tell you will make you feel SO much more prepared than most new starters."
          },
          {
            type: 'learn', icon: '⏰',
            title: 'Punctuality — the most important rule',
            body: 'In the Netherlands, being on time means arriving 5 minutes early. Not 10 minutes late like many cultures accept.',
            list: ['Arrive 5 minutes before your start time', 'Being late — even by 5 minutes — is noticed', 'If you are running late: call or message immediately', 'Plan your route the day before using the NS app'],
            dutch: [{ nl: 'Op tijd', en: 'On time' }, { nl: 'Te laat', en: 'Late' }, { nl: 'Stipt', en: 'Punctual' }]
          },
          {
            type: 'learn', icon: '👋',
            title: 'Introducing yourself',
            body: 'Dutch introductions are short and direct — not long and formal like in India.',
            list: ['Say your first name and a one-line background', '"Hi, I\'m Chhaya. I\'m the new assistant."', 'Shake hands firmly — one shake, not multiple', 'Dutch people use first names immediately — even with the director'],
            dutch: [{ nl: 'Aangenaam', en: 'Pleased to meet you' }, { nl: 'Mijn naam is...', en: 'My name is...' }, { nl: 'Ik ben nieuw hier', en: 'I am new here' }]
          },
          {
            type: 'learn', icon: '🏢',
            title: 'What you will receive on day one',
            body: 'Keep these safe!',
            list: ['Toegangspas (access card) — gets you through security doors', 'Laptop or PC — do not install personal software', 'Email address and login — set up right away', 'Begeleider (buddy) — your go-to person for questions'],
            dutch: [{ nl: 'Toegangspas', en: 'Access card' }, { nl: 'Begeleider', en: 'Buddy/mentor' }, { nl: 'Proeftijd', en: 'Trial period' }, { nl: 'Inwerken', en: 'Onboarding' }]
          },
          {
            type: 'speak',
            instruction: 'Practice your introduction:',
            phrase: 'Hello, my name is Chhaya. I am the new team member. I am very happy to be here.',
            phraseNl: 'Hallo, mijn naam is Chhaya. Ik ben het nieuwe teamlid. Ik ben erg blij om hier te zijn.',
            lang: 'en-US'
          },
          {
            type: 'quiz',
            question: 'Your start time is 9:00. When should you arrive?',
            options: ['9:15 — a little late is fine', '9:00 exactly', '8:55 — five minutes early', '9:30 — Dutch people are relaxed'],
            correct: 2,
            feedback: '8:55 is perfect in the Netherlands. Being on time is taken seriously and shows professionalism.'
          },
          {
            type: 'quiz',
            question: 'Your Dutch manager introduces herself as "Sandra". How do you address her?',
            options: ['Mevrouw [surname]', 'Ma\'am', 'Sandra', 'Ms Sandra'],
            correct: 2,
            feedback: 'In the Netherlands, everyone uses first names — even with managers. This is normal, not rude.'
          },
          {
            type: 'complete', xp: 30,
            ariaMsg: "You are SO ready for your first day. Arrive 5 minutes early, introduce yourself with your name, use first names — you will walk in with confidence!"
          }
        ]
      },
      {
        title: 'Dutch directness — understanding the culture',
        time: '4 min',
        steps: [
          {
            type: 'aria',
            text: "This lesson might be the most important one in the whole app. Understanding Dutch directness will change how you see every conversation at work."
          },
          {
            type: 'learn', icon: '🎯',
            title: 'Dutch people say exactly what they mean',
            body: 'In the Netherlands, directness is a sign of respect — not rudeness.',
            list: ['"That report has a mistake" = helpful, honest feedback', '"I disagree" in a meeting = normal healthy discussion', 'Saying NO is completely acceptable and respected', 'Silence is comfortable — no need to fill it with small talk'],
            dutch: [{ nl: 'Direct', en: 'Direct' }, { nl: 'Eerlijk', en: 'Honest' }, { nl: 'Constructieve kritiek', en: 'Constructive criticism' }]
          },
          {
            type: 'learn', icon: '🤝',
            title: 'How to respond to direct feedback',
            body: 'When a Dutch colleague gives you direct feedback:',
            list: ['Stay calm — it is not personal', 'Say "Dank je" (thank you) and listen', 'Ask "Can you tell me more?" to understand better', 'Do NOT over-apologise — it makes you seem unsure', 'Do NOT take it home as a personal attack'],
            dutch: [{ nl: 'Dank je', en: 'Thank you (informal)' }, { nl: 'Dank u wel', en: 'Thank you (formal)' }, { nl: 'Ik begrijp het', en: 'I understand' }]
          },
          {
            type: 'quiz',
            question: 'Your colleague says "This presentation is too long." How do you respond?',
            options: ['Feel hurt and say nothing', 'Say "I\'m so sorry, I\'m terrible at this"', 'Say "Thank you, I\'ll make it shorter"', 'Disagree loudly'],
            correct: 2,
            feedback: '"Thank you, I\'ll work on it" shows confidence and professionalism. Your Dutch colleague respects you for receiving feedback well.'
          },
          {
            type: 'speak',
            instruction: 'Practice responding to feedback confidently:',
            phrase: 'Thank you for the feedback. I will improve it right away.',
            phraseNl: 'Dank u voor de feedback. Ik zal het meteen verbeteren.',
            lang: 'en-US'
          },
          {
            type: 'complete', xp: 25,
            ariaMsg: "Understanding Dutch directness is something that takes many expats months to figure out. You've learned it today. This will make your working life so much smoother."
          }
        ]
      },
      {
        title: 'Meetings — Dutch style',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "Dutch meetings are very different from what you might expect. They are structured, everyone speaks, and decisions are made together. Knowing this will help you feel confident — not invisible — in your first meetings."
          },
          {
            type: 'learn', icon: '📅',
            title: 'How Dutch meetings work',
            body: 'Dutch meetings follow a clear structure and have a strong culture of participation.',
            list: ['Meetings start on time — be seated before the start', 'An agenda (agenda) is usually shared in advance', 'Everyone is expected to contribute — silence = no opinion', 'Decisions are often made by consensus (poldermodel)', 'Meetings end with clear action points — who does what by when'],
            dutch: [{ nl: 'Vergadering', en: 'Meeting' }, { nl: 'Agenda', en: 'Agenda (same word)' }, { nl: 'Notulen', en: 'Meeting notes/minutes' }, { nl: 'Actiepunten', en: 'Action points' }]
          },
          {
            type: 'learn', icon: '🗣️',
            title: 'Speaking up in meetings',
            body: 'In the Netherlands, your opinion is expected and valued. Staying quiet looks like you have nothing to contribute.',
            list: ['"Ik heb een vraag" — I have a question (say this!)', '"Mag ik iets toevoegen?" — May I add something?', '"Ik ben het ermee eens" — I agree', '"Ik zie dat anders" — I see that differently (polite disagreement)', 'Ask questions — it shows you are engaged, not confused'],
            dutch: [{ nl: 'Ik heb een vraag', en: 'I have a question' }, { nl: 'Ik ben het ermee eens', en: 'I agree' }, { nl: 'Mag ik iets toevoegen?', en: 'May I add something?' }]
          },
          {
            type: 'learn', icon: '☕',
            title: 'Coffee & small talk before meetings',
            body: 'Dutch meetings often start with 5 minutes of koffie (coffee) and small talk. This is important — it builds relationships.',
            list: ['Talk about the weather (Dutch favourite topic!)', 'Ask about the weekend: "Had je een fijn weekend?"', 'Sport, cycling, cycling, cycling — Dutch people love cycling', 'Keep it light — avoid politics or religion'],
            dutch: [{ nl: 'Had je een fijn weekend?', en: 'Did you have a nice weekend?' }, { nl: 'Het weer', en: 'The weather' }, { nl: 'Fietsen', en: 'Cycling' }]
          },
          {
            type: 'quiz',
            question: 'In a Dutch meeting you disagree with a proposal. What should you do?',
            options: ['Stay silent and nod politely', 'Loudly interrupt the speaker', 'Politely say "I see that differently" and explain your view', 'Send an email after the meeting'],
            correct: 2,
            feedback: 'Politely sharing your view is expected and respected in Dutch culture. "I see that differently" + your reason = professional participation.'
          },
          {
            type: 'speak',
            instruction: 'Practice this useful meeting phrase:',
            phrase: 'I have a question about that. Can you explain it a bit more?',
            phraseNl: 'Ik heb een vraag daarvoor. Kunt u dat iets meer uitleggen?',
            lang: 'en-US'
          },
          {
            type: 'complete', xp: 30,
            ariaMsg: "You now know how Dutch meetings work and how to participate confidently! Speaking up, asking questions, and contributing — these are skills that will get you noticed in a very positive way."
          }
        ]
      },
      {
        title: 'Office structure — departments & hierarchy',
        time: '5 min',
        steps: [
          {
            type: 'learn', icon: '🏛️',
            title: 'How a company is organised',
            body: 'Almost every company has the same basic structure. Knowing this helps you understand who does what.',
            list: ['Directie (Board/Directors) — top leadership, makes big decisions', 'Management (Management) — runs departments, reports to directors', 'Team leads (Teamleiders) — manage small teams day to day', 'Medewerkers (Employees) — the people doing the day-to-day work'],
            dutch: [{ nl: 'Directie', en: 'Board / Directors' }, { nl: 'Afdeling', en: 'Department' }, { nl: 'Teamleider', en: 'Team lead' }, { nl: 'Medewerker', en: 'Employee / Colleague' }]
          },
          {
            type: 'learn', icon: '🗂️',
            title: 'Common departments you will encounter',
            body: 'Here are the departments you will find in most Dutch companies:',
            list: ['HR (Human Resources / Personeelszaken) — hiring, contracts, leave', 'Finance (Financiën) — budgets, invoices, payments', 'IT (Automatisering/IT) — computers, systems, helpdesk', 'Admin (Administratie) — planning, organising, support', 'Sales (Verkoop) — finding and managing clients', 'Marketing — branding, advertising, social media'],
            dutch: [{ nl: 'Personeelszaken', en: 'HR / Human Resources' }, { nl: 'Financiën', en: 'Finance' }, { nl: 'Administratie', en: 'Administration' }, { nl: 'Verkoop', en: 'Sales' }]
          },
          {
            type: 'learn', icon: '💼',
            title: 'Common job titles in Dutch',
            body: 'You will see these on email signatures, business cards, and job listings.',
            list: ['Directeur / CEO — Director / Chief Executive Officer', 'Manager — Manager (same word)', 'Medewerker — Staff member / Employee', 'Stagiaire — Intern', 'Zzp\'er — Self-employed / Freelancer', 'Parttime / Fulltime — Part-time / Full-time'],
            dutch: [{ nl: 'Directeur', en: 'Director' }, { nl: 'Stagiaire', en: 'Intern' }, { nl: 'Zzp\'er', en: 'Freelancer' }, { nl: 'Parttime', en: 'Part-time' }]
          },
          {
            type: 'quiz',
            question: 'You have a question about your holiday leave. Which department do you contact?',
            options: ['Finance (Financiën)', 'HR (Personeelszaken)', 'IT (Automatisering)', 'Sales (Verkoop)'],
            correct: 1,
            feedback: 'HR (Personeelszaken) handles all employee matters — leave, contracts, onboarding, and benefits. They are your first contact for personal work matters.'
          },
          {
            type: 'quiz',
            question: 'What is a "Stagiaire"?',
            options: ['A department manager', 'An intern', 'A senior director', 'A freelancer'],
            correct: 1,
            feedback: 'Stagiaire = intern! Many Dutch companies actively hire stagiaires. It is a great way to start your career in the Netherlands.'
          },
          {
            type: 'complete', xp: 30,
            ariaMsg: "You now understand how Dutch companies are organised! Knowing who does what — and what to call them — will help you navigate any workplace with confidence from day one."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  //  4. DUTCH AT WORK
  // ═══════════════════════════════════════════
  {
    id: 'dutch-at-work',
    icon: '🇳🇱',
    name: 'Dutch at Work',
    phase: 'Language',
    color: '#f59e0b',
    lessons: [
      {
        title: 'Greetings and daily phrases',
        time: '4 min',
        steps: [
          {
            type: 'aria',
            text: "Even saying one Dutch word to your colleagues will make them smile and open doors for you. Dutch people really appreciate when foreigners make the effort. Let's learn the phrases you'll use every single day."
          },
          {
            type: 'learn', icon: '👋',
            title: 'Daily greetings — say them out loud',
            body: 'These are the phrases you will use every morning and evening at work.',
            list: ['Goedemorgen — Good morning', 'Goedemiddag — Good afternoon', 'Goedenavond — Good evening', 'Hoi / Hallo — Hi / Hello (casual)', 'Tot ziens — Goodbye', 'Tot morgen — See you tomorrow', 'Fijn weekend! — Have a nice weekend!'],
            dutch: [{ nl: 'Goedemorgen', en: 'Good morning' }, { nl: 'Goedemiddag', en: 'Good afternoon' }, { nl: 'Fijn weekend!', en: 'Have a nice weekend!' }, { nl: 'Tot morgen', en: 'See you tomorrow' }]
          },
          {
            type: 'speak',
            instruction: 'Aria says it first — you repeat:',
            phrase: 'Goedemorgen! Hoe gaat het?',
            phraseNl: 'Good morning! How are you?',
            lang: 'nl-NL'
          },
          {
            type: 'speak',
            instruction: 'Now try the goodbye:',
            phrase: 'Tot morgen! Fijn avond!',
            phraseNl: 'See you tomorrow! Have a nice evening!',
            lang: 'nl-NL'
          },
          {
            type: 'quiz',
            question: 'It is Friday afternoon. What do you say to colleagues as you leave?',
            options: ['Tot ziens', 'Fijn weekend!', 'Goedemorgen', 'Doei doei'],
            correct: 1,
            feedback: '"Fijn weekend!" is what everyone says on Friday — a lovely Dutch habit your colleagues will love hearing!'
          },
          {
            type: 'complete', xp: 20,
            ariaMsg: "You just spoke Dutch! Those phrases will make a real difference from day one. When you say Goedemorgen to your Dutch colleagues, watch their faces light up."
          }
        ]
      },
      {
        title: 'Asking for help & work phrases',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "One of the bravest things you can do in a new job is ask for help. In Dutch culture, asking questions is seen as smart and proactive — not weak. Let's learn exactly how to ask."
          },
          {
            type: 'learn', icon: '🙋',
            title: 'Asking for help at work',
            body: 'These phrases will get you through your first weeks at any Dutch company.',
            list: ['Kunt u mij helpen? — Can you help me?', 'Ik begrijp het niet — I do not understand', 'Kunt u dat herhalen? — Can you repeat that?', 'Spreekt u Engels? — Do you speak English?', 'Wat betekent dat? — What does that mean?', 'Mag ik een vraag stellen? — May I ask a question?'],
            dutch: [{ nl: 'Kunt u mij helpen?', en: 'Can you help me?' }, { nl: 'Ik begrijp het niet', en: 'I do not understand' }, { nl: 'Kunt u dat herhalen?', en: 'Can you repeat that?' }, { nl: 'Wat betekent dat?', en: 'What does that mean?' }]
          },
          {
            type: 'learn', icon: '📞',
            title: 'On the phone and in email',
            body: 'Some basic phrases for professional communication.',
            list: ['Met [naam] — This is [name] (when answering phone)', 'Ik bel voor... — I am calling about...', 'Kunt u mij doorverbinden met...? — Can you connect me to...?', 'Ik stuur u een e-mail — I will send you an email', 'In afwachting van uw reactie — Looking forward to your reply'],
            dutch: [{ nl: 'Met [naam]', en: 'This is [name]' }, { nl: 'Doorverbinden', en: 'Connect / Transfer (phone)' }, { nl: 'In afwachting', en: 'Looking forward to' }]
          },
          {
            type: 'speak',
            instruction: 'Practice this essential phrase:',
            phrase: 'Excuse me, can you help me? I do not understand.',
            phraseNl: 'Excuseer, kunt u mij helpen? Ik begrijp het niet.',
            lang: 'en-US'
          },
          {
            type: 'speak',
            instruction: 'Now try it in Dutch — Aria will say it slowly:',
            phrase: 'Kunt u mij helpen? Ik begrijp het niet.',
            phraseNl: 'Can you help me? I do not understand.',
            lang: 'nl-NL'
          },
          {
            type: 'quiz',
            question: 'A colleague is speaking Dutch and you didn\'t catch it. What do you say?',
            options: ['Just nod and pretend you understood', 'Kunt u dat herhalen? (Can you repeat that?)', 'Leave the conversation', 'Speak very loudly in English'],
            correct: 1,
            feedback: '"Kunt u dat herhalen?" is polite and professional. Dutch people will always repeat for you — they appreciate you trying!'
          },
          {
            type: 'complete', xp: 25,
            ariaMsg: "You now have the phrases to navigate almost any situation at a Dutch workplace! Asking for help in Dutch — even just trying — will earn you so much respect and goodwill."
          }
        ]
      },
      {
        title: 'Small talk — the Dutch way',
        time: '4 min',
        steps: [
          {
            type: 'aria',
            text: "Small talk in the Netherlands is an art form. It is shorter than in many cultures, focused on a few specific topics, and never too personal. Learning this will help you build friendships with your Dutch colleagues naturally."
          },
          {
            type: 'learn', icon: '☕',
            title: 'What Dutch people talk about',
            body: 'Dutch small talk has favourite topics. Master these and you will fit right in.',
            list: ['Het weer (the weather) — always safe! "Wat een mooi weer vandaag!"', 'Fietsen (cycling) — almost everyone cycles to work', 'Vakanties (holidays) — "Waar ga jij op vakantie?" is very common', 'Sport — especially voetbal (football) and wielrennen (cycling)', 'De trein (the train) — delays are a national topic!'],
            dutch: [{ nl: 'Wat een mooi weer!', en: 'What lovely weather!' }, { nl: 'Het regent', en: 'It is raining' }, { nl: 'Ga je met de fiets?', en: 'Are you cycling?' }, { nl: 'Heb je fijn weekend gehad?', en: 'Did you have a nice weekend?' }]
          },
          {
            type: 'learn', icon: '🚫',
            title: 'What NOT to talk about',
            body: 'Dutch people are private about some things — especially at work.',
            list: ['Money — never ask salaries or costs (very private)', 'Religion or politics — avoid completely at work', 'How much someone paid for their house', 'Personal questions about relationships on first meetings', 'Keep it positive and light — Dutch people dislike complaining'],
          },
          {
            type: 'speak',
            instruction: 'Start a Monday morning conversation — say this to a colleague:',
            phrase: 'Good morning! Did you have a nice weekend?',
            phraseNl: 'Goedemorgen! Heb je een fijn weekend gehad?',
            lang: 'en-US'
          },
          {
            type: 'speak',
            instruction: 'Now try it in Dutch:',
            phrase: 'Goedemorgen! Heb je een fijn weekend gehad?',
            phraseNl: 'Good morning! Did you have a nice weekend?',
            lang: 'nl-NL'
          },
          {
            type: 'quiz',
            question: 'A colleague asks "Hoe was je weekend?" What does that mean?',
            options: ['How was your lunch?', 'How was your weekend?', 'How are you feeling?', 'Where do you live?'],
            correct: 1,
            feedback: '"Hoe was je weekend?" = How was your weekend? A great answer: "Heel fijn, dank je! En jij?" (Very nice, thanks! And you?)'
          },
          {
            type: 'complete', xp: 25,
            ariaMsg: "Small talk mastered! The weather, cycling, and weekends — you now have everything you need to chat with Dutch colleagues over coffee. These conversations build real friendships over time."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  //  5. JOB SEARCH NL
  // ═══════════════════════════════════════════
  {
    id: 'job-search',
    icon: '💼',
    name: 'Job Search NL',
    phase: 'Career',
    color: '#10b981',
    lessons: [
      {
        title: 'Dutch CV — what is different from India',
        time: '6 min',
        steps: [
          {
            type: 'aria',
            text: "Your Masters degree is valuable. Your life experience is valuable. I want you to walk into this job search knowing that. Today we learn how the Dutch CV format works — knowing this gives you a huge advantage."
          },
          {
            type: 'learn', icon: '📄',
            title: 'Dutch CV — key differences',
            body: 'Dutch employers have very specific expectations. Following these rules shows you understand the culture.',
            list: ['Maximum 1-2 pages — NOT 5 pages like India', 'NO photo, NO date of birth, NO marital status (Dutch law)', 'Start with a short personal profile (3-4 lines about you)', 'List education first if it is your strongest point', 'Skills: include Word, Excel, Teams, Dutch language level'],
            dutch: [{ nl: 'Curriculum vitae (CV)', en: 'Resume / CV' }, { nl: 'Persoonlijk profiel', en: 'Personal profile' }, { nl: 'Werkervaring', en: 'Work experience' }, { nl: 'Opleiding', en: 'Education' }]
          },
          {
            type: 'learn', icon: '✍️',
            title: 'Your personal profile',
            body: 'This is the first thing employers read. Make it count.',
            list: ['"Motivated professional with a Masters in Finance, looking to build a career in the Netherlands."', 'Mention your strongest skills: analytical, organised, quick learner', 'Mention language: "Currently learning Dutch (A2 level)"', 'Keep it 3-4 sentences — Dutch employers value brevity'],
          },
          {
            type: 'learn', icon: '💪',
            title: 'Addressing the career gap positively',
            body: 'Many applicants are afraid of gaps. In the Netherlands, gaps are normal — you just explain briefly.',
            list: ['"2013-2026: Relocated to Netherlands, focused on family and language learning"', 'Focus on what you learned during this time', 'Your Masters is still valid — finance knowledge does not expire', 'Dutch companies value diversity and life experience'],
            dutch: [{ nl: 'Loopbaanonderbreking', en: 'Career gap' }, { nl: 'Herscholing', en: 'Retraining' }]
          },
          {
            type: 'quiz',
            question: 'Should you include your photo on a Dutch CV?',
            options: ['Yes, always', 'No — Dutch law and norms say no photo', 'Only if you look professional', 'Only for senior positions'],
            correct: 1,
            feedback: 'No photo on a Dutch CV! Dutch anti-discrimination law means employers should judge you on skills, not appearance.'
          },
          {
            type: 'speak',
            instruction: 'Practice your elevator pitch:',
            phrase: "I have a Masters degree in Finance and I'm looking to build my career here in the Netherlands. I'm a quick learner and excited to contribute to a team.",
            phraseNl: 'Ik heb een master in financiën en ik wil hier in Nederland mijn carrière opbouwen.',
            lang: 'en-US'
          },
          {
            type: 'complete', xp: 35,
            ariaMsg: "You now know how to write a Dutch CV better than most applicants! Clear personal profile, no photo, honest about your gap, your Masters highlighted — this is a strong application."
          }
        ]
      },
      {
        title: 'Where to find jobs in the Netherlands',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "The Dutch job market has a few key platforms that everyone uses. Knowing where to look is half the battle. Let's make sure you are searching in exactly the right places."
          },
          {
            type: 'learn', icon: '💻',
            title: 'The best job search websites',
            body: 'These are the most important platforms for finding work in the Netherlands:',
            list: ['LinkedIn — most important! 80% of Dutch professionals are on it', 'Indeed.nl — largest general job board in the Netherlands', 'Nationale Vacaturebank (NVB) — popular Dutch job site', 'Werk.nl — free government platform (also for benefits info)', 'Intermediair.nl — professional/management roles', 'Undutchables.nl — jobs specifically for internationals/expats'],
            dutch: [{ nl: 'Vacature', en: 'Job vacancy' }, { nl: 'Solliciteren', en: 'Apply (for a job)' }, { nl: 'Uitzendbureau', en: 'Employment agency / temp agency' }]
          },
          {
            type: 'learn', icon: '🤝',
            title: 'LinkedIn — your most important tool',
            body: 'LinkedIn is not optional in the Netherlands — it is how the Dutch professional world works.',
            list: ['Create a complete profile — photo (different from CV!), summary, experience', 'Connect with everyone you meet professionally', '"Open to Work" feature — let recruiters find you', 'Follow companies you want to work for', 'Post occasionally — even liking posts makes you visible', 'Message recruiters directly — Dutch people respond well to this'],
            dutch: [{ nl: 'Netwerken', en: 'Networking' }, { nl: 'Recruiter', en: 'Recruiter (same word)' }, { nl: 'Aanbeveling', en: 'Recommendation/Reference' }]
          },
          {
            type: 'learn', icon: '🏢',
            title: 'Uitzendbureaus — temp agencies',
            body: 'Temp agencies are very popular in the Netherlands and are a great way to start working quickly.',
            list: ['Randstad — largest agency in the Netherlands', 'Adecco, Manpower, USG People — other major agencies', 'Register in person or online — bring your BSN number', 'Temp work often leads to permanent contracts', 'Great for building Dutch work experience on your CV'],
            dutch: [{ nl: 'Uitzendbureau', en: 'Temp agency' }, { nl: 'Tijdelijk contract', en: 'Temporary contract' }, { nl: 'Vast contract', en: 'Permanent contract' }, { nl: 'BSN-nummer', en: 'Dutch citizen service number' }]
          },
          {
            type: 'quiz',
            question: 'Which platform is most important for professional networking in the Netherlands?',
            options: ['Facebook', 'LinkedIn', 'Twitter/X', 'WhatsApp'],
            correct: 1,
            feedback: 'LinkedIn is essential in the Netherlands. 80% of Dutch professionals are on it. A complete LinkedIn profile is as important as your CV.'
          },
          {
            type: 'quiz',
            question: 'What is an "uitzendbureau"?',
            options: ['A government tax office', 'A temp agency that places workers with companies', 'A type of bank', 'A Dutch training centre'],
            correct: 1,
            feedback: 'Uitzendbureau = temp agency. Randstad is the biggest. Registering with a temp agency is one of the fastest ways to start working in the Netherlands!'
          },
          {
            type: 'complete', xp: 30,
            ariaMsg: "You now know exactly where to look for work in the Netherlands — and LinkedIn is your most powerful tool. Make sure your profile is complete and your connections are growing every week!"
          }
        ]
      },
      {
        title: 'The Dutch job interview',
        time: '6 min',
        steps: [
          {
            type: 'aria',
            text: "You've applied, they liked your CV — now comes the interview! Dutch interviews are friendly but structured. Knowing what to expect will let you walk in feeling calm, prepared, and confident. Let's get you ready."
          },
          {
            type: 'learn', icon: '🎯',
            title: 'What Dutch interviews are like',
            body: 'Dutch interviews are conversational, not intimidating. They want to find out if you are a good fit.',
            list: ['Usually 45-60 minutes, often with 2 interviewers', 'Very conversational — more like a discussion than an exam', 'Competency-based questions: "Tell me about a time when..."', 'They will ask if you have questions — always have 2-3 ready', 'Dress smart but not over-formal — smart casual is fine in most companies'],
            dutch: [{ nl: 'Sollicitatiegesprek', en: 'Job interview' }, { nl: 'Competentievragen', en: 'Competency questions' }, { nl: 'Referenties', en: 'References' }]
          },
          {
            type: 'learn', icon: '❓',
            title: 'Common Dutch interview questions',
            body: 'Prepare answers for these — they come up in almost every Dutch interview:',
            list: ['"Vertel iets over jezelf" — Tell me about yourself (keep it to 2 minutes)', '"Waarom wil je hier werken?" — Why do you want to work here?', '"Wat zijn je sterke punten?" — What are your strengths?', '"Waar zie je jezelf over 5 jaar?" — Where do you see yourself in 5 years?', '"Heb je nog vragen?" — Do you have any questions?'],
            dutch: [{ nl: 'Sterke punten', en: 'Strengths' }, { nl: 'Verbeterpunten', en: 'Areas for improvement' }, { nl: 'Motivatie', en: 'Motivation' }]
          },
          {
            type: 'learn', icon: '✅',
            title: 'Your 3 best interview tips',
            body: "Based on what works specifically for your situation as a career-starter in the Netherlands:",
            list: ['1. Lead with your Masters — it is a genuine achievement, be proud of it', '2. Frame your gap positively: "I focused on settling in the Netherlands and I am now ready to build my career here"', '3. Show enthusiasm about the Netherlands — Dutch employers love people who genuinely want to be here'],
          },
          {
            type: 'speak',
            instruction: 'Practice "Tell me about yourself" — keep it confident and clear:',
            phrase: "I have a Masters degree in Finance from India. I moved to the Netherlands and I am now ready to build my career here. I am organised, quick to learn, and excited to contribute to your team.",
            phraseNl: 'Ik heb een master in financiën. Ik woon nu in Nederland en ik wil hier mijn carrière opbouwen.',
            lang: 'en-US'
          },
          {
            type: 'quiz',
            question: 'The interviewer asks "Heb je nog vragen?" at the end. What should you do?',
            options: ['Say "No thank you, I think I have all the information"', 'Ask 2-3 thoughtful questions about the role or team', 'Ask immediately about salary', 'End the meeting quickly'],
            correct: 1,
            feedback: 'Always have 2-3 questions ready! Good ones: "What does success look like in this role?" or "How is the team structured?" It shows you are genuinely interested.'
          },
          {
            type: 'complete', xp: 40,
            ariaMsg: "You are interview-ready! You know what Dutch interviewers ask, how to introduce yourself confidently, and how to handle your career gap. You have a Masters degree, real intelligence, and genuine motivation. Any employer would be lucky to have you. Go get it!"
          }
        ]
      }
    ]
  }
];
