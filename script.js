document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const langSwitcher = document.getElementById('lang-switcher');
    const htmlEl = document.documentElement;

    // --- Data: Translations and Skills ---
    const translations = {
        en: {
            "meta.title": "Farhan Nosrati | Senior Frontend Engineer",
            "meta.description": "The professional portfolio of Farhan Nosrati, a Senior Frontend Engineer.",
            "nav.about": "About", "nav.skills": "Skills", "nav.experience": "Experience", "nav.contact": "Contact",
            "hero.title": "Hi, I'm Farhan Nosrati", "hero.subtitle": "Senior Frontend Engineer", "hero.description": "React • Next.js • TypeScript", "hero.github": "View GitHub",
            "about.title": "Professional Summary", "about.text": "Senior Frontend Engineer with strong expertise in React, Next.js, and modern JavaScript/TypeScript ecosystems. Experienced in designing scalable UI architecture, creating performant, reusable components, and delivering production-ready features in fast-paced, remote-first teams.",
            "skills.title": "Core Technical Skills", "skills.languages": "Languages", "skills.frontend": "Frontend", "skills.styling": "UI / Styling", "skills.architecture": "Architecture", "skills.data": "Data / APIs", "skills.tooling": "Tooling", "skills.other": "Other",
            "experience.title": "Professional Experience",
            "experience.senior.role": "Senior Frontend Engineer — Remote", "experience.senior.company": "Freelance / Project-Based", "experience.senior.date": "Mar 2024 – Present",
            "experience.senior.points": ["Led development of Next.js & React applications.", "Built reusable UI components.", "Integrated REST APIs and optimized data fetching."],
            "experience.developer.role": "Frontend Developer — Remote", "experience.developer.company": "Personal & Production Projects",
            "experience.developer.points": ["Migrated UI components to modern React patterns.", "Designed responsive layouts with Tailwind CSS.", "Built dynamic, data-driven pages."],
            "contact.title": "Get In Touch", "contact.email": "Email Me", "contact.github": "My GitHub",
            "footer.text": "© 2024 Farhan Nosrati. All Rights Reserved."
        },
        fa: {
            "meta.title": "فرحان نصرتی | توسعه‌دهنده ارشد فرانت‌اند",
            "meta.description": "پورتفولیوی حرفه‌ای فرحان نصرتی، توسعه‌دهنده ارشد فرانت‌اند.",
            "nav.about": "درباره من", "nav.skills": "مهارت‌ها", "nav.experience": "سوابق شغلی", "nav.contact": "تماس",
            "hero.title": "سلام، من فرهان نصرتی هستم", "hero.subtitle": "توسعه‌دهنده ارشد فرانت‌اند", "hero.description": "React • Next.js • TypeScript", "hero.github": "مشاهده گیت‌هاب",
            "about.title": "خلاصه حرفه‌ای", "about.text": "توسعه‌دهنده ارشد فرانت‌اند با تخصص قوی در اکوسیستم‌های مدرن جاوا اسکریپت/تایپ‌اسکریپت، React و Next.js. با تجربه در طراحی معماری‌های UI مقیاس‌پذیر، ساخت کامپوننت‌های قابل استفاده مجدد و با کارایی بالا، و ارائه ویژگی‌های آماده برای پروداکشن در تیم‌های سریع و دورکار.",
            "skills.title": "مهارت‌های فنی اصلی", "skills.languages": "زبان‌ها", "skills.frontend": "فرانت‌اند", "skills.styling": "UI / استایل‌دهی", "skills.architecture": "معماری", "skills.data": "دیتا / API", "skills.tooling": "ابزارها", "skills.other": "سایر",
            "experience.title": "سوابق شغلی",
            "experience.senior.role": "توسعه‌دهنده ارشد فرانت‌اند — دورکار", "experience.senior.company": "فریلنس / پروژه‌محور", "experience.senior.date": "اسفند ۱۴۰۲ – تاکنون",
            "experience.senior.points": ["رهبری توسعه اپلیکیشن‌های Next.js و React.", "ساخت کامپوننت‌های UI قابل استفاده مجدد.", "یکپارچه‌سازی REST API و بهینه‌سازی واکشی دیتا."],
            "experience.developer.role": "توسعه‌دهنده فرانت‌اند — دورکار", "experience.developer.company": "پروژه‌های شخصی و پروداکشن",
            "experience.developer.points": ["مهاجرت کامپوننت‌های UI به الگوهای مدرن React.", "طراحی لی‌اوت‌های واکنش‌گرا با Tailwind CSS.", "ساخت صفحات داینامیک و داده‌محور."],
            "contact.title": "ارتباط با من", "contact.email": "ارسال ایمیل", "contact.github": "گیت‌هاب من",
            "footer.text": "© 2025 فرهان نصرتی. تمام حقوق محفوظ است."
        }
    };
    
    const skillsData = {
        languages: "JavaScript (ES6+), TypeScript, HTML5, CSS3",
        frontend: "React, Next.js, Redux Toolkit, Context API",
        styling: "Tailwind CSS, Styled Components, Sass",
        architecture: "Component-driven development, Modular design",
        data: "REST APIs, Axios, React Query",
        tooling: "Git, GitHub, ESLint, Prettier, Vercel",
        other: "Performance Optimization, Accessibility"
    };

    // --- Functions ---
    const applyTheme = (theme) => {
        htmlEl.setAttribute('data-theme', theme);
        themeSwitcher.textContent = theme === 'light' ? '🌙' : '☀️';
        localStorage.setItem('theme', theme);
    };

    const applyLanguage = (lang) => {
        htmlEl.lang = lang;
        htmlEl.dir = lang === 'fa' ? 'rtl' : 'ltr';
        
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            const translation = key.split('.').reduce((obj, k) => obj?.[k], translations[lang]);
            if (translation) {
                if (el.tagName === 'META') el.content = translation;
                else el.textContent = translation;
            }
        });
        
        populateSkills(lang);
        populateExperience(lang);

        langSwitcher.value = lang;
        localStorage.setItem('language', lang);
    };

    const populateSkills = (lang) => {
        const container = document.querySelector('.skills-content');
        const t = translations[lang].skills;
        container.innerHTML = Object.entries(skillsData)
            .map(([key, value]) => `<p><strong>${t[key] || key}:</strong> ${value}</p>`)
            .join('');
    };
    
    const populateExperience = (lang) => {
        const container = document.querySelector('.experience-content');
        const t = translations[lang].experience;
        container.innerHTML = `
            <div class="card experienceItem">
                <h3>${t.senior.role}</h3>
                <span>${t.senior.company} | ${t.senior.date}</span>
                <ul>${t.senior.points.map(p => `<li>${p}</li>`).join('')}</ul>
            </div>
            <div class="card experienceItem">
                <h3>${t.developer.role}</h3>
                <span>${t.developer.company}</span>
                <ul>${t.developer.points.map(p => `<li>${p}</li>`).join('')}</ul>
            </div>`;
    };

    // --- Event Listeners ---
    themeSwitcher.addEventListener('click', () => {
        const newTheme = htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });

    langSwitcher.addEventListener('change', (e) => applyLanguage(e.target.value));

    // --- Initial Load ---
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('language') || 'en';
    
    applyTheme(savedTheme);
    applyLanguage(savedLang);
});
