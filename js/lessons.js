// All module + lesson content
const APP_VERSION = '2.0.0';

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
            body: 'Every computer has a power button. On a laptop it is usually at the top-right of the keyboard. Press it once - do NOT hold it.',
            dutch: [{ nl: 'Aan/uit-knop', en: 'Power button' }, { nl: 'Opstarten', en: 'Start up' }]
          },
          {
            type: 'aria',
            text: "Before we start, I want to say something important. You might feel like everyone else knows this already. They don't. Everyone learned this for the first time at some point. Today is your turn - and you are going to do brilliantly."
          },
          {
            type: 'learn', icon: '🔐',
            title: 'Logging In',
            body: 'When Windows starts, it shows a login screen. Click your name, then type your password. Press Enter.',
            list: ['Type carefully - passwords are case-sensitive (A ≠ a)', 'Click the eye icon 👁 to see what you typed', 'Press Win+L to lock the screen when you step away'],
            dutch: [{ nl: 'Inloggen', en: 'Log in' }, { nl: 'Wachtwoord', en: 'Password' }, { nl: 'Scherm vergrendelen', en: 'Lock screen' }]
          },
          {
            type: 'learn', icon: '⚡',
            title: 'Sleep vs Shut Down',
            body: 'There is a difference - and it matters at work!',
            list: ['Sleep (Slaapstand) - quick pause, uses a little power', 'Shut down (Afsluiten) - fully off, saves power', 'Restart (Opnieuw opstarten) - fixes many problems', 'NEVER just pull the plug - you can lose your work'],
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
            instruction: 'Say this out loud - Aria will say it first, then you repeat:',
            phrase: 'I need to restart the computer',
            phraseNl: 'Ik moet de computer opnieuw opstarten',
            lang: 'en-US'
          },
          {
            type: 'complete', xp: 20,
            ariaMsg: "You just finished your first lesson! You now know how to start, log in, lock and shut down a Windows computer. That's a real skill - and you've already got it. Next up: mouse and keyboard!"
          }
        ]
      },
      {
        title: 'Mouse, keyboard & essential shortcuts',
        time: '5 min',
        steps: [
          {
            type: 'learn', icon: '🖱️',
            title: 'The Mouse - 3 things to know',
            body: 'A mouse has left click, right click, and a scroll wheel. Each does something different.',
            list: ['Left click - select something or open it', 'Right click - opens a menu with options', 'Scroll wheel - scroll up and down a page'],
            dutch: [{ nl: 'Klikken', en: 'Click' }, { nl: 'Rechtermuisknop', en: 'Right-click' }, { nl: 'Scrollen', en: 'Scroll' }]
          },
          {
            type: 'learn', icon: '⌨️',
            title: '5 Shortcuts that save you every day',
            body: 'These 5 shortcuts work in almost every program. Learn them and your colleagues will be impressed.',
            list: ['Ctrl+C - Copy (Kopiëren)', 'Ctrl+V - Paste (Plakken)', 'Ctrl+Z - Undo (Ongedaan maken) ← your best friend!', 'Ctrl+S - Save (Opslaan)', 'Ctrl+A - Select All (Alles selecteren)'],
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
            feedback: 'Ctrl+Z - Ongedaan maken - undoes your last action. Press it multiple times to go back further.'
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
            instruction: 'Practice saying this - you might need to say it at work:',
            phrase: 'Can you show me how to do that on the keyboard?',
            phraseNl: 'Kunt u mij laten zien hoe ik dat op het toetsenbord doe?',
            lang: 'en-US'
          },
          {
            type: 'complete', xp: 20,
            ariaMsg: "Mouse and keyboard - done! You now know the 5 shortcuts that professional office workers use every single day. You are already ahead of many people who have been working for years and never learned these."
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
            list: ['Icons on desktop = shortcuts, not the actual files', 'Desktop should be tidy - do NOT save everything here', 'Right-click empty space → New → to create something'],
            dutch: [{ nl: 'Bureaublad', en: 'Desktop' }, { nl: 'Pictogram', en: 'Icon' }, { nl: 'Snelkoppeling', en: 'Shortcut' }]
          },
          {
            type: 'learn', icon: '📌',
            title: 'The Taskbar - your control centre',
            body: 'The bar at the bottom of the screen. It shows open programs and pinned shortcuts.',
            list: ['Click a program on the taskbar to switch to it', 'Right-click a program → Pin to taskbar', 'Bottom-right corner: WiFi, sound, clock, battery'],
            dutch: [{ nl: 'Taakbalk', en: 'Taskbar' }, { nl: 'Vastmaken', en: 'Pin to taskbar' }, { nl: 'Meldingen', en: 'Notifications' }]
          },
          {
            type: 'learn', icon: '🔍',
            title: 'Search - the fastest way to find anything',
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
            feedback: 'Press ⊞ Win and type the name of any program - it appears instantly. This is what fast workers do!'
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
            list: ['File (Bestand) - your document, spreadsheet, photo', 'Folder (Map) - container to organise files', 'File Explorer (Verkenner) - the app to manage them all'],
            dutch: [{ nl: 'Bestand', en: 'File' }, { nl: 'Map', en: 'Folder' }, { nl: 'Verkenner', en: 'File Explorer' }, { nl: 'Prullenbak', en: 'Recycle bin' }]
          },
          {
            type: 'learn', icon: '💾',
            title: 'Saving - do it constantly!',
            body: 'Press Ctrl+S every few minutes while working. Get into this habit on day one.',
            list: ['Ctrl+S - Save (Opslaan)', 'Ctrl+Shift+S or File → Save As - save with a new name', 'OneDrive files save automatically - AutoSave ON at the top'],
            dutch: [{ nl: 'Opslaan', en: 'Save' }, { nl: 'Opslaan als', en: 'Save as' }, { nl: 'Automatisch opslaan', en: 'AutoSave' }]
          },
          {
            type: 'learn', icon: '🗂️',
            title: 'Where to save at work',
            body: 'At a Dutch company you will usually be told where to save. Common places:',
            list: ['Documents (Documenten) - your personal files', 'OneDrive - your cloud files, accessible anywhere', 'SharePoint - shared team files colleagues can also access', 'USB stick - avoid, companies prefer cloud storage'],
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
            feedback: 'Ctrl+S saves your file. Make it a habit - press Ctrl+S every few minutes. In Dutch: Opslaan.'
          },
          {
            type: 'complete', xp: 25,
            ariaMsg: "Files, folders, saving - you've got it! At work, the first thing you should do when starting a document is save it with a proper name. Then Ctrl+S every few minutes. This habit will make you look so professional."
          }
        ]
      },
      {
        title: '🔧 Windows Troubleshooting',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "Things go wrong with computers - even for experts. What matters is staying calm and knowing what to try. After this lesson, when something breaks, you will know exactly what to do."
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
            list: ['Wait 30 seconds - it may fix itself', 'Alt+F4 to force-close the frozen program', 'If nothing works: hold the power button 5 seconds', 'Then start again normally'],
            dutch: [{ nl: 'Reageert niet', en: 'Not responding' }, { nl: 'Geforceerd sluiten', en: 'Force close' }]
          },
          {
            type: 'learn', icon: '📶',
            title: 'WiFi not working',
            body: 'Check these things in order:',
            list: ['Look at WiFi icon in taskbar - is it connected?', 'Click WiFi icon → disconnect → reconnect', 'Turn WiFi off and on again', 'Still not working → tell IT (Helpdesk)'],
            dutch: [{ nl: 'Wifi-verbinding', en: 'WiFi connection' }, { nl: 'Verbinden', en: 'Connect' }, { nl: 'Verbreken', en: 'Disconnect' }]
          },
          {
            type: 'quiz',
            question: 'Your screen is completely frozen. What do you do?',
            options: ['Immediately call IT', 'Pull out the power cable', 'Wait 30 sec, try Alt+F4, then hold power button if needed', 'Press Ctrl+Z'],
            correct: 2,
            feedback: 'Wait first - it may recover. Then Alt+F4 to close the frozen app. Hold the power button only as a last resort.'
          },
          {
            type: 'quiz',
            question: 'Which tool shows which programs are making your computer slow?',
            options: ['File Explorer (Verkenner)', 'Task Manager - Ctrl+Shift+Esc', 'Settings (Instellingen)', 'Recycle Bin (Prullenbak)'],
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
            ariaMsg: "You now know what to do when your computer has problems. At work, staying calm and following these steps will make you look completely professional. Your colleagues will be impressed that you don't panic - you just fix it!"
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
            list: ['Word opens with a Start screen - choose Blank document', 'Or choose a template for letters, CVs, reports', 'The document area is the white space in the middle'],
            dutch: [{ nl: 'Leeg document', en: 'Blank document' }, { nl: 'Sjabloon', en: 'Template' }, { nl: 'Lint', en: 'Ribbon (toolbar)' }]
          },
          {
            type: 'learn', icon: '💾',
            title: 'Saving your document - most important step!',
            body: 'Save your document FIRST before you start typing. Give it a clear name.',
            list: ['Ctrl+S - Save (Opslaan)', 'First time saving: choose where and give a filename', 'Use a clear name: "Report_June2026" not "document1"', 'AutoSave appears if using OneDrive - keep it ON (blue)'],
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
            options: ['Click the X to close immediately', 'Press Ctrl+S to save, then close', 'Press Ctrl+P to print it', 'Nothing - it saves automatically'],
            correct: 1,
            feedback: 'Always Ctrl+S before closing! Even with AutoSave on, manually saving is a good habit.'
          },
          {
            type: 'complete', xp: 20,
            ariaMsg: "Opening and saving Word - done! You know the most important habit: save early, save often. This protects all your work."
          }
        ]
      },
      {
        title: 'Formatting text to look professional',
        time: '5 min',
        steps: [
          {
            type: 'learn', icon: '✍️',
            title: 'The Ribbon - your formatting toolbox',
            body: 'At the top of Word is the Ribbon (Lint). The Home tab has all the most-used formatting tools.',
            list: ['Bold (Vet) - Ctrl+B - makes text thick and strong', 'Italic (Cursief) - Ctrl+I - slants the text', 'Underline (Onderstrepen) - Ctrl+U - draws a line under', 'Font size - change the number to make text bigger/smaller'],
            dutch: [{ nl: 'Vet', en: 'Bold' }, { nl: 'Cursief', en: 'Italic' }, { nl: 'Onderstrepen', en: 'Underline' }, { nl: 'Lettertype', en: 'Font' }, { nl: 'Tekengrootte', en: 'Font size' }]
          },
          {
            type: 'learn', icon: '📐',
            title: 'Alignment and line spacing',
            body: 'Professional documents use consistent alignment and spacing.',
            list: ['Left align (Links uitlijnen) - standard for most text', 'Centre (Centreren) - for headings or titles', 'Right align (Rechts uitlijnen) - for dates', 'Line spacing 1.15 or 1.5 is easy to read'],
            dutch: [{ nl: 'Links uitlijnen', en: 'Left align' }, { nl: 'Centreren', en: 'Center' }, { nl: 'Regelafstand', en: 'Line spacing' }]
          },
          {
            type: 'exercise',
            title: '💻 Practice on your laptop!',
            task: "Open a new Word document. Type your full name centred, Bold, font size 20. Below it type today's date right-aligned. Below that type a sentence about yourself. Save and take a screenshot.",
            screenshotTask: 'Upload your screenshot showing the formatted document.',
            checkDescription: 'Screenshot shows a Word document with formatted text - bold centered title, date, and body text'
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
            ariaMsg: "You can now format text professionally! Bold headings, proper alignment, correct font size - these small things make your documents look polished."
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
            list: ['Home tab → click the bullet icon (•) to start a bullet list', 'Home tab → click the number icon (1.) for a numbered list', 'Press Enter after each item - it adds the next bullet/number automatically', 'Press Tab to indent to a sub-level', 'Press Backspace on empty bullet to exit the list'],
            dutch: [{ nl: 'Opsommingsteken', en: 'Bullet point' }, { nl: 'Genummerde lijst', en: 'Numbered list' }, { nl: 'Inspringing', en: 'Indentation' }]
          },
          {
            type: 'learn', icon: '📊',
            title: 'Tables - organising data neatly',
            body: 'Tables are perfect for comparing things, schedules, or any organised information.',
            list: ['Insert tab → Table → drag to choose how many rows and columns', 'Click inside a cell and type', 'Tab key moves to the next cell (right or new row at the end)', 'Right-click a cell → Insert Row or Insert Column to add more'],
            dutch: [{ nl: 'Tabel', en: 'Table' }, { nl: 'Rij', en: 'Row' }, { nl: 'Kolom', en: 'Column' }, { nl: 'Cel', en: 'Cell' }]
          },
          {
            type: 'quiz',
            question: 'You are writing step-by-step instructions. Which format is best?',
            options: ['Just long paragraphs', 'Bullet points', 'A numbered list', 'Bold text only'],
            correct: 2,
            feedback: 'A numbered list is perfect for step-by-step instructions - it shows the order clearly. Bullet points are better for unordered lists.'
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
            ariaMsg: "Bullet lists and tables - professional document skills! Dutch workplaces love structured documents. You now write documents that are a pleasure to read."
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
            list: ['Ctrl+P - opens the Print dialog (Afdrukken)', 'Choose your printer from the dropdown', 'Set the number of copies (Exemplaren)', 'Click Print (Afdrukken) or Cancel to go back'],
            dutch: [{ nl: 'Afdrukken', en: 'Print' }, { nl: 'Printer', en: 'Printer (same)' }, { nl: 'Exemplaren', en: 'Copies' }, { nl: 'Annuleren', en: 'Cancel' }]
          },
          {
            type: 'learn', icon: '📄',
            title: 'Saving as PDF - the professional format',
            body: 'Always send documents as PDF, not Word. PDF looks the same on every computer and cannot be accidentally edited.',
            list: ['File → Save As → change "Word Document" to "PDF"', 'Or: File → Export → Create PDF/XPS', 'Name your PDF clearly: "CV_Chhaya_June2026.pdf"', 'A PDF opened in the browser or Adobe Reader is perfect for emailing'],
            dutch: [{ nl: 'PDF-bestand', en: 'PDF file' }, { nl: 'Exporteren', en: 'Export' }, { nl: 'Bijlage', en: 'Attachment (email)' }]
          },
          {
            type: 'aria',
            text: "Always send your CV as a PDF, never as a Word document. A Word file can look different on the employer's computer - fonts change, layout breaks. A PDF always looks exactly as you intended. This is one of those things that makes you look professional instantly."
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
            ariaMsg: "Printing and PDF - you've got it! Saving as PDF before sending is one of those small things that immediately tells employers and colleagues you know what you are doing."
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
        title: 'Your first day - what to expect',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "First days are nerve-wracking for everyone. Even people who have worked for 20 years feel nervous on a first day. What I'm going to tell you will make you feel SO much more prepared than most new starters."
          },
          {
            type: 'learn', icon: '⏰',
            title: 'Punctuality - the most important rule',
            body: 'In the Netherlands, being on time means arriving 5 minutes early. Not 10 minutes late like many cultures accept.',
            list: ['Arrive 5 minutes before your start time', 'Being late - even by 5 minutes - is noticed', 'If you are running late: call or message immediately', 'Plan your route the day before using the NS app'],
            dutch: [{ nl: 'Op tijd', en: 'On time' }, { nl: 'Te laat', en: 'Late' }, { nl: 'Stipt', en: 'Punctual' }]
          },
          {
            type: 'learn', icon: '👋',
            title: 'Introducing yourself',
            body: 'Dutch introductions are short and direct - not long and formal like in India.',
            list: ['Say your first name and a one-line background', '"Hi, I\'m Chhaya. I\'m the new assistant."', 'Shake hands firmly - one shake, not multiple', 'Dutch people use first names immediately - even with the director'],
            dutch: [{ nl: 'Aangenaam', en: 'Pleased to meet you' }, { nl: 'Mijn naam is...', en: 'My name is...' }, { nl: 'Ik ben nieuw hier', en: 'I am new here' }]
          },
          {
            type: 'learn', icon: '🏢',
            title: 'What you will receive on day one',
            body: 'Keep these safe!',
            list: ['Toegangspas (access card) - gets you through security doors', 'Laptop or PC - do not install personal software', 'Email address and login - set up right away', 'Begeleider (buddy) - your go-to person for questions'],
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
            options: ['9:15 - a little late is fine', '9:00 exactly', '8:55 - five minutes early', '9:30 - Dutch people are relaxed'],
            correct: 2,
            feedback: '8:55 is perfect in the Netherlands. Being on time is taken seriously and shows professionalism.'
          },
          {
            type: 'quiz',
            question: 'Your Dutch manager introduces herself as "Sandra". How do you address her?',
            options: ['Mevrouw [surname]', 'Ma\'am', 'Sandra', 'Ms Sandra'],
            correct: 2,
            feedback: 'In the Netherlands, everyone uses first names - even with managers. This is normal, not rude.'
          },
          {
            type: 'complete', xp: 30,
            ariaMsg: "You are SO ready for your first day. Arrive 5 minutes early, introduce yourself with your name, use first names - you will walk in with confidence!"
          }
        ]
      },
      {
        title: 'Dutch directness - understanding the culture',
        time: '4 min',
        steps: [
          {
            type: 'aria',
            text: "This lesson might be the most important one in the whole app. Understanding Dutch directness will change how you see every conversation at work."
          },
          {
            type: 'learn', icon: '🎯',
            title: 'Dutch people say exactly what they mean',
            body: 'In the Netherlands, directness is a sign of respect - not rudeness.',
            list: ['"That report has a mistake" = helpful, honest feedback', '"I disagree" in a meeting = normal healthy discussion', 'Saying NO is completely acceptable and respected', 'Silence is comfortable - no need to fill it with small talk'],
            dutch: [{ nl: 'Direct', en: 'Direct' }, { nl: 'Eerlijk', en: 'Honest' }, { nl: 'Constructieve kritiek', en: 'Constructive criticism' }]
          },
          {
            type: 'learn', icon: '🤝',
            title: 'How to respond to direct feedback',
            body: 'When a Dutch colleague gives you direct feedback:',
            list: ['Stay calm - it is not personal', 'Say "Dank je" (thank you) and listen', 'Ask "Can you tell me more?" to understand better', 'Do NOT over-apologise - it makes you seem unsure', 'Do NOT take it home as a personal attack'],
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
        title: 'Meetings - Dutch style',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "Dutch meetings are very different from what you might expect. They are structured, everyone speaks, and decisions are made together. Knowing this will help you feel confident - not invisible - in your first meetings."
          },
          {
            type: 'learn', icon: '📅',
            title: 'How Dutch meetings work',
            body: 'Dutch meetings follow a clear structure and have a strong culture of participation.',
            list: ['Meetings start on time - be seated before the start', 'An agenda (agenda) is usually shared in advance', 'Everyone is expected to contribute - silence = no opinion', 'Decisions are often made by consensus (poldermodel)', 'Meetings end with clear action points - who does what by when'],
            dutch: [{ nl: 'Vergadering', en: 'Meeting' }, { nl: 'Agenda', en: 'Agenda (same word)' }, { nl: 'Notulen', en: 'Meeting notes/minutes' }, { nl: 'Actiepunten', en: 'Action points' }]
          },
          {
            type: 'learn', icon: '🗣️',
            title: 'Speaking up in meetings',
            body: 'In the Netherlands, your opinion is expected and valued. Staying quiet looks like you have nothing to contribute.',
            list: ['"Ik heb een vraag" - I have a question (say this!)', '"Mag ik iets toevoegen?" - May I add something?', '"Ik ben het ermee eens" - I agree', '"Ik zie dat anders" - I see that differently (polite disagreement)', 'Ask questions - it shows you are engaged, not confused'],
            dutch: [{ nl: 'Ik heb een vraag', en: 'I have a question' }, { nl: 'Ik ben het ermee eens', en: 'I agree' }, { nl: 'Mag ik iets toevoegen?', en: 'May I add something?' }]
          },
          {
            type: 'learn', icon: '☕',
            title: 'Coffee & small talk before meetings',
            body: 'Dutch meetings often start with 5 minutes of koffie (coffee) and small talk. This is important - it builds relationships.',
            list: ['Talk about the weather (Dutch favourite topic!)', 'Ask about the weekend: "Had je een fijn weekend?"', 'Sport, cycling, cycling, cycling - Dutch people love cycling', 'Keep it light - avoid politics or religion'],
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
            ariaMsg: "You now know how Dutch meetings work and how to participate confidently! Speaking up, asking questions, and contributing - these are skills that will get you noticed in a very positive way."
          }
        ]
      },
      {
        title: 'Office structure - departments & hierarchy',
        time: '5 min',
        steps: [
          {
            type: 'learn', icon: '🏛️',
            title: 'How a company is organised',
            body: 'Almost every company has the same basic structure. Knowing this helps you understand who does what.',
            list: ['Directie (Board/Directors) - top leadership, makes big decisions', 'Management (Management) - runs departments, reports to directors', 'Team leads (Teamleiders) - manage small teams day to day', 'Medewerkers (Employees) - the people doing the day-to-day work'],
            dutch: [{ nl: 'Directie', en: 'Board / Directors' }, { nl: 'Afdeling', en: 'Department' }, { nl: 'Teamleider', en: 'Team lead' }, { nl: 'Medewerker', en: 'Employee / Colleague' }]
          },
          {
            type: 'learn', icon: '🗂️',
            title: 'Common departments you will encounter',
            body: 'Here are the departments you will find in most Dutch companies:',
            list: ['HR (Human Resources / Personeelszaken) - hiring, contracts, leave', 'Finance (Financiën) - budgets, invoices, payments', 'IT (Automatisering/IT) - computers, systems, helpdesk', 'Admin (Administratie) - planning, organising, support', 'Sales (Verkoop) - finding and managing clients', 'Marketing - branding, advertising, social media'],
            dutch: [{ nl: 'Personeelszaken', en: 'HR / Human Resources' }, { nl: 'Financiën', en: 'Finance' }, { nl: 'Administratie', en: 'Administration' }, { nl: 'Verkoop', en: 'Sales' }]
          },
          {
            type: 'learn', icon: '💼',
            title: 'Common job titles in Dutch',
            body: 'You will see these on email signatures, business cards, and job listings.',
            list: ['Directeur / CEO - Director / Chief Executive Officer', 'Manager - Manager (same word)', 'Medewerker - Staff member / Employee', 'Stagiaire - Intern', 'Zzp\'er - Self-employed / Freelancer', 'Parttime / Fulltime - Part-time / Full-time'],
            dutch: [{ nl: 'Directeur', en: 'Director' }, { nl: 'Stagiaire', en: 'Intern' }, { nl: 'Zzp\'er', en: 'Freelancer' }, { nl: 'Parttime', en: 'Part-time' }]
          },
          {
            type: 'quiz',
            question: 'You have a question about your holiday leave. Which department do you contact?',
            options: ['Finance (Financiën)', 'HR (Personeelszaken)', 'IT (Automatisering)', 'Sales (Verkoop)'],
            correct: 1,
            feedback: 'HR (Personeelszaken) handles all employee matters - leave, contracts, onboarding, and benefits. They are your first contact for personal work matters.'
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
            ariaMsg: "You now understand how Dutch companies are organised! Knowing who does what - and what to call them - will help you navigate any workplace with confidence from day one."
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
            title: 'Daily greetings - say them out loud',
            body: 'These are the phrases you will use every morning and evening at work.',
            list: ['Goedemorgen - Good morning', 'Goedemiddag - Good afternoon', 'Goedenavond - Good evening', 'Hoi / Hallo - Hi / Hello (casual)', 'Tot ziens - Goodbye', 'Tot morgen - See you tomorrow', 'Fijn weekend! - Have a nice weekend!'],
            dutch: [{ nl: 'Goedemorgen', en: 'Good morning' }, { nl: 'Goedemiddag', en: 'Good afternoon' }, { nl: 'Fijn weekend!', en: 'Have a nice weekend!' }, { nl: 'Tot morgen', en: 'See you tomorrow' }]
          },
          {
            type: 'speak',
            instruction: 'Aria says it first - you repeat:',
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
            feedback: '"Fijn weekend!" is what everyone says on Friday - a lovely Dutch habit your colleagues will love hearing!'
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
            text: "One of the bravest things you can do in a new job is ask for help. In Dutch culture, asking questions is seen as smart and proactive - not weak. Let's learn exactly how to ask."
          },
          {
            type: 'learn', icon: '🙋',
            title: 'Asking for help at work',
            body: 'These phrases will get you through your first weeks at any Dutch company.',
            list: ['Kunt u mij helpen? - Can you help me?', 'Ik begrijp het niet - I do not understand', 'Kunt u dat herhalen? - Can you repeat that?', 'Spreekt u Engels? - Do you speak English?', 'Wat betekent dat? - What does that mean?', 'Mag ik een vraag stellen? - May I ask a question?'],
            dutch: [{ nl: 'Kunt u mij helpen?', en: 'Can you help me?' }, { nl: 'Ik begrijp het niet', en: 'I do not understand' }, { nl: 'Kunt u dat herhalen?', en: 'Can you repeat that?' }, { nl: 'Wat betekent dat?', en: 'What does that mean?' }]
          },
          {
            type: 'learn', icon: '📞',
            title: 'On the phone and in email',
            body: 'Some basic phrases for professional communication.',
            list: ['Met [naam] - This is [name] (when answering phone)', 'Ik bel voor... - I am calling about...', 'Kunt u mij doorverbinden met...? - Can you connect me to...?', 'Ik stuur u een e-mail - I will send you an email', 'In afwachting van uw reactie - Looking forward to your reply'],
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
            instruction: 'Now try it in Dutch - Aria will say it slowly:',
            phrase: 'Kunt u mij helpen? Ik begrijp het niet.',
            phraseNl: 'Can you help me? I do not understand.',
            lang: 'nl-NL'
          },
          {
            type: 'quiz',
            question: 'A colleague is speaking Dutch and you didn\'t catch it. What do you say?',
            options: ['Just nod and pretend you understood', 'Kunt u dat herhalen? (Can you repeat that?)', 'Leave the conversation', 'Speak very loudly in English'],
            correct: 1,
            feedback: '"Kunt u dat herhalen?" is polite and professional. Dutch people will always repeat for you - they appreciate you trying!'
          },
          {
            type: 'complete', xp: 25,
            ariaMsg: "You now have the phrases to navigate almost any situation at a Dutch workplace! Asking for help in Dutch - even just trying - will earn you so much respect and goodwill."
          }
        ]
      },
      {
        title: 'Small talk - the Dutch way',
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
            list: ['Het weer (the weather) - always safe! "Wat een mooi weer vandaag!"', 'Fietsen (cycling) - almost everyone cycles to work', 'Vakanties (holidays) - "Waar ga jij op vakantie?" is very common', 'Sport - especially voetbal (football) and wielrennen (cycling)', 'De trein (the train) - delays are a national topic!'],
            dutch: [{ nl: 'Wat een mooi weer!', en: 'What lovely weather!' }, { nl: 'Het regent', en: 'It is raining' }, { nl: 'Ga je met de fiets?', en: 'Are you cycling?' }, { nl: 'Heb je fijn weekend gehad?', en: 'Did you have a nice weekend?' }]
          },
          {
            type: 'learn', icon: '🚫',
            title: 'What NOT to talk about',
            body: 'Dutch people are private about some things - especially at work.',
            list: ['Money - never ask salaries or costs (very private)', 'Religion or politics - avoid completely at work', 'How much someone paid for their house', 'Personal questions about relationships on first meetings', 'Keep it positive and light - Dutch people dislike complaining'],
          },
          {
            type: 'speak',
            instruction: 'Start a Monday morning conversation - say this to a colleague:',
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
            ariaMsg: "Small talk mastered! The weather, cycling, and weekends - you now have everything you need to chat with Dutch colleagues over coffee. These conversations build real friendships over time."
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
        title: 'Dutch CV - what is different from India',
        time: '6 min',
        steps: [
          {
            type: 'aria',
            text: "Your Masters degree is valuable. Your life experience is valuable. I want you to walk into this job search knowing that. Today we learn how the Dutch CV format works - knowing this gives you a huge advantage."
          },
          {
            type: 'learn', icon: '📄',
            title: 'Dutch CV - key differences',
            body: 'Dutch employers have very specific expectations. Following these rules shows you understand the culture.',
            list: ['Maximum 1-2 pages - NOT 5 pages like India', 'NO photo, NO date of birth, NO marital status (Dutch law)', 'Start with a short personal profile (3-4 lines about you)', 'List education first if it is your strongest point', 'Skills: include Word, Excel, Teams, Dutch language level'],
            dutch: [{ nl: 'Curriculum vitae (CV)', en: 'Resume / CV' }, { nl: 'Persoonlijk profiel', en: 'Personal profile' }, { nl: 'Werkervaring', en: 'Work experience' }, { nl: 'Opleiding', en: 'Education' }]
          },
          {
            type: 'learn', icon: '✍️',
            title: 'Your personal profile',
            body: 'This is the first thing employers read. Make it count.',
            list: ['"Motivated professional with a Masters in Finance, looking to build a career in the Netherlands."', 'Mention your strongest skills: analytical, organised, quick learner', 'Mention language: "Currently learning Dutch (A2 level)"', 'Keep it 3-4 sentences - Dutch employers value brevity'],
          },
          {
            type: 'learn', icon: '💪',
            title: 'Addressing the career gap positively',
            body: 'Many applicants are afraid of gaps. In the Netherlands, gaps are normal - you just explain briefly.',
            list: ['"2013-2026: Relocated to Netherlands, focused on family and language learning"', 'Focus on what you learned during this time', 'Your Masters is still valid - finance knowledge does not expire', 'Dutch companies value diversity and life experience'],
            dutch: [{ nl: 'Loopbaanonderbreking', en: 'Career gap' }, { nl: 'Herscholing', en: 'Retraining' }]
          },
          {
            type: 'quiz',
            question: 'Should you include your photo on a Dutch CV?',
            options: ['Yes, always', 'No - Dutch law and norms say no photo', 'Only if you look professional', 'Only for senior positions'],
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
            ariaMsg: "You now know how to write a Dutch CV better than most applicants! Clear personal profile, no photo, honest about your gap, your Masters highlighted - this is a strong application."
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
            list: ['LinkedIn - most important! 80% of Dutch professionals are on it', 'Indeed.nl - largest general job board in the Netherlands', 'Nationale Vacaturebank (NVB) - popular Dutch job site', 'Werk.nl - free government platform (also for benefits info)', 'Intermediair.nl - professional/management roles', 'Undutchables.nl - jobs specifically for internationals/expats'],
            dutch: [{ nl: 'Vacature', en: 'Job vacancy' }, { nl: 'Solliciteren', en: 'Apply (for a job)' }, { nl: 'Uitzendbureau', en: 'Employment agency / temp agency' }]
          },
          {
            type: 'learn', icon: '🤝',
            title: 'LinkedIn - your most important tool',
            body: 'LinkedIn is not optional in the Netherlands - it is how the Dutch professional world works.',
            list: ['Create a complete profile - photo (different from CV!), summary, experience', 'Connect with everyone you meet professionally', '"Open to Work" feature - let recruiters find you', 'Follow companies you want to work for', 'Post occasionally - even liking posts makes you visible', 'Message recruiters directly - Dutch people respond well to this'],
            dutch: [{ nl: 'Netwerken', en: 'Networking' }, { nl: 'Recruiter', en: 'Recruiter (same word)' }, { nl: 'Aanbeveling', en: 'Recommendation/Reference' }]
          },
          {
            type: 'learn', icon: '🏢',
            title: 'Uitzendbureaus - temp agencies',
            body: 'Temp agencies are very popular in the Netherlands and are a great way to start working quickly.',
            list: ['Randstad - largest agency in the Netherlands', 'Adecco, Manpower, USG People - other major agencies', 'Register in person or online - bring your BSN number', 'Temp work often leads to permanent contracts', 'Great for building Dutch work experience on your CV'],
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
            ariaMsg: "You now know exactly where to look for work in the Netherlands - and LinkedIn is your most powerful tool. Make sure your profile is complete and your connections are growing every week!"
          }
        ]
      },
      {
        title: 'The Dutch job interview',
        time: '6 min',
        steps: [
          {
            type: 'aria',
            text: "You've applied, they liked your CV - now comes the interview! Dutch interviews are friendly but structured. Knowing what to expect will let you walk in feeling calm, prepared, and confident. Let's get you ready."
          },
          {
            type: 'learn', icon: '🎯',
            title: 'What Dutch interviews are like',
            body: 'Dutch interviews are conversational, not intimidating. They want to find out if you are a good fit.',
            list: ['Usually 45-60 minutes, often with 2 interviewers', 'Very conversational - more like a discussion than an exam', 'Competency-based questions: "Tell me about a time when..."', 'They will ask if you have questions - always have 2-3 ready', 'Dress smart but not over-formal - smart casual is fine in most companies'],
            dutch: [{ nl: 'Sollicitatiegesprek', en: 'Job interview' }, { nl: 'Competentievragen', en: 'Competency questions' }, { nl: 'Referenties', en: 'References' }]
          },
          {
            type: 'learn', icon: '❓',
            title: 'Common Dutch interview questions',
            body: 'Prepare answers for these - they come up in almost every Dutch interview:',
            list: ['"Vertel iets over jezelf" - Tell me about yourself (keep it to 2 minutes)', '"Waarom wil je hier werken?" - Why do you want to work here?', '"Wat zijn je sterke punten?" - What are your strengths?', '"Waar zie je jezelf over 5 jaar?" - Where do you see yourself in 5 years?', '"Heb je nog vragen?" - Do you have any questions?'],
            dutch: [{ nl: 'Sterke punten', en: 'Strengths' }, { nl: 'Verbeterpunten', en: 'Areas for improvement' }, { nl: 'Motivatie', en: 'Motivation' }]
          },
          {
            type: 'learn', icon: '✅',
            title: 'Your 3 best interview tips',
            body: "Based on what works specifically for your situation as a career-starter in the Netherlands:",
            list: ['1. Lead with your Masters - it is a genuine achievement, be proud of it', '2. Frame your gap positively: "I focused on settling in the Netherlands and I am now ready to build my career here"', '3. Show enthusiasm about the Netherlands - Dutch employers love people who genuinely want to be here'],
          },
          {
            type: 'speak',
            instruction: 'Practice "Tell me about yourself" - keep it confident and clear:',
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
  },

  // ═══════════════════════════════════════════
  //  6. MICROSOFT OUTLOOK
  // ═══════════════════════════════════════════
  {
    id: 'outlook',
    icon: '📧',
    name: 'Microsoft Outlook',
    phase: 'Office',
    color: '#0078d4',
    lessons: [
      {
        title: 'Reading, organising and managing emails',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "Email is how Dutch offices communicate. Your inbox will be busy from day one. I am going to show you how to read, organise and manage it so you always look on top of things - never overwhelmed."
          },
          {
            type: 'learn', icon: '📬',
            title: 'The Outlook layout',
            body: 'Outlook has three main panels. Once you know what each does, everything makes sense.',
            list: [
              'Left panel: your folders - Inbox, Sent, Drafts, Deleted',
              'Middle panel: list of emails in the selected folder',
              'Right panel: the content of the selected email',
              'At the top: the Ribbon with all your tools'
            ],
            dutch: [{ nl: 'Postvak IN', en: 'Inbox' }, { nl: 'Verzonden items', en: 'Sent items' }, { nl: 'Concepten', en: 'Drafts' }, { nl: 'Verwijderde items', en: 'Deleted items' }]
          },
          {
            type: 'learn', icon: '📁',
            title: 'Keeping your inbox organised',
            body: 'A messy inbox makes you look disorganised. Here is the professional system.',
            list: [
              'Create folders for each project or topic (right-click Inbox → New Folder)',
              'Drag emails into folders once you have dealt with them',
              'Mark important emails with a flag (right-click → Flag)',
              'Use Ctrl+F to search for any email instantly',
              'Delete or archive anything you no longer need'
            ],
            dutch: [{ nl: 'Map', en: 'Folder' }, { nl: 'Markeren', en: 'Flag / Mark' }, { nl: 'Zoeken', en: 'Search' }, { nl: 'Archiveren', en: 'Archive' }]
          },
          {
            type: 'learn', icon: '⚡',
            title: 'Essential Outlook shortcuts',
            body: 'These shortcuts will make you fast and professional.',
            list: [
              'Ctrl+N - New email (Nieuw e-mailbericht)',
              'Ctrl+R - Reply (Beantwoorden)',
              'Ctrl+Shift+R - Reply All (Allen beantwoorden)',
              'Ctrl+F - Forward (Doorsturen)',
              'Delete key - Delete selected email',
              'Ctrl+Enter - Send email'
            ],
            dutch: [{ nl: 'Beantwoorden', en: 'Reply' }, { nl: 'Allen beantwoorden', en: 'Reply All' }, { nl: 'Doorsturen', en: 'Forward' }, { nl: 'Verzenden', en: 'Send' }]
          },
          {
            type: 'quiz',
            question: 'You receive an email sent to you AND five colleagues. The reply is relevant to everyone. What do you use?',
            options: ['Reply (Beantwoorden)', 'Reply All (Allen beantwoorden)', 'Forward (Doorsturen)', 'Delete it'],
            correct: 1,
            feedback: 'Reply All sends your reply to everyone on the original email. Use it when your answer is relevant to the whole group. Use Reply when only the sender needs your response.'
          },
          {
            type: 'quiz',
            question: 'You want to find an email from your manager from last month. What is the fastest way?',
            options: ['Scroll through your entire inbox', 'Press Ctrl+F and search by name or subject', 'Check your Sent items', 'Ask your manager to resend it'],
            correct: 1,
            feedback: 'Ctrl+F opens search in Outlook. Type a name, subject, or keyword and find any email in seconds. This skill saves enormous time every day.'
          },
          {
            type: 'complete', xp: 30,
            ariaMsg: "Outlook basics - done! An organised inbox is one of the clearest signs of a professional. Your colleagues and manager will notice how on top of things you always are."
          }
        ]
      },
      {
        title: 'Writing professional emails in English and Dutch',
        time: '6 min',
        steps: [
          {
            type: 'aria',
            text: "Writing a professional email is a skill that opens doors. A well-written email makes you memorable for the right reasons. A poorly written one does the opposite. Let me show you exactly how to write emails that impress Dutch colleagues."
          },
          {
            type: 'learn', icon: '✍️',
            title: 'Structure of a professional email',
            body: 'Every professional email follows the same structure. Once you know this, writing becomes easy.',
            list: [
              '1. Subject line - short and specific: "Meeting request - Thursday 14:00" not "Hi"',
              '2. Opening greeting - "Dear Sandra," or "Hi Mark," (Dutch offices are informal)',
              '3. One sentence saying WHY you are writing',
              '4. The main content - short paragraphs, no walls of text',
              '5. What you need from them (if anything)',
              '6. Closing line: "Kind regards," / "Met vriendelijke groet,"',
              '7. Your name and job title'
            ],
            dutch: [{ nl: 'Onderwerp', en: 'Subject line' }, { nl: 'Geachte mevrouw/meneer', en: 'Dear Ms/Mr (formal)' }, { nl: 'Beste [naam]', en: 'Dear [name] (informal)' }, { nl: 'Met vriendelijke groet', en: 'Kind regards' }]
          },
          {
            type: 'learn', icon: '🇳🇱',
            title: 'Dutch email openings and closings',
            body: 'Even if your email is in English, knowing these Dutch phrases shows professionalism.',
            list: [
              'FORMAL opening: "Geachte mevrouw [surname]," / "Geachte meneer [surname],"',
              'INFORMAL opening: "Beste Sandra," / "Hoi Mark," (most Dutch offices)',
              'FORMAL closing: "Met vriendelijke groet," (Kind regards)',
              'INFORMAL closing: "Groeten," (Greetings) / "Met vriendelijke groeten," ',
              'After the closing: your full name, job title, phone number'
            ],
            dutch: [{ nl: 'Geachte', en: 'Dear (formal)' }, { nl: 'Beste', en: 'Dear (informal)' }, { nl: 'Met vriendelijke groet', en: 'Kind regards' }, { nl: 'Groeten', en: 'Greetings' }]
          },
          {
            type: 'learn', icon: '📝',
            title: 'A real example - English and Dutch',
            body: 'Study this template. You can adapt it for most emails at work.',
            list: [
              'Subject: Question about the team meeting - Tuesday',
              '---',
              'Hi Sandra,',
              'I hope you are well. I have a quick question about Tuesday\'s meeting.',
              'Will we be discussing the budget report? I want to make sure I prepare the right information.',
              'Thank you for your time.',
              'Kind regards,',
              'Chhaya'
            ]
          },
          {
            type: 'speak',
            instruction: 'Practice reading a professional email closing out loud:',
            phrase: 'I look forward to hearing from you. Kind regards, Chhaya.',
            phraseNl: 'Ik zie uw reactie met belangstelling tegemoet. Met vriendelijke groet, Chhaya.',
            lang: 'en-US'
          },
          {
            type: 'quiz',
            question: 'Which is the best subject line for an email asking for a meeting?',
            options: ['Hi!', 'Question', 'Meeting request - Budget review - Friday 10:00', 'Important!!!'],
            correct: 2,
            feedback: 'A good subject line is specific and actionable. The reader knows exactly what it is about before they open it. Dutch professionals appreciate clarity and efficiency.'
          },
          {
            type: 'complete', xp: 35,
            ariaMsg: "Email writing - mastered! The template you just learned will work in almost any situation. Clear subject, short paragraphs, professional closing. You will stand out immediately."
          }
        ]
      },
      {
        title: 'CC, BCC, attachments and email etiquette',
        time: '5 min',
        steps: [
          {
            type: 'learn', icon: '👥',
            title: 'TO, CC and BCC - what is the difference?',
            body: 'This is one of the most misunderstood email features - and getting it right marks you as professional.',
            list: [
              'TO (Aan) - the person you are directly writing to. They must respond or act.',
              'CC (Cc) - people who need to know about the email but do not need to reply. "For your information."',
              'BCC (Bcc) - like CC but the recipient is hidden. Other readers cannot see them. Use carefully.',
              'Rule: Never Reply All to a CC email unless your reply is relevant to all recipients.'
            ],
            dutch: [{ nl: 'Aan', en: 'To' }, { nl: 'CC (Kopie)', en: 'CC - Carbon copy (for info)' }, { nl: 'BCC (Blinde kopie)', en: 'BCC - Blind carbon copy' }]
          },
          {
            type: 'learn', icon: '📎',
            title: 'Attaching files correctly',
            body: 'Sending attachments is an everyday task at work. Do it right every time.',
            list: [
              'Click the paperclip icon (📎) or Insert → Attach File',
              'Find your file and click Insert',
              'Always mention the attachment in the email body: "Please find the report attached."',
              'Send documents as PDF not Word (we learned this!)',
              'Check: did you actually attach it before pressing Send?',
              'Large files: use OneDrive link instead of attachment'
            ],
            dutch: [{ nl: 'Bijlage', en: 'Attachment' }, { nl: 'Bijgevoegd vindt u', en: 'Please find attached' }, { nl: 'Zie bijlage', en: 'See attachment' }]
          },
          {
            type: 'learn', icon: '✅',
            title: 'Dutch email etiquette rules',
            body: 'These unwritten rules matter enormously in Dutch offices.',
            list: [
              'Reply within 24 hours - even if just to say "I received it, I will respond soon"',
              'Keep emails short - Dutch professionals value brevity',
              'One topic per email - easier to file and search',
              'Never use ALL CAPS - it means you are shouting',
              'Proofread before sending - check spelling and tone',
              'Do NOT send work emails after 17:30 - Dutch work-life balance is strict',
              'If an email goes back and forth more than 3 times - pick up the phone'
            ],
            dutch: [{ nl: 'Werktijden', en: 'Working hours' }, { nl: 'Spelfout', en: 'Spelling mistake' }, { nl: 'Reactietijd', en: 'Response time' }]
          },
          {
            type: 'quiz',
            question: 'You are emailing your manager but also want to keep your team informed. What do you use?',
            options: ['Put everyone in the TO field', 'Put manager in TO, team members in CC', 'Send separate emails to everyone', 'Only email the manager'],
            correct: 1,
            feedback: 'Manager in TO (they need to act), team in CC (they need to know). This is standard professional email practice in every Dutch company.'
          },
          {
            type: 'complete', xp: 30,
            ariaMsg: "CC, BCC, attachments, etiquette - you are now a professional email writer! These skills will make you stand out from the very first email you send."
          }
        ]
      },
      {
        title: 'Calendar, meeting invites and scheduling',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "The Outlook calendar is how Dutch offices organise everything. Meetings, deadlines, reminders - all in one place. Knowing how to use it will make you look incredibly organised from day one."
          },
          {
            type: 'learn', icon: '📅',
            title: 'Navigating the Outlook Calendar',
            body: 'The Calendar is in the bottom-left of Outlook. Click the calendar icon to switch to it.',
            list: [
              'Day view - see one day in detail (good for busy days)',
              'Week view - see your full week at a glance (most useful)',
              'Month view - plan ahead and see the big picture',
              'Double-click any time slot to create a new appointment',
              'Your meetings sent by others appear automatically when you accept'
            ],
            dutch: [{ nl: 'Agenda', en: 'Calendar' }, { nl: 'Vergadering', en: 'Meeting' }, { nl: 'Afspraak', en: 'Appointment' }, { nl: 'Herinnering', en: 'Reminder' }]
          },
          {
            type: 'learn', icon: '📨',
            title: 'Accepting and declining meeting invites',
            body: 'When someone invites you to a meeting you get an email invite. Always respond!',
            list: [
              'Open the invite email - you see three buttons: Accept / Tentative / Decline',
              'Accept (Accepteren) - adds it to your calendar automatically',
              'Tentative (Voorlopig) - "I might come" - use when not sure',
              'Decline (Weigeren) - politely say no - always add a brief reason',
              'Always respond within the same day - leaving it hanging is rude in Dutch culture'
            ],
            dutch: [{ nl: 'Accepteren', en: 'Accept' }, { nl: 'Voorlopig', en: 'Tentative' }, { nl: 'Weigeren', en: 'Decline' }, { nl: 'Uitnodiging', en: 'Invitation' }]
          },
          {
            type: 'learn', icon: '➕',
            title: 'Sending a meeting invite',
            body: 'You will need to organise meetings too. Here is how:',
            list: [
              'Click New Meeting (Nieuwe vergadering) in the Calendar',
              'Add names in the To field - they get the invite by email',
              'Set the date, start time and end time',
              'Add a clear Subject: "Weekly team check-in" not just "Meeting"',
              'Add a Teams link or room location in the body',
              'Click Send - everyone gets the invite instantly'
            ],
            dutch: [{ nl: 'Nieuwe vergadering', en: 'New meeting' }, { nl: 'Vergaderruimte', en: 'Meeting room' }, { nl: 'Tijdstip', en: 'Time / Time slot' }]
          },
          {
            type: 'quiz',
            question: 'You receive a meeting invite but you are not sure if you can attend. What do you click?',
            options: ['Accept (Accepteren)', 'Delete the email', 'Tentative (Voorlopig)', 'Do nothing'],
            correct: 2,
            feedback: 'Tentative means "possibly yes" - it adds it to your calendar lightly and lets the organiser know you might come. Always respond to invites - silence is seen as unprofessional in Dutch culture.'
          },
          {
            type: 'speak',
            instruction: 'Practice this phrase for when you need to reschedule:',
            phrase: 'I am sorry, I have a conflict on that day. Can we reschedule to Thursday afternoon?',
            phraseNl: 'Het spijt mij, ik heb een conflict op die dag. Kunnen we het verzetten naar donderdagmiddag?',
            lang: 'en-US'
          },
          {
            type: 'complete', xp: 30,
            ariaMsg: "Calendar and meetings - done! An organised calendar is one of the first things colleagues notice. You will always be on time, always prepared, and always in control of your schedule."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  //  7. MICROSOFT TEAMS
  // ═══════════════════════════════════════════
  {
    id: 'teams',
    icon: '💬',
    name: 'Microsoft Teams',
    phase: 'Office',
    color: '#5b5fc7',
    lessons: [
      {
        title: 'Getting started with Teams',
        time: '4 min',
        steps: [
          {
            type: 'aria',
            text: "Since COVID, Microsoft Teams has become the heart of every Dutch office. Email for formal things, Teams for everything else - quick questions, team chats, video calls, file sharing. Let me show you how it all works."
          },
          {
            type: 'learn', icon: '💬',
            title: 'The Teams layout - 5 sections',
            body: 'Teams has five icons on the left side. Each opens a different part of the app.',
            list: [
              'Activity (Activiteit) - your notifications, mentions, and updates',
              'Chat - direct messages with one person or a small group',
              'Teams - channels where your work teams communicate',
              'Calendar (Agenda) - your meetings and video calls',
              'Files (Bestanden) - all shared documents in one place'
            ],
            dutch: [{ nl: 'Activiteit', en: 'Activity / Notifications' }, { nl: 'Chat', en: 'Chat (same)' }, { nl: 'Teams', en: 'Teams (same)' }, { nl: 'Bestanden', en: 'Files' }]
          },
          {
            type: 'learn', icon: '📢',
            title: 'Teams and Channels - how they are organised',
            body: 'At work, you will be added to Teams (groups) that have Channels (topics) inside them.',
            list: [
              'A Team = your department or project group (e.g. "Finance Team")',
              'A Channel = a topic inside that team (e.g. "General", "Reports", "Planning")',
              'General channel - the main channel, everyone can see it',
              'Post in the right channel so the right people see it',
              'You can be in multiple Teams at the same time'
            ],
            dutch: [{ nl: 'Kanaal', en: 'Channel' }, { nl: 'Bericht', en: 'Message / Post' }, { nl: 'Reactie', en: 'Reply' }, { nl: 'Vermelden', en: 'Mention (@name)' }]
          },
          {
            type: 'quiz',
            question: 'Where in Teams do you post a message for your whole team to see?',
            options: ['In a private Chat', 'In your Team\'s General Channel', 'In the Activity tab', 'In the Files section'],
            correct: 1,
            feedback: 'The General Channel in your Team is where everyone in that group can see and respond. Use private Chat for one-to-one messages.'
          },
          {
            type: 'complete', xp: 25,
            ariaMsg: "Teams layout - done! Once you know where everything lives in Teams, it feels very natural. In your first week at work, Teams will be how you connect with almost everyone."
          }
        ]
      },
      {
        title: 'Chat, messages and staying professional',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "Teams chat is fast and informal - but it is still work. The way you write messages in Teams shapes how your colleagues see you every single day. Let me show you how to communicate professionally without being stiff."
          },
          {
            type: 'learn', icon: '✉️',
            title: 'Sending messages in Teams',
            body: 'Teams messages are more like chat than email - but still professional.',
            list: [
              'Click someone\'s name → Chat to start a private conversation',
              'Type your message in the box at the bottom, press Enter to send',
              'Shift+Enter = new line without sending',
              'Use @name to get someone\'s attention in a channel: "@Sandra can you check this?"',
              'React to messages with emoji (hover over message → smiley face)',
              'Edit or delete your message: hover → three dots → Edit/Delete'
            ],
            dutch: [{ nl: 'Versturen', en: 'Send' }, { nl: 'Bewerken', en: 'Edit' }, { nl: 'Verwijderen', en: 'Delete' }, { nl: 'Vermelden', en: 'Mention (@naam)' }]
          },
          {
            type: 'learn', icon: '🟢',
            title: 'Status settings - tell colleagues when you are available',
            body: 'Your status dot tells colleagues if you can be disturbed. Update it daily.',
            list: [
              'Green dot (Beschikbaar) = Available - you can be contacted',
              'Yellow dot (Bezet) = Busy - in a meeting or focused, prefer not to be disturbed',
              'Red dot (Niet storen) = Do Not Disturb - urgent only',
              'Grey dot (Afwezig) = Away - not at your desk',
              'Click your profile photo (top right) to change status',
              'You can also set a custom status message: "In a meeting until 14:00"'
            ],
            dutch: [{ nl: 'Beschikbaar', en: 'Available' }, { nl: 'Bezet', en: 'Busy' }, { nl: 'Niet storen', en: 'Do Not Disturb' }, { nl: 'Afwezig', en: 'Away' }]
          },
          {
            type: 'learn', icon: '💡',
            title: 'Professional Teams habits',
            body: 'Small habits that mark you as a professional Teams user.',
            list: [
              'Reply in threads - click Reply, not a new message, to keep conversations together',
              'Use clear message subjects for long messages: bold the first line',
              'Do not send "Hi" then wait - say hi AND your question in one message',
              'Acknowledge messages: a thumbs up emoji counts as "received"',
              'Do not share personal or sensitive information in group channels',
              'Mute notifications from busy channels: right-click channel → Mute'
            ]
          },
          {
            type: 'quiz',
            question: 'You are in an important meeting and do not want to be disturbed. What status do you set?',
            options: ['Available (Beschikbaar)', 'Away (Afwezig)', 'Do Not Disturb (Niet storen)', 'Offline'],
            correct: 2,
            feedback: '"Do Not Disturb" (Niet storen) silences notifications. Your colleagues will see the red dot and know you are unavailable for non-urgent matters.'
          },
          {
            type: 'speak',
            instruction: 'Practice this common Teams message - say it naturally:',
            phrase: 'Hi Sandra, quick question - do you have five minutes to discuss the report today?',
            phraseNl: 'Hoi Sandra, snelle vraag - heb je vijf minuten om vandaag over het rapport te praten?',
            lang: 'en-US'
          },
          {
            type: 'complete', xp: 30,
            ariaMsg: "Teams messaging - professional and confident! The @mention and status tips alone will make a huge difference. Your colleagues will see someone who communicates clearly and respects their time."
          }
        ]
      },
      {
        title: 'Video calls - joining, speaking and presenting',
        time: '6 min',
        steps: [
          {
            type: 'aria',
            text: "Video calls in Teams are now a normal part of every Dutch working day. Whether it is a quick check-in or a team meeting with 20 people, I want you to feel completely comfortable and confident on camera."
          },
          {
            type: 'learn', icon: '📹',
            title: 'Joining a Teams video call',
            body: 'There are two ways to join a Teams call:',
            list: [
              'From your Calendar: find the meeting → click Join',
              'From a Teams channel: click Join next to the meeting notification',
              'From an email invite: click the "Join Microsoft Teams Meeting" link',
              'Before joining: check camera is ON, microphone is ON, background is tidy',
              'You enter a lobby first - the host lets you in',
              'Tip: join 2 minutes early - it is professional and stress-free'
            ],
            dutch: [{ nl: 'Deelnemen', en: 'Join' }, { nl: 'Vergadering', en: 'Meeting' }, { nl: 'Camera', en: 'Camera (same)' }, { nl: 'Microfoon', en: 'Microphone' }, { nl: 'Wachtruimte', en: 'Lobby / Waiting room' }]
          },
          {
            type: 'learn', icon: '🎤',
            title: 'During the call - the control bar',
            body: 'At the bottom of the screen you have a control bar. Know these buttons.',
            list: [
              'Microphone icon - click to mute/unmute yourself (Ctrl+Shift+M)',
              'Camera icon - click to turn camera on/off (Ctrl+Shift+O)',
              'Raise hand (✋) - use this to indicate you want to speak without interrupting',
              'Chat icon - type messages during the call without speaking',
              'Reactions (👍❤️) - quick responses without unmuting',
              'Leave (Verlaten) - red phone button to end the call'
            ],
            dutch: [{ nl: 'Dempen', en: 'Mute' }, { nl: 'Hand opsteken', en: 'Raise hand' }, { nl: 'Verlaten', en: 'Leave' }, { nl: 'Weergeven', en: 'Show / Display' }]
          },
          {
            type: 'learn', icon: '🖥️',
            title: 'Sharing your screen',
            body: 'Sharing your screen lets everyone see what is on your computer. Very useful for presentations.',
            list: [
              'Click the Share icon (rectangle with arrow) in the control bar',
              'Choose: your whole screen, a specific window, or a PowerPoint',
              'Tip: close personal tabs and emails before sharing!',
              'A red border appears around the window you are sharing',
              'Click Stop Sharing (Stoppen met delen) when done',
              'Sharing PowerPoint from Teams directly = smoothest option'
            ],
            dutch: [{ nl: 'Scherm delen', en: 'Share screen' }, { nl: 'Stoppen met delen', en: 'Stop sharing' }, { nl: 'Venster', en: 'Window' }]
          },
          {
            type: 'learn', icon: '💄',
            title: 'Looking professional on camera',
            body: 'Video call presence matters - especially for job interviews and new colleagues.',
            list: [
              'Background: plain wall or use a Teams virtual background (blur is professional)',
              'Lighting: sit facing a window or light source - not with it behind you',
              'Camera height: camera should be at eye level - not looking up or down',
              'Dress: dress as you would in the office - at least from the waist up!',
              'Look at the camera when speaking, not the screen - it feels like eye contact',
              'Mute yourself when not speaking - background noise is very distracting'
            ]
          },
          {
            type: 'quiz',
            question: 'During a Teams meeting you want to speak but someone is already talking. What do you do?',
            options: ['Interrupt immediately', 'Unmute and say "excuse me" loudly', 'Click the Raise Hand button and wait', 'Send a message in the chat'],
            correct: 2,
            feedback: 'Raise Hand (✋) is the professional way to signal you want to speak. The host will give you the floor when there is a natural pause. Interrupting is considered rude in Dutch meeting culture.'
          },
          {
            type: 'complete', xp: 35,
            ariaMsg: "Video calls - you are ready! Camera on, background clean, raise hand to speak, mute when not talking. These habits will make you look completely at ease and professional in every Teams meeting."
          }
        ]
      },
      {
        title: 'Sharing files and collaborating in Teams',
        time: '4 min',
        steps: [
          {
            type: 'learn', icon: '📁',
            title: 'Sharing files in Teams',
            body: 'Teams makes it easy to share and collaborate on files without email attachments.',
            list: [
              'In a chat or channel: click the paperclip icon to attach a file',
              'Or drag and drop a file into the chat box',
              'Shared files are stored in SharePoint automatically',
              'Multiple people can edit the same Word/Excel file at the same time',
              'Files tab in any channel shows all shared files for that team'
            ],
            dutch: [{ nl: 'Bestand delen', en: 'Share file' }, { nl: 'Samenwerken', en: 'Collaborate' }, { nl: 'Bijlage', en: 'Attachment' }, { nl: 'Bewerken', en: 'Edit' }]
          },
          {
            type: 'learn', icon: '🔗',
            title: 'Sharing a OneDrive link instead of a file',
            body: 'For large files or files you want to control, share a link instead.',
            list: [
              'Open the file in OneDrive → click Share (Delen)',
              'Copy the link and paste it in Teams chat',
              'You can set permissions: can view / can edit',
              '"Can view" = they can read but not change it (good for final versions)',
              '"Can edit" = they can make changes (good for collaboration)',
              'This avoids sending large attachments that fill up inboxes'
            ],
            dutch: [{ nl: 'Koppeling delen', en: 'Share link' }, { nl: 'Machtigingen', en: 'Permissions' }, { nl: 'Alleen bekijken', en: 'View only' }, { nl: 'Bewerken toegestaan', en: 'Can edit' }]
          },
          {
            type: 'quiz',
            question: 'Your team is editing the same Word document together. What is the best way to share it?',
            options: ['Email a copy to everyone', 'Put it in a Teams channel and let everyone edit it', 'Print it and give paper copies', 'Only one person can work on it at a time'],
            correct: 1,
            feedback: 'Sharing a file in a Teams channel means everyone can edit it simultaneously, changes are saved automatically, and there is only ever one version. This is how modern Dutch teams work.'
          },
          {
            type: 'complete', xp: 30,
            ariaMsg: "Teams file sharing - done! You now know how to work together with colleagues on documents in real time. This is exactly how modern Dutch teams collaborate every day."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  //  8. MICROSOFT EXCEL
  // ═══════════════════════════════════════════
  {
    id: 'excel',
    icon: '📊',
    name: 'Microsoft Excel',
    phase: 'Office',
    color: '#217346',
    lessons: [
      {
        title: 'What is Excel? Cells, rows and columns',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "Chhaya, you have a Masters in Finance. Excel is the tool of your field. Every finance team, every admin role, every office job in the Netherlands uses Excel. After this module, Excel will feel like home - and you will realise how much of your degree prepared you for this."
          },
          {
            type: 'learn', icon: '📊',
            title: 'The Excel layout - the grid',
            body: 'Excel is a grid of cells organised in rows and columns. That is the whole concept.',
            list: [
              'Column - a vertical line of cells, named with letters: A, B, C, D...',
              'Row - a horizontal line of cells, named with numbers: 1, 2, 3, 4...',
              'Cell - one single box where a column and row meet. e.g. cell A1, cell B3',
              'Active cell - the cell you have clicked on (highlighted with a green border)',
              'Name Box (top left) - shows which cell is selected: "A1"',
              'Formula Bar - shows what is in the selected cell'
            ],
            dutch: [{ nl: 'Kolom', en: 'Column (A, B, C...)' }, { nl: 'Rij', en: 'Row (1, 2, 3...)' }, { nl: 'Cel', en: 'Cell (e.g. A1)' }, { nl: 'Werkblad', en: 'Worksheet / Sheet' }, { nl: 'Werkmap', en: 'Workbook (the file)' }]
          },
          {
            type: 'learn', icon: '⌨️',
            title: 'Moving around Excel',
            body: 'Once you can navigate the grid quickly, Excel becomes very fast to use.',
            list: [
              'Click any cell to select it',
              'Arrow keys - move one cell in any direction',
              'Enter - move down one cell after typing',
              'Tab - move right one cell after typing',
              'Ctrl+Home - go to cell A1 (the beginning)',
              'Ctrl+End - go to the last cell with data',
              'Ctrl+Arrow - jump to the last cell in a direction with data'
            ],
            dutch: [{ nl: 'Navigeren', en: 'Navigate' }, { nl: 'Selecteren', en: 'Select' }, { nl: 'Begincel', en: 'Starting cell' }]
          },
          {
            type: 'quiz',
            question: 'A cell is at column C and row 5. What is its name?',
            options: ['5C', 'C-5', 'C5', 'Column C Row 5'],
            correct: 2,
            feedback: 'Cell names are always column letter first, then row number: C5. This is called a cell reference and you will use it in formulas constantly.'
          },
          {
            type: 'complete', xp: 25,
            ariaMsg: "The Excel grid - understood! This is the foundation that everything else builds on. You are already thinking like a spreadsheet professional."
          }
        ]
      },
      {
        title: 'Entering and formatting data',
        time: '5 min',
        steps: [
          {
            type: 'learn', icon: '✏️',
            title: 'Typing data into Excel',
            body: 'Excel handles three types of data. Understanding the difference is important.',
            list: [
              'Text (Tekst) - words, names, descriptions. Aligns left automatically.',
              'Numbers (Getallen) - amounts, quantities. Aligns right automatically.',
              'Dates (Datums) - Excel recognises dates: type 30/06/2026 or 30-06-2026',
              'To edit a cell: double-click it or press F2',
              'To delete a cell: select it and press Delete key',
              'To select multiple cells: click and drag, or Shift+Click'
            ],
            dutch: [{ nl: 'Tekst', en: 'Text' }, { nl: 'Getal', en: 'Number' }, { nl: 'Datum', en: 'Date' }, { nl: 'Valuta', en: 'Currency (€)' }]
          },
          {
            type: 'learn', icon: '🎨',
            title: 'Formatting cells to look professional',
            body: 'Raw data looks messy. Formatting makes it clear and professional.',
            list: [
              'Bold headers: select row 1 → Ctrl+B (makes column headers stand out)',
              'Currency format: select cells → Home → Number → Currency (adds € sign)',
              'Date format: select cells → right-click → Format Cells → Date',
              'Align text: Home tab → alignment buttons (left, centre, right)',
              'Column width: double-click the line between column letters to auto-fit',
              'Background colour: Home → Fill Color (paint bucket) to highlight cells'
            ],
            dutch: [{ nl: 'Opmaak', en: 'Formatting' }, { nl: 'Lettertype', en: 'Font' }, { nl: 'Achtergrondkleur', en: 'Background colour' }, { nl: 'Kolombreedte', en: 'Column width' }]
          },
          {
            type: 'exercise',
            title: '💻 Try it on your laptop!',
            task: 'Open Excel. In row 1, type these headers: Name, Department, Salary. Bold the headers. Enter 3 rows of made-up data. Format the Salary column as Currency. Auto-fit the columns. Take a screenshot.',
            screenshotTask: 'Upload a screenshot showing your formatted Excel table.',
            checkDescription: 'Screenshot shows an Excel spreadsheet with bold headers and at least 3 rows of data, with a Currency column'
          },
          {
            type: 'quiz',
            question: 'You type a number in Excel but it shows text and aligns to the left. What has happened?',
            options: ['The number is correct', 'Excel has formatted it as Text, not as a Number', 'The column is too narrow', 'You need to restart Excel'],
            correct: 1,
            feedback: 'Numbers stored as text do not calculate correctly! Select the cells → click the warning triangle → Convert to Number. Always check that numbers align to the right.'
          },
          {
            type: 'complete', xp: 30,
            ariaMsg: "Data entry and formatting - excellent! A well-formatted spreadsheet is a pleasure to read. Your Finance background means you understand exactly why clean, accurate data matters."
          }
        ]
      },
      {
        title: 'Basic formulas - SUM, AVERAGE, COUNT',
        time: '6 min',
        steps: [
          {
            type: 'aria',
            text: "This is where Excel becomes truly powerful. Formulas let Excel do the maths for you - instantly, accurately, and automatically when data changes. This is the skill that Finance employers test in interviews."
          },
          {
            type: 'learn', icon: '➕',
            title: 'How formulas work in Excel',
            body: 'Every formula in Excel starts with an = sign. That is the rule.',
            list: [
              '= tells Excel "calculate this"',
              '=5+3 gives you 8',
              '=A1+B1 adds the values in cells A1 and B1',
              '=A1*B1 multiplies them (* means multiply)',
              '=A1/B1 divides them (/ means divide)',
              'The result shows in the cell. The formula shows in the Formula Bar above.'
            ],
            dutch: [{ nl: 'Formule', en: 'Formula' }, { nl: 'Optellen', en: 'Addition (+)' }, { nl: 'Aftrekken', en: 'Subtraction (-)' }, { nl: 'Vermenigvuldigen', en: 'Multiply (*)' }, { nl: 'Delen', en: 'Divide (/)' }]
          },
          {
            type: 'learn', icon: '🧮',
            title: 'The 3 most essential functions',
            body: 'These three functions will cover 80% of what you need in an office job.',
            list: [
              '=SUM(A1:A10) - adds up all cells from A1 to A10. The colon means "through".',
              '=AVERAGE(A1:A10) - calculates the average of those cells',
              '=COUNT(A1:A10) - counts how many cells have numbers in them',
              'Dutch versions: =SOM(), =GEMIDDELDE(), =AANTAL() - Excel uses Dutch if set to Dutch',
              'Tip: type =SUM( then drag to select cells, then close with )',
              'AutoSum shortcut: select a column of numbers → press Alt+='
            ],
            dutch: [{ nl: '=SOM()', en: '=SUM() in Dutch Excel' }, { nl: '=GEMIDDELDE()', en: '=AVERAGE() in Dutch Excel' }, { nl: '=AANTAL()', en: '=COUNT() in Dutch Excel' }]
          },
          {
            type: 'learn', icon: '🔒',
            title: 'Absolute references - the $ sign',
            body: 'When you copy a formula to other cells, Excel adjusts the cell references. Sometimes you do NOT want that.',
            list: [
              'Normal reference: =A1+B1 - when copied, adjusts to =A2+B2, =A3+B3 etc.',
              'Absolute reference: =$A$1 - the $ locks the reference. It will NOT change when copied.',
              'Example: tax rate in cell D1. Formula: =B2*$D$1 so tax rate stays fixed when copying down.',
              'Press F4 while typing a cell reference to add $ signs automatically'
            ],
            dutch: [{ nl: 'Absolute verwijzing', en: 'Absolute reference ($A$1)' }, { nl: 'Relatieve verwijzing', en: 'Relative reference (A1)' }]
          },
          {
            type: 'exercise',
            title: '💻 Try it on your laptop!',
            task: 'Open Excel. In column A (rows 1-5) enter 5 salary amounts (e.g. 2500, 3000, 2800, 3200, 2900). In B1 type =SUM(A1:A5). In B2 type =AVERAGE(A1:A5). In B3 type =COUNT(A1:A5). Label each in column C. Take a screenshot.',
            screenshotTask: 'Upload a screenshot showing the SUM, AVERAGE and COUNT formulas.',
            checkDescription: 'Screenshot shows Excel with numbers in column A and SUM/AVERAGE/COUNT formulas calculated in column B'
          },
          {
            type: 'quiz',
            question: 'You want to add all numbers in cells B2 to B20. Which formula is correct?',
            options: ['=ADD(B2,B20)', '=SUM(B2:B20)', '=TOTAL(B2-B20)', '=B2+B20'],
            correct: 1,
            feedback: '=SUM(B2:B20) adds everything from B2 through B20 - all 19 cells. The colon means "through". =B2+B20 would only add those two specific cells.'
          },
          {
            type: 'complete', xp: 40,
            ariaMsg: "SUM, AVERAGE, COUNT - you have the three most powerful Excel formulas! In a Finance role, you will use these every single day. You are already thinking like a data professional."
          }
        ]
      },
      {
        title: 'Sorting, filtering and simple charts',
        time: '5 min',
        steps: [
          {
            type: 'learn', icon: '🔤',
            title: 'Sorting data',
            body: 'Sorting lets you reorder your data instantly - alphabetically, by number, by date.',
            list: [
              'Click any cell in the column you want to sort by',
              'Data tab → Sort A to Z (ascending) or Z to A (descending)',
              'For numbers: Sort Smallest to Largest or Largest to Smallest',
              'Custom sort: Data → Sort → add multiple levels (sort by Department, then by Name)',
              'Excel sorts the whole row - all data stays together'
            ],
            dutch: [{ nl: 'Sorteren', en: 'Sort' }, { nl: 'Oplopend', en: 'Ascending (A-Z, 1-9)' }, { nl: 'Aflopend', en: 'Descending (Z-A, 9-1)' }]
          },
          {
            type: 'learn', icon: '🔍',
            title: 'Filtering - show only what you need',
            body: 'Filtering hides rows that do not match your criteria, so you can focus on specific data.',
            list: [
              'Click any cell in your data → Data tab → Filter',
              'Dropdown arrows appear on your header row',
              'Click a dropdown → choose what to show (e.g. only "Finance" department)',
              'Multiple filters work together (Department = Finance AND Salary > 3000)',
              'Clear filter: Data → Clear to show all rows again',
              'Filtered rows are hidden, not deleted - all data is still there'
            ],
            dutch: [{ nl: 'Filter', en: 'Filter (same)' }, { nl: 'Filteren', en: 'To filter' }, { nl: 'Filter wissen', en: 'Clear filter' }]
          },
          {
            type: 'learn', icon: '📈',
            title: 'Creating a simple chart',
            body: 'Charts turn numbers into visuals. Even a simple chart makes a report look professional.',
            list: [
              'Select the data you want to chart (include headers)',
              'Insert tab → Charts → choose type: Bar, Column, Pie, Line',
              'Column chart = good for comparing items',
              'Line chart = good for showing change over time',
              'Pie chart = good for showing parts of a whole (percentages)',
              'Click the chart to move it. Drag corners to resize.',
              'Chart Title: click it to edit - give it a meaningful name'
            ],
            dutch: [{ nl: 'Grafiek', en: 'Chart / Graph' }, { nl: 'Kolomdiagram', en: 'Column chart' }, { nl: 'Cirkeldiagram', en: 'Pie chart' }, { nl: 'Lijngrafiek', en: 'Line chart' }]
          },
          {
            type: 'quiz',
            question: 'You have sales data for 12 months and want to show the trend over time. Which chart type is best?',
            options: ['Pie chart (Cirkeldiagram)', 'Line chart (Lijngrafiek)', 'Bar chart', 'No chart - just numbers'],
            correct: 1,
            feedback: 'A line chart is perfect for showing how something changes over time - months, quarters, years. Pie charts are for proportions. Bar charts are for comparing separate items side by side.'
          },
          {
            type: 'complete', xp: 35,
            ariaMsg: "Sort, filter, charts - you are building a professional Excel skillset! These are exactly the tools finance teams use to present data to management. You are not just learning Excel - you are preparing for the job you deserve."
          }
        ]
      },
      {
        title: 'Excel at work - practical scenarios',
        time: '6 min',
        steps: [
          {
            type: 'aria',
            text: "Now let us put everything together in real work scenarios. These are the kinds of tasks you will actually get in your first weeks at a Dutch company. You already have all the skills - let us apply them."
          },
          {
            type: 'learn', icon: '📋',
            title: 'Scenario 1: Expense report',
            body: 'Your manager asks you to create a simple expense report for the team.',
            list: [
              'Create columns: Date, Description, Category, Amount (€)',
              'Enter 5-10 rows of expenses',
              'Add a SUM formula at the bottom for the total',
              'Format the Amount column as Currency',
              'Bold the header row and total row',
              'Add a filter so the manager can filter by Category',
              'Save as PDF before sending!'
            ]
          },
          {
            type: 'learn', icon: '📊',
            title: 'Scenario 2: Team overview list',
            body: 'Create a list of team members with their details.',
            list: [
              'Columns: Name, Department, Start Date, Contract Type, Full/Part time',
              'Sort alphabetically by last name',
              'Use filter to show only "Full time" employees',
              'Calculate: how many employees in total? =COUNT(A2:A20)',
              'Format the Start Date column as a Date',
              'Freeze the top row so headers stay visible when scrolling: View → Freeze Top Row'
            ],
            dutch: [{ nl: 'Rij blokkeren', en: 'Freeze row' }, { nl: 'Bovenkant blokkeren', en: 'Freeze top row' }, { nl: 'Volledig scherm', en: 'Full screen' }]
          },
          {
            type: 'learn', icon: '💡',
            title: 'Essential Excel tips for the office',
            body: 'These small habits mark you as someone who really knows Excel.',
            list: [
              'Ctrl+Z - Undo! Use it fearlessly.',
              'Ctrl+S - Save constantly! Excel does not always autosave.',
              'Ctrl+Home - Jump back to A1 instantly.',
              'Never merge cells - it breaks sorting and filtering.',
              'Keep raw data in one sheet, calculations in another.',
              'Name your sheets clearly: double-click the tab (Sheet1) to rename.',
              'Ctrl+; (semicolon) - inserts today\'s date automatically!'
            ]
          },
          {
            type: 'exercise',
            title: '💻 Try it on your laptop!',
            task: "Create an expense report: columns Date, Description, Category, Amount. Enter 5 expenses. Add SUM at bottom. Format as Currency. Sort by Date. Take a screenshot.",
            screenshotTask: 'Upload a screenshot of your completed expense report in Excel.',
            checkDescription: 'Screenshot shows an Excel expense report with Date, Description, Category, Amount columns and a SUM total at the bottom'
          },
          {
            type: 'quiz',
            question: 'You want the header row to always stay visible as you scroll down 200 rows. What do you use?',
            options: ['Make the font bigger', 'View → Freeze Top Row', 'Copy the header every 10 rows', 'Print the headers on each page'],
            correct: 1,
            feedback: 'View → Freeze Top Row locks the header so it stays visible no matter how far you scroll. Essential for any list with lots of rows!'
          },
          {
            type: 'complete', xp: 45,
            ariaMsg: "Excel module complete! Chhaya, you have just built skills that Finance departments actively look for. Expense reports, team lists, formulas, charts - you can do all of this. Your Masters degree and now your Excel skills are a powerful combination. You are so ready."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  //  9. DUTCH LANGUAGE EXPANDED
  // ═══════════════════════════════════════════
  {
    id: 'dutch-expanded',
    icon: '🗣️',
    name: 'Dutch - Deeper',
    phase: 'Language',
    color: '#f59e0b',
    lessons: [
      {
        title: 'Numbers, time, days and months',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "Numbers, time and dates come up every single day at work - in meetings, schedules, emails and phone calls. Let us make sure you are completely confident with these. I will explain everything in English so it is clear."
          },
          {
            type: 'learn', icon: '🔢',
            title: 'Numbers 1 to 20 in Dutch',
            body: 'Learn these and you can handle most workplace situations. Say each one out loud.',
            list: [
              '1 een, 2 twee, 3 drie, 4 vier, 5 vijf',
              '6 zes, 7 zeven, 8 acht, 9 negen, 10 tien',
              '11 elf, 12 twaalf, 13 dertien, 14 veertien, 15 vijftien',
              '16 zestien, 17 zeventien, 18 achttien, 19 negentien, 20 twintig',
              '30 dertig, 40 veertig, 50 vijftig, 100 honderd, 1000 duizend',
              'Tip: 21 = eenentwintig (one-and-twenty), 45 = vijfenveertig'
            ],
            dutch: [{ nl: 'Eén', en: 'One (1)' }, { nl: 'Tien', en: 'Ten (10)' }, { nl: 'Twintig', en: 'Twenty (20)' }, { nl: 'Honderd', en: 'Hundred (100)' }]
          },
          {
            type: 'learn', icon: '⏰',
            title: 'Telling the time in Dutch',
            body: 'Dutch time works differently from English. Here is how to understand it.',
            list: [
              '10:00 = tien uur (ten o\'clock)',
              '10:15 = kwart over tien (quarter past ten)',
              '10:30 = half elf (half eleven - means 30 mins BEFORE eleven!)',
              '10:45 = kwart voor elf (quarter to eleven)',
              'Important: "half elf" does NOT mean 11:30 - it means 10:30!',
              'In work emails and schedules: use 14:00 (not 2pm) - Dutch use 24-hour time'
            ],
            dutch: [{ nl: 'Hoe laat is het?', en: 'What time is it?' }, { nl: 'Kwart over', en: 'Quarter past' }, { nl: 'Half [next hour]', en: 'Half past [previous hour]' }, { nl: 'Kwart voor', en: 'Quarter to' }]
          },
          {
            type: 'learn', icon: '📅',
            title: 'Days of the week and months',
            body: 'You will use days and months every day in meetings, emails and conversations.',
            list: [
              'Monday = maandag, Tuesday = dinsdag, Wednesday = woensdag',
              'Thursday = donderdag, Friday = vrijdag',
              'Saturday = zaterdag, Sunday = zondag',
              'January = januari, February = februari, March = maart, April = april',
              'May = mei, June = juni, July = juli, August = augustus',
              'September = september, October = oktober, November = november, December = december'
            ],
            dutch: [{ nl: 'Maandag', en: 'Monday' }, { nl: 'Vrijdag', en: 'Friday' }, { nl: 'Woensdag', en: 'Wednesday' }, { nl: 'Deze week', en: 'This week' }, { nl: 'Volgende week', en: 'Next week' }]
          },
          {
            type: 'speak',
            instruction: 'Practice saying today\'s date - Aria goes first:',
            phrase: 'The meeting is on Wednesday the first of July at half past two.',
            phraseNl: 'De vergadering is op woensdag de eerste juli om half drie.',
            lang: 'en-US'
          },
          {
            type: 'quiz',
            question: 'Your Dutch colleague says the meeting is at "half drie". What time is that?',
            options: ['3:30', '2:30', '3:00', '12:30'],
            correct: 1,
            feedback: '"Half drie" means half past TWO - 2:30! In Dutch, "half [hour]" means 30 minutes before that hour, not after. So half drie = 30 minutes before 3 = 2:30. This confuses many people at first!'
          },
          {
            type: 'complete', xp: 30,
            ariaMsg: "Numbers, time, days - done! The 'half drie' rule catches almost every foreigner out in their first week. Now you know it, you will never miss a meeting because of a time misunderstanding."
          }
        ]
      },
      {
        title: 'Writing emails and messages in Dutch',
        time: '5 min',
        steps: [
          {
            type: 'aria',
            text: "Writing even a simple email in Dutch will make a huge impression. Dutch colleagues genuinely appreciate the effort. I will teach you the building blocks in English first, then show you how to put them together into a real Dutch email."
          },
          {
            type: 'learn', icon: '✉️',
            title: 'Dutch email - how to open',
            body: 'The opening of a Dutch email depends on how formal the situation is. Here is how to choose.',
            list: [
              'Very formal (e.g. HR, new employer): "Geachte mevrouw [surname]," or "Geachte meneer [surname],"',
              '  → This means: "Dear Ms/Mr [surname]" - respectful and correct',
              'Informal (colleague, same team): "Beste [first name]," or "Hoi [first name],"',
              '  → "Beste" means "Dear" but warmer. "Hoi" is like "Hi"',
              'If you do not know gender: "Geachte heer of mevrouw,"',
              '  → This means: "Dear Sir or Madam"'
            ],
            dutch: [{ nl: 'Geachte', en: 'Dear (formal)' }, { nl: 'Beste', en: 'Dear (informal/warm)' }, { nl: 'Hoi', en: 'Hi (casual)' }, { nl: 'Mevrouw', en: 'Ms / Madam' }, { nl: 'Meneer', en: 'Mr / Sir' }]
          },
          {
            type: 'learn', icon: '📝',
            title: 'Useful Dutch phrases for the email body',
            body: 'You do not need to write every word in Dutch. Even a few key phrases make a great impression.',
            list: [
              '"Hierbij stuur ik u..." = Hereby I am sending you...',
              '"Naar aanleiding van ons gesprek..." = Following our conversation...',
              '"Ik heb een vraag over..." = I have a question about...',
              '"Zou u mij kunnen helpen met...?" = Could you help me with...?',
              '"Ik zie uw reactie graag tegemoet" = I look forward to your reply',
              '"Heeft u nog vragen?" = Do you have any questions?',
              '"Alvast bedankt" = Thank you in advance'
            ],
            dutch: [{ nl: 'Hierbij', en: 'Hereby / Please find attached' }, { nl: 'Naar aanleiding van', en: 'Following / Regarding' }, { nl: 'Alvast bedankt', en: 'Thank you in advance' }]
          },
          {
            type: 'learn', icon: '🔚',
            title: 'How to close a Dutch email',
            body: 'The closing is the last thing people read. Get this right every time.',
            list: [
              'Formal: "Met vriendelijke groet," = Kind regards',
              'Formal: "Met vriendelijke groeten," = Kind regards (plural, slightly warmer)',
              'Informal: "Groeten," = Greetings (short and common)',
              'Informal: "Vriendelijke groeten," = Friendly greetings',
              'After the closing: leave one line, then type your full name',
              'Add your phone number and job title if relevant'
            ],
            dutch: [{ nl: 'Met vriendelijke groet', en: 'Kind regards (standard)' }, { nl: 'Groeten', en: 'Greetings (casual)' }, { nl: 'Handtekening', en: 'Signature' }]
          },
          {
            type: 'learn', icon: '📨',
            title: 'A complete Dutch email example',
            body: 'Read this example out loud. You can use this as a template.',
            list: [
              'Onderwerp: Vraag over vergadering woensdag',
              '---',
              'Beste Sandra,',
              '',
              'Ik heb een vraag over de vergadering op woensdag.',
              'Wordt het budget ook besproken? Dan kan ik mij goed voorbereiden.',
              '',
              'Alvast bedankt voor uw reactie.',
              '',
              'Met vriendelijke groet,',
              'Chhaya'
            ]
          },
          {
            type: 'speak',
            instruction: 'Practice the Dutch email closing - say it clearly:',
            phrase: 'Thank you in advance. Kind regards, Chhaya.',
            phraseNl: 'Alvast bedankt. Met vriendelijke groet, Chhaya.',
            lang: 'en-US'
          },
          {
            type: 'quiz',
            question: 'You are emailing a Dutch employer you have never met. Which opening is most appropriate?',
            options: ['Hoi Sandra!', 'Hey!', 'Geachte mevrouw De Vries,', 'Beste allemaal,'],
            correct: 2,
            feedback: '"Geachte mevrouw De Vries," is the correct formal opening for someone you have not met. Use the formal "Geachte" until they respond informally - then you can match their tone.'
          },
          {
            type: 'complete', xp: 35,
            ariaMsg: "Dutch email writing - done! Even sending one email with a correct Dutch opening and closing will make employers and colleagues remember you positively. This small effort signals that you are serious about integrating into Dutch professional life."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  //  10. COVER LETTER
  // ═══════════════════════════════════════════
  {
    id: 'cover-letter',
    icon: '📩',
    name: 'Cover Letter',
    phase: 'Career',
    color: '#10b981',
    lessons: [
      {
        title: 'Writing a Dutch cover letter (sollicitatiebrief)',
        time: '7 min',
        steps: [
          {
            type: 'aria',
            text: "A Dutch cover letter is your first chance to speak directly to an employer. Done well, it gets you an interview. Done badly, even a great CV does not help. The good news: it follows a clear structure that I am going to give you right now."
          },
          {
            type: 'learn', icon: '📄',
            title: 'What makes a Dutch cover letter different',
            body: 'Dutch cover letters have very specific characteristics. Follow these and you are already ahead.',
            list: [
              'Maximum ONE page - Dutch employers will not read more',
              'Three short paragraphs is the standard structure',
              'Formal but warm tone - not stiff, not casual',
              'Specific: mention the exact job title and company name',
              'NO generic letters - every letter must be written for that specific job',
              'End with a clear call to action: "I would welcome the opportunity to discuss this."',
              'Save and send as PDF (PDF-bestand)'
            ],
            dutch: [{ nl: 'Sollicitatiebrief', en: 'Cover letter / Application letter' }, { nl: 'Motivatiebrief', en: 'Motivation letter (same thing)' }, { nl: 'Vacature', en: 'Job vacancy' }, { nl: 'Aanhef', en: 'Opening / Salutation' }]
          },
          {
            type: 'learn', icon: '1️⃣',
            title: 'Paragraph 1 - Why THIS company and THIS role',
            body: 'The first paragraph explains why you are applying. Show you have done your research.',
            list: [
              'Mention the specific job title and where you saw the vacancy',
              'Say one genuine thing you find interesting about the company',
              'Example: "I am applying for the position of Finance Administrator, which I found on LinkedIn."',
              'Example: "I am particularly drawn to [Company Name] because of your commitment to sustainability."',
              'Keep it to 3-4 sentences',
              'Do NOT start with "I" - start with the role or company name instead'
            ]
          },
          {
            type: 'learn', icon: '2️⃣',
            title: 'Paragraph 2 - What you bring',
            body: 'This is the most important paragraph. Match your skills to what the job needs.',
            list: [
              'Pick 2-3 skills or experiences that match the job description',
              'Be specific - give a brief example for each skill',
              '"My Masters degree in Finance gave me a strong analytical foundation."',
              '"During my studies I regularly worked with Excel for data analysis and reporting."',
              'Address the career gap confidently: "Since relocating to the Netherlands I have focused on language learning and professional development."',
              'Frame everything as an advantage, not an apology'
            ]
          },
          {
            type: 'learn', icon: '3️⃣',
            title: 'Paragraph 3 - The call to action',
            body: 'The closing paragraph should be confident and invite a response.',
            list: [
              '"I would welcome the opportunity to discuss how I can contribute to your team."',
              '"I am available for an interview at your convenience."',
              '"I look forward to hearing from you."',
              'In Dutch: "Ik zie uw uitnodiging voor een gesprek graag tegemoet."',
              '  → This means: "I look forward to your invitation for an interview."',
              'Then: "Met vriendelijke groet," and your full name'
            ],
            dutch: [{ nl: 'Ik zie uw reactie tegemoet', en: 'I look forward to your reply' }, { nl: 'Beschikbaar voor gesprek', en: 'Available for an interview' }]
          },
          {
            type: 'speak',
            instruction: 'Practice this closing sentence - it ends every strong cover letter:',
            phrase: 'I would welcome the opportunity to discuss my application further. I look forward to hearing from you.',
            phraseNl: 'Ik zie uw uitnodiging voor een gesprek graag tegemoet. Met vriendelijke groet, Chhaya.',
            lang: 'en-US'
          },
          {
            type: 'quiz',
            question: 'A Dutch cover letter should be how long?',
            options: ['3-4 pages - show everything', 'Exactly 2 pages', 'One page maximum', 'As long as needed'],
            correct: 2,
            feedback: 'One page maximum. Dutch employers are direct and value brevity. A three-paragraph letter that is tight, specific and well-written beats three pages every time.'
          },
          {
            type: 'quiz',
            question: 'You are applying for a Finance role. Which paragraph 2 opening is stronger?',
            options: [
              '"I think I am a good person for this job."',
              '"My Masters in Finance and practical Excel experience directly match the analytical skills this role requires."',
              '"I have always loved numbers since I was young."',
              '"I really need a job and I work very hard."'
            ],
            correct: 1,
            feedback: 'Specific, confident, and directly connected to the job requirements. Dutch employers respond to evidence and specificity - not vague enthusiasm or personal history.'
          },
          {
            type: 'complete', xp: 45,
            ariaMsg: "Cover letter - complete! You now have the structure, the language, and the confidence to write a compelling Dutch cover letter. One page, three paragraphs, specific and warm. Combined with your CV, this will get you interviews."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  //  11. WORK RIGHTS IN THE NETHERLANDS
  // ═══════════════════════════════════════════
  {
    id: 'work-rights',
    icon: '⚖️',
    name: 'Your Work Rights',
    phase: 'Career',
    color: '#ef4444',
    lessons: [
      {
        title: 'Contracts, rights and what to know before you sign',
        time: '7 min',
        steps: [
          {
            type: 'aria',
            text: "This lesson could protect you from making a costly mistake. Many people - especially those new to the Netherlands - sign contracts without understanding what they say. After this lesson, you will know your rights and you will never be taken advantage of."
          },
          {
            type: 'learn', icon: '📋',
            title: 'Types of employment contracts in the Netherlands',
            body: 'Understanding your contract type is essential before you sign anything.',
            list: [
              'Vast contract (permanent) - the most secure. No end date. Harder to be dismissed.',
              'Tijdelijk contract (temporary/fixed-term) - has an end date. Very common to start with.',
              'Nulurencontract (zero-hours contract) - you work when called. No guaranteed hours. Be careful with this.',
              'Uitzendcontract (agency contract) - through a temp agency. Normal starting point.',
              'Zzp / Freelance - you are self-employed. No employee rights. Only accept if you understand the difference.',
              'Tip: always ask for the contract IN WRITING before your first day'
            ],
            dutch: [{ nl: 'Vast contract', en: 'Permanent contract' }, { nl: 'Tijdelijk contract', en: 'Temporary / Fixed-term contract' }, { nl: 'Nulurencontract', en: 'Zero-hours contract' }, { nl: 'Proeftijd', en: 'Trial / Probation period' }]
          },
          {
            type: 'learn', icon: '🏖️',
            title: 'Holiday leave - your legal rights',
            body: 'Dutch law gives you minimum holiday rights. Know them.',
            list: [
              'Minimum 20 days per year (4 times your weekly hours)',
              'Most Dutch companies offer 25-28 days',
              'Vakantiegeld (holiday money) - an extra 8% of your annual salary paid in May/June',
              'You build up leave from day one, even during probation',
              'Always request leave in writing (email to your manager)',
              'You cannot be refused all your leave - employers must let you take it'
            ],
            dutch: [{ nl: 'Vakantiedagen', en: 'Holiday days / Annual leave' }, { nl: 'Vakantiegeld', en: 'Holiday allowance (8% bonus in May)' }, { nl: 'Verlof aanvragen', en: 'Request leave' }]
          },
          {
            type: 'learn', icon: '🤒',
            title: 'Sick leave - what to do when you are ill',
            body: 'This is very different from many countries. The rules in the Netherlands are strict but protective.',
            list: [
              'You MUST call your manager before 9:00 on the first day you are sick - do not email',
              'Say: "I am not feeling well and I cannot come in today."',
              'Employer pays 70% of your salary (often 100%) for up to 2 years while sick',
              'You cannot be dismissed simply for being ill - this is protected by Dutch law',
              'After a longer illness: the company Arbo doctor (occupational doctor) will contact you',
              'After 2 years of illness: rules change - get advice from the UWV (benefits office)'
            ],
            dutch: [{ nl: 'Ziek melden', en: 'Call in sick (MUST be by phone)' }, { nl: 'Ziekteuitkering', en: 'Sick pay' }, { nl: 'Bedrijfsarts', en: 'Company doctor (Arbo)' }, { nl: 'Arbeidsongeschikt', en: 'Unable to work due to illness' }]
          },
          {
            type: 'learn', icon: '💰',
            title: 'Salary, payslip and minimum wage',
            body: 'Understanding your payslip (loonstrook) is essential.',
            list: [
              'Minimumloon (minimum wage) - check the current rate on werk.nl. Updated every 6 months.',
              'Bruto (gross) salary = before tax. Netto (net) = what you actually receive.',
              'Loonheffing = income tax withheld by employer. Normal.',
              'Sociale premies = social security contributions. Normal.',
              'Check your loonstrook every month - errors do happen',
              'If you are paid less than agreed: email your manager IN WRITING immediately',
              'BSN number (burgerservicenummer) - you need this to be paid legally. Get it from the gemeente.'
            ],
            dutch: [{ nl: 'Loonstrook', en: 'Payslip' }, { nl: 'Bruto', en: 'Gross (before tax)' }, { nl: 'Netto', en: 'Net (after tax, what you receive)' }, { nl: 'Loonheffing', en: 'Income tax (withheld)' }, { nl: 'BSN-nummer', en: 'Citizen service number (needed for work)' }]
          },
          {
            type: 'quiz',
            question: 'You feel ill on Monday morning. What is the correct thing to do in the Netherlands?',
            options: ['Send a WhatsApp message to your manager', 'Send an email before 9:00', 'Call your manager before 9:00 and say you are ill', 'Wait and see how you feel at 10:00'],
            correct: 2,
            feedback: 'In the Netherlands, you MUST phone your manager before 9:00 on the first day of illness. Not email, not WhatsApp - a phone call. This is the professional and legally expected procedure.'
          },
          {
            type: 'quiz',
            question: 'Your contract says your bruto salary is €2,800. You receive €2,100 in your bank account. Is this normal?',
            options: ['No - something has gone wrong', 'Yes - bruto is before tax, netto is after tax deductions', 'You should have received €2,800', 'The employer has made an error'],
            correct: 1,
            feedback: 'This is completely normal! Bruto (gross) is before income tax and social security contributions are deducted. Netto (net) is what actually hits your bank account. The deductions go to the tax office (Belastingdienst).'
          },
          {
            type: 'speak',
            instruction: 'Practice calling in sick - Aria will say it, then you repeat:',
            phrase: 'Good morning, this is Chhaya. I am not feeling well today and I am not able to come in. I will keep you updated.',
            phraseNl: 'Goedemorgen, u spreekt met Chhaya. Ik ben ziek en kan vandaag niet komen. Ik houd u op de hoogte.',
            lang: 'en-US'
          },
          {
            type: 'complete', xp: 45,
            ariaMsg: "Work rights - done! You now know your contract types, your leave entitlements, how to call in sick correctly, and how to read your payslip. This knowledge protects you and gives you confidence in every workplace conversation about your rights."
          }
        ]
      }
    ]
  }
];
