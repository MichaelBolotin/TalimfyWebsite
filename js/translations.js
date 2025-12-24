const LANGUAGE_CONFIG = {
    en: { name: "English", nativeName: "English", dir: "ltr" },
    he: { name: "Hebrew", nativeName: "עברית", dir: "rtl" }
};

const LOCALIZATION_DATA = {
    // Navigation
    "nav.features": {
        description: "Navigation link to the Features section",
        translations: { en: "Features", he: "תכונות" }
    },
    "nav.integration": {
        description: "Navigation link to the Integration section",
        translations: { en: "iOS & iPadOS Deep Dive", he: "העמקה ב-iOS ו-iPadOS" }
    },
    "nav.global": {
        description: "Navigation link to the Global section",
        translations: { en: "Global", he: "גלובלי" }
    },
    "nav.download": {
        description: "Navigation link/button to Download",
        translations: { en: "Download", he: "הורדה" }
    },
    "nav.language": {
        description: "Label for the language selection button",
        translations: { en: "Language", he: "שפה" }
    },

    // Hero Section
    "hero.badge": {
        description: "Badge text in the hero section",
        translations: { en: "Meet Talmify AI", he: "הכירו את Talmify AI" }
    },
    "hero.title_line1": {
        description: "First line of the main hero title",
        translations: { en: "Your study life,", he: "חיי הלימודים שלך," }
    },
    "hero.title_line2": {
        description: "Second line of the main hero title (gradient text)",
        translations: { en: "intelligently organized.", he: "מאורגנים בחכמה." }
    },
    "hero.description": {
        description: "Description text in the hero section",
        translations: { en: "Manage courses, sync calendars, and chat with your personal AI assistant to stay ahead. Designed exclusively for students on iOS and iPadOS.", he: "נהל קורסים, סנכרן יומנים וצ'אט עם עוזר ה-AI האישי שלך כדי להישאר צעד אחד קדימה. עוצב באופן בלעדי לסטודנטים ב-iOS ו-iPadOS." }
    },
    "hero.download_sub": {
        description: "Subtext above 'App Store' in the download button",
        translations: { en: "Download on the", he: "הורד ב-" }
    },

    // Chat Demo
    "chat.status": {
        description: "Status text under the AI assistant name",
        translations: { en: "Always active", he: "תמיד פעיל" }
    },
    "chat.msg1": {
        description: "First chat message (User)",
        translations: { en: "When is my Physics midterm?", he: "מתי מבחן האמצע בפיזיקה?" }
    },
    "chat.msg2": {
        description: "First chat response (Bot)",
        translations: { en: "It's next Monday at 9:00 AM in Room 4B. ⚛️", he: "ביום שני הבא ב-9:00 בבוקר בחדר 4B. ⚛️" }
    },
    "chat.msg3": {
        description: "Second chat message (User)",
        translations: { en: "I added the Chemistry assignment.", he: "הוספתי את המטלה בכימיה." }
    },
    "chat.msg4": {
        description: "Second chat response (Bot)",
        translations: { en: "Got it! Due date is set for Friday. 🧪", he: "קיבלתי! תאריך ההגשה נקבע ליום שישי. 🧪" }
    },
    "chat.msg5": {
        description: "Third chat message (User)",
        translations: { en: "Remind me to study for it tonight.", he: "תזכיר לי ללמוד לזה הערב." }
    },
    "chat.msg6": {
        description: "Third chat response (Bot)",
        translations: { en: "Done! Reminder set for 7:00 PM tonight. 🌙", he: "בוצע! תזכורת נקבעה ל-19:00 הערב. 🌙" }
    },

    // Features Section
    "features.badge": {
        description: "Badge text for the features section",
        translations: { en: "Features", he: "תכונות" }
    },
    "features.title": {
        description: "Main title of the features section",
        translations: { en: "Everything a student needs.", he: "כל מה שסטודנט צריך." }
    },
    "features.subtitle": {
        description: "Subtitle of the features section",
        translations: { en: "Powerful tools wrapped in a beautiful interface.", he: "כלים עוצמתיים עטופים בממשק יפהפה." }
    },
    "features.customization.title": {
        description: "Title for the Customization feature",
        translations: { en: "Total Customization", he: "התאמה אישית מלאה" }
    },
    "features.customization.desc": {
        description: "Description for the Customization feature",
        translations: { en: "Create courses with custom icons and colors. Organize lectures, assignments, and tests in one place.", he: "צור קורסים עם אייקונים וצבעים מותאמים אישית. ארגן הרצאות, מטלות ומבחנים במקום אחד." }
    },
    "features.sync.title": {
        description: "Title for the Sync feature",
        translations: { en: "Unlimited Calendar Sync", he: "סנכרון יומן ללא הגבלה" }
    },
    "features.sync.desc": {
        description: "Description for the Sync feature",
        translations: { en: "Sync your schedule to all your external calendars on your iPhone and iPad. No limits on the number of connected calendars.", he: "סנכרון את הלו\"ז שלך לכל היומנים החיצוניים באייפון ובאייפד. ללא הגבלה על מספר היומנים המחוברים." }
    },
    "features.grades.title": {
        description: "Title for the Grades feature",
        translations: { en: "Grades & Attendance", he: "ציונים ונוכחות" }
    },
    "features.grades.desc": {
        description: "Description for the Grades feature",
        translations: { en: "Visual reports for every course. Know exactly where you stand with attendance and GPA.", he: "דוחות ויזואליים לכל קורס. דע בדיוק איפה אתה עומד מבחינת נוכחות וממוצע ציונים." }
    },
    "features.notifications.title": {
        description: "Title for the Notifications feature",
        translations: { en: "Human Notifications", he: "התראות אנושיות" }
    },
    "features.notifications.desc": {
        description: "Description for the Notifications feature",
        translations: { en: "Reminders that feel like a friend text, not a robot alert. Customizable for every single event.", he: "תזכורות שמרגישות כמו הודעה מחבר, לא התראה מרובוט. ניתן להתאמה אישית לכל אירוע." }
    },
    "features.demo.time": {
        description: "Time shown in the notification demo",
        translations: { en: "now", he: "עכשיו" }
    },
    "features.demo.text": {
        description: "Text shown in the notification demo",
        translations: { en: "Yo! 📚 History essay is due tomorrow. Don't pull an all-nighter again!", he: "היי! 📚 המסה בהיסטוריה להגשה מחר. אל תשאר ער כל הלילה שוב!" }
    },

    // Integration Section
    "integration.badge": {
        description: "Badge text for the integration section",
        translations: { en: "Apple Exclusive", he: "בלעדי לאפל" }
    },
    "integration.title_line1": {
        description: "First line of the integration section title",
        translations: { en: "Deeply Integrated", he: "אינטגרציה עמוקה" }
    },
    "integration.title_line2": {
        description: "Second line of the integration section title",
        translations: { en: "with iOS & iPadOS.", he: "עם iOS ו-iPadOS." }
    },
    "integration.description": {
        description: "Description text for the integration section",
        translations: { en: "Talmify isn't just an app; it's part of your iPhone and iPad ecosystem. Enjoy seamless support for Widgets, Shortcuts, and Siri.", he: "Talmify היא לא סתם אפליקציה; היא חלק מהאקוסיסטם של האייפון והאייפד שלך. תהנה מתמיכה חלקה בווידג'טים, קיצורי דרך וסירי." }
    },
    "integration.widgets.title": {
        description: "Title for the Widgets feature",
        translations: { en: "Interactive Widgets", he: "ווידג'טים אינטראקטיביים" }
    },
    "integration.widgets.desc": {
        description: "Description for the Widgets feature",
        translations: { en: "Check your schedule, mark tasks complete, and view grades right from your Home Screen without opening the app.", he: "בדוק את הלו\"ז, סמן משימות שהושלמו וצפה בציונים ישירות ממסך הבית מבלי לפתוח את האפליקציה." }
    },
    "integration.siri.title": {
        description: "Title for the Siri feature",
        translations: { en: "Siri & Shortcuts", he: "סירי וקיצורי דרך" }
    },
    "integration.siri.desc": {
        description: "Description for the Siri feature",
        translations: { en: "\"Hey Siri, what's my homework?\" Build custom automations and control your study flow with voice.", he: "\"היי סירי, מה שיעורי הבית שלי?\" בנה אוטומציות מותאמות אישית ושלוט בזרימת הלימודים שלך באמצעות הקול." }
    },
    "integration.icloud.title": {
        description: "Title for the iCloud feature",
        translations: { en: "Secure iCloud Backup", he: "גיבוי iCloud מאובטח" }
    },
    "integration.icloud.desc": {
        description: "Description for the iCloud feature",
        translations: { en: "Your data stays yours. Fast, encrypted syncing across all your Apple devices via your private iCloud account.", he: "הנתונים שלך נשארים שלך. סנכרון מהיר ומוצפן בין כל מכשירי אפל שלך דרך חשבון ה-iCloud הפרטי שלך." }
    },

    // Global Section
    "global.title": {
        description: "Title for the Global section",
        translations: { en: "Global Education", he: "חינוך גלובלי" }
    },
    "global.subtitle": {
        description: "Subtitle for the Global section",
        translations: { en: "Breaking language barriers in 60+ languages.", he: "שוברים מחסומי שפה ב-60+ שפות." }
    },

    // CTA Section
    "cta.title": {
        description: "Main title in the CTA footer",
        translations: { en: "Ready to ace your semester?", he: "מוכן להצטיין בסמסטר?" }
    },
    "cta.subtitle": {
        description: "Subtitle in the CTA footer",
        translations: { en: "Join thousands of students organizing their academic life with Talmify.", he: "הצטרף לאלפי סטודנטים המארגנים את חייהם האקדמיים עם Talmify." }
    },
    "cta.download_sub": {
        description: "Subtext in the CTA download button",
        translations: { en: "Download on the", he: "הורד ב-" }
    },
    "cta.exclusive": {
        description: "Exclusivity text in the CTA footer",
        translations: { en: "Available exclusively for iOS & iPadOS", he: "זמין בלעדית ל-iOS ו-iPadOS" }
    },

    // Footer
    "footer.copyright": {
        description: "Copyright text",
        translations: { en: "© 2025 Talmify. All rights reserved.", he: "© 2025 Talmify. כל הזכויות שמורות." }
    },
    "footer.terms": {
        description: "Link to Terms of Service",
        translations: { en: "Terms of Service", he: "תנאי שימוש" }
    },
    "footer.privacy": {
        description: "Link to Privacy Policy",
        translations: { en: "Privacy Policy", he: "מדיניות פרטיות" }
    },
    "footer.accessibility": {
        description: "Link to Accessibility Statement",
        translations: { en: "Accessibility Statement", he: "הצהרת נגישות" }
    }
};

