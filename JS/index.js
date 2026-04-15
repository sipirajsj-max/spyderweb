//==============================================================================
// 1. மொழி தரவு (Language Data) - ஆங்கிலம், தமிழ், சிங்களம்
//==============================================================================
const translations = {
    // 🇬🇧 English Content
    en: {
        hero_title: "YOUR SRI LANKAN HUB<br>FOR CREATIVITY & SKILLS",
        hero_subtitle: "SRI LANKA'S PREMIER FREELANCE & CONTENT MARKETPLACE",
        btn_get_started: "GET MORE",
        btn_explore: "EXPLORE CATEGORIES",
        featured_services: "Featured Services",
        service_freelance: "Freelance Jobs",
        service_employee: "Local Jobs Workers",
        foot_about: "ABOUT",
        foot_contact: "CONTACT",
        foot_terms: "TERMS",
        foot_privacy: "PRIVACY"
    },
    // 🇱🇰 Tamil Content
    ta: {
        hero_title: "படைப்பு மற்றும் திறன்களுக்கான<br>உங்கள் இலங்கை மையம்",
        hero_subtitle: "இலங்கையின் முதன்மையான ஃப்ரீலான்ஸ் & உள்ளடக்கச் சந்தை",
        btn_get_started: "மேலும் அறிக",
        btn_explore: "வகைகளை ஆராயுங்கள்",
        featured_services: "சிறப்பு சேவைகள்",
        service_freelance: "ஃப்ரீலான்ஸ் வேலைகள்",
        service_employee: "உள்ளூர் தொழிலாளர்கள்",
        foot_about: "எங்களைப் பற்றி",
        foot_contact: "தொடர்புக்கு",
        foot_terms: "விதிமுறைகள்",
        foot_privacy: "தனிஉரிமை"
    },
    // 🇱🇰 Sinhala Content
    si: {
        hero_title: "නිර්මාණශීලිත්වය සහ කුසලතා සඳහා<br>ඔබේ ශ්‍රී ලාංකික කේන්ද්‍රය",
        hero_subtitle: "ශ්‍රී ලංකාවේ ප්‍රමුඛතම නිදහස් සහ අන්තර්ගත වෙළඳපොළ",
        btn_get_started: "වැඩිදුර දැනගන්න",
        btn_explore: "ප්‍රවර්ග ගවේෂණය කරන්න",
        featured_services: "විශේෂාංගගත සේවාවන්",
        service_freelance: "නිදහස් රැකියා",
        service_employee: "දේශීය රැකියා කම්කරුවන්",
        foot_about: "අප ගැන",
        foot_contact: "සම්බන්ධ වන්න",
        foot_terms: "කොන්දේසි",
        foot_privacy: "පෞද්ගලිකත්වය"
    }
};

//==============================================================================
// 2. மொழியை மாற்றும் செயல்பாடு (Change Language Function)
//==============================================================================
function changeLanguage(lang) {
    // அ. பிரவுசரில் மொழியை சேமிக்க (LocalStorage - Optional, to remember user's choice)
    localStorage.setItem('spyderWebLang', lang);

    // ஆ. அனைத்து 'data-key' எலிமெண்ட்டுகளையும் கண்டறிய
    const elements = document.querySelectorAll('[data-key]');

    // இ. ஒவ்வொரு எலிமெண்ட்டிற்கும் சரியான மொழி உள்ளடக்கத்தை வழங்க
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // HTML உள்ளடக்கத்தை மாற்ற (Inner HTML to support <br>)
            element.innerHTML = translations[lang][key];
        }
    });

    // ஈ. தேர்ந்தெடுக்கப்பட்ட மொழியைப் பிரகாசிக்க வைக்க (Optional, if you have CSS)
    updateLangSwitcher(lang);
}

//==============================================================================
// 3. தேர்ந்தெடுக்கப்பட்ட மொழியைப் பிரகாசிக்க வைக்க (Update Language Switcher UI)
//==============================================================================
function updateLangSwitcher(activeLang) {
    const buttons = document.querySelectorAll('.lang-switcher button');
    buttons.forEach(btn => {
        // active கிளாஸை நீக்க
        btn.classList.remove('active');
        
        // தேர்ந்தெடுக்கப்பட்ட மொழியைச் சரிபார்த்து active கிளாஸைச் சேர்க்க
        if (btn.getAttribute('onclick').includes(activeLang)) {
            btn.classList.add('active');
        }
    });
}

//==============================================================================
// 4. இணையதளம் திறக்கும்போது இயல்புநிலை மொழியை அமைக்க (Default Language on Load)
//==============================================================================
window.addEventListener('load', () => {
    // அ. பிரவுசரில் சேமிக்கப்பட்ட மொழியைச் சரிபார்க்க, இல்லை என்றால் ஆங்கிலம் (Default)
    const savedLang = localStorage.getItem('spyderWebLang') || 'en';
    
    // ஆ. மொழியை மாற்றும் செயல்பாட்டை இயக்க
    changeLanguage(savedLang);
});