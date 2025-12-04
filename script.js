document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const langSwitcher = document.getElementById('lang-switcher');
    const htmlEl = document.documentElement;

    // --- Data: Translations, Skills, and Posts ---
    const translations = {
        en: {
            "meta.title": "Farhan Nosrati | Senior Frontend Engineer",
            "meta.description": "The professional portfolio of Farhan Nosrati, a Senior Frontend Engineer.",
            "nav.about": "About", "nav.skills": "Skills", "nav.experience": "Experience", "nav.posts": "Posts", "nav.contact": "Contact",
            "hero.title": "Hi, I'm Farhan Nosrati", "hero.subtitle": "Senior Frontend Engineer",
            "about.title": "Professional Summary", "about.text": "Senior Frontend Engineer with strong expertise in React, Next.js, and modern JavaScript/TypeScript ecosystems. Experienced in designing scalable UI architecture, creating performant, reusable components, and delivering production-ready features.",
            "skills.title": "Core Technical Skills",
            "experience.title": "Professional Experience",
            "experience.senior.role": "Senior Frontend Engineer", "experience.senior.company": "Freelance", "experience.senior.date": "2024 – Present",
            "experience.developer.role": "Frontend Developer", "experience.developer.company": "Personal Projects", "experience.developer.date": "2022 – 2024",
            "posts.title": "Latest Posts", "posts.readMore": "Read More",
            "post1.title": "The Power of Server Components in Next.js 14", "post1.description": "Exploring how Next.js 14 leverages React Server Components to reduce bundle size and improve performance by rendering on the server.",
            "post2.title": "State Management: Redux Toolkit vs. Zustand", "post2.description": "A comparative analysis of two popular state management libraries in the React ecosystem, focusing on boilerplate, bundle size, and ease of use.",
            "contact.title": "Get In Touch", "footer.text": "© 2024 Farhan Nosrati. All Rights Reserved."
        },
        fa: {
            "meta.title": "فرحان نصرتی | توسعه‌دهنده ارشد فرانت‌اند",
            "meta.description": "پورتفولیوی حرفه‌ای فرحان نصرتی، توسعه‌دهنده ارشد فرانت‌اند.",
            "nav.about": "درباره من", "nav.skills": "مهارت‌ها", "nav.experience": "سوابق شغلی", "nav.posts": "پست‌ها", "nav.contact": "تماس",
            "hero.title": "سلام، من فرهان نصرتی هستم", "hero.subtitle": "توسعه‌دهنده ارشد فرانت‌اند",
            "about.title": "خلاصه حرفه‌ای", "about.text": "توسعه‌دهنده ارشد فرانت‌اند با تخصص قوی در اکوسیستم‌های مدرن جاوا اسکریپت/تایپ‌اسکریپت، React و Next.js. با تجربه در طراحی معماری UI مقیاس‌پذیر، ساخت کامپوننت‌های قابل استفاده مجدد و با کارایی بالا، و ارائه ویژگی‌های آماده برای پروداکشن.",
            "skills.title": "مهارت‌های فنی اصلی",
            "experience.title": "سوابق شغلی",
            "experience.senior.role": "توسعه‌دهنده ارشد فرانت‌اند", "experience.senior.company": "فریلنس", "experience.senior.date": "۱۴۰۲ – تاکنون",
            "experience.developer.role": "توسعه‌دهنده فرانت‌اند", "experience.developer.company": "پروژه‌های شخصی", "experience.developer.date": "۱۴۰۰ – ۱۴۰۲",
            "posts.title": "آخرین پست‌ها", "posts.readMore": "بیشتر بخوانید",
            "post1.title": "قدرت Server Components در Next.js 14", "post1.description": "بررسی اینکه چگونه Next.js 14 از React Server Components برای کاهش حجم باندل و بهبود عملکرد از طریق رندر سمت سرور استفاده می‌کند.",
            "post2.title": "مدیریت وضعیت: Redux Toolkit در مقابل Zustand", "post2.description": "تحلیل مقایسه‌ای دو کتابخانه محبوب مدیریت وضعیت در اکوسیستم React، با تمرکز بر حجم کد، اندازه باندل و سهولت استفاده.",
            "contact.title": "ارتباط با من", "footer.text": "© 2024 فرحان نصرتی. تمام حقوق محفوظ است."
        },
        ar: {
            "meta.title": "فرحان نصرتي | كبير مهندسي الواجهة الأمامية",
            "meta.description": "ملف الأعمال الاحترافي لفرحان نصرتي، كبير مهندسي الواجهة الأمامية.",
            "nav.about": "عني", "nav.skills": "المهارات", "nav.experience": "الخبرة", "nav.posts": "المنشورات", "nav.contact": "اتصل",
            "hero.title": "أهلاً، أنا فرحان نصرتي", "hero.subtitle": "كبير مهندسي الواجهة الأمامية",
            "about.title": "ملخص احترافي", "about.text": "كبير مهندسي الواجهة الأمامية بخبرة قوية في الأنظمة الحديثة لجافاسكريبت/تايبسكريبت، React، و Next.js. من ذوي الخبرة في تصميم بنية واجهة مستخدم قابلة للتطوير، وإنشاء مكونات عالية الأداء وقابلة لإعادة الاستخدام، وتقديم ميزات جاهزة للإنتاج.",
            "skills.title": "المهارات التقنية الأساسية",
            "experience.title": "الخبرة المهنية",
            "experience.senior.role": "كبير مهندسي الواجهة الأمامية", "experience.senior.company": "مستقل", "experience.senior.date": "2024 – حتى الآن",
            "experience.developer.role": "مطور الواجهة الأمامية", "experience.developer.company": "مشاريع شخصية", "experience.developer.date": "2022 – 2024",
            "posts.title": "أحدث المنشورات", "posts.readMore": "اقرأ المزيد",
            "post1.title": "قوة مكونات الخادم في Next.js 14", "post1.description": "استكشاف كيف يستفيد Next.js 14 من مكونات خادم React لتقليل حجم الحزمة وتحسين الأداء عن طريق العرض من جانب الخادم.",
            "post2.title": "إدارة الحالة: Redux Toolkit مقابل Zustand", "post2.description": "تحليل مقارن لمكتبتين شائعتين لإدارة الحالة في نظام React، مع التركيز على حجم الكود، وحجم الحزمة، وسهولة الاستخدام.",
            "contact.title": "تواصل معي", "footer.text": "© 2024 فرحان نصرتي. جميع الحقوق محفوظة."
        }
    };
    
    // --- Functions ---
    const applyTheme = (theme) => {
        htmlEl.setAttribute('data-theme', theme);
        themeSwitcher.textContent = theme === 'light' ? '🌙' : '☀️';
        localStorage.setItem('theme', theme);
    };

    const applyLanguage = (lang) => {
        htmlEl.lang = lang;
        htmlEl.dir = (lang === 'fa' || lang === 'ar') ? 'rtl' : 'ltr';
        
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            const translation = key.split('.').reduce((obj, k) => obj?.[k], translations[lang]);
            if (translation) {
                if (el.tagName === 'META') {
                    el.content = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });
        
        populatePosts(lang);
        // Call other dynamic content functions if needed (e.g., skills, experience)
        
        langSwitcher.value = lang;
        localStorage.setItem('language', lang);
        observeElements(); // Re-run animations for new content
    };

    const populatePosts = (lang) => {
        const container = document.querySelector('.posts-content');
        const template = document.getElementById('post-template');
        if (!container || !template) return;

        container.innerHTML = ''; // Clear previous entries
        const t = translations[lang];
        
        const posts = ['post1', 'post2'];
        
        posts.forEach(postKey => {
            if (t[postKey]) {
                const card = template.content.cloneNode(true);
                card.querySelector('.post-title').textContent = t[postKey].title;
                card.querySelector('.post-description').textContent = t[postKey].description;
                container.appendChild(card);
            }
        });
    };

    // --- Animation Observer ---
    let observer;
    const observeElements = () => {
        const hiddenElements = document.querySelectorAll('.hidden');
        if (observer) {
            observer.disconnect();
        }

        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        hiddenElements.forEach(el => observer.observe(el));
    };

    // --- Event Listeners ---
    themeSwitcher.addEventListener('click', () => {
        const newTheme = htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });

    langSwitcher.addEventListener('change', (e) => applyLanguage(e.target.value));

    // --- Initial Load ---
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('language') || 'fa'; 
    
    applyTheme(savedTheme);
    applyLanguage(savedLang);
});