// Global state
let currentLang = 'en';
let translations = {};

// Initialize translations object from LOCALIZATION_DATA
function generateTranslations() {
    const langs = Object.keys(LANGUAGE_CONFIG);
    langs.forEach(lang => {
        translations[lang] = {};
        Object.keys(LOCALIZATION_DATA).forEach(key => {
            if (LOCALIZATION_DATA[key].translations[lang]) {
                translations[lang][key] = LOCALIZATION_DATA[key].translations[lang];
            } else {
                // Fallback to English if translation missing
                translations[lang][key] = LOCALIZATION_DATA[key].translations['en'];
            }
        });
    });
}

// Language Modal Functions
function openLanguageModal() {
    const modal = document.getElementById('language-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

function closeLanguageModal() {
    const modal = document.getElementById('language-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function selectLanguage(lang) {
    if (LANGUAGE_CONFIG[lang]) {
        currentLang = lang;
        setLanguage(lang);
        closeLanguageModal();
    }
}

function renderLanguageOptions() {
    const grid = document.getElementById('language-grid');
    if (!grid) return;

    grid.innerHTML = '';
    Object.keys(LANGUAGE_CONFIG).forEach(code => {
        const lang = LANGUAGE_CONFIG[code];
        const btn = document.createElement('button');
        btn.className = 'flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-primary hover:bg-slate-50 transition group';
        btn.onclick = () => selectLanguage(code);

        const nameSpan = document.createElement('span');
        nameSpan.className = 'font-medium text-slate-700 group-hover:text-brand-primary';
        nameSpan.textContent = lang.nativeName;

        // Add checkmark if selected
        if (code === currentLang) {
            btn.classList.add('border-brand-primary', 'bg-slate-50');
            nameSpan.classList.add('text-brand-primary', 'font-bold');
            const check = document.createElement('i');
            check.className = 'fas fa-check text-brand-primary';
            btn.appendChild(nameSpan);
            btn.appendChild(check);
        } else {
            btn.appendChild(nameSpan);
        }

        grid.appendChild(btn);
    });
}

function setLanguage(lang) {
    const html = document.documentElement;
    const config = LANGUAGE_CONFIG[lang];

    html.setAttribute('lang', lang);
    html.setAttribute('dir', config.dir);

    if (config.dir === 'rtl') {
        html.classList.add('rtl');
    } else {
        html.classList.remove('rtl');
    }

    // Update Language Button Text (if any)
    const desktopBtnText = document.getElementById('lang-toggle-text');
    if (desktopBtnText) {
        // Show current language code or name
        desktopBtnText.innerText = codeToLabel(lang);
    }

    const mobileBtnText = document.getElementById('mobile-lang-text');
    if (mobileBtnText) {
        // Use the translated "Language" string or specific text
        mobileBtnText.innerText = translations[lang]["nav.language"] || "Language";
    }

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Re-render modal to update selection state
    renderLanguageOptions();
}

function codeToLabel(code) {
    return code.toUpperCase();
}

// Initialize
generateTranslations();
