const translations = {
    en: {
        terms_title: "TERMS OF SERVICE",
        terms_subtitle: "Agreement between users and Spyder Web Sri Lanka",
        t1_h: "1. User Accounts",
        t1_p: "Users must provide accurate information. One person is allowed only one account. Fake profiles will be permanently banned.",
        t2_h: "2. Online Job Payments",
        t2_p: "For freelance work, clients must deposit the full payment to Spyder Web. Funds are only released to workers after client approval.",
        t3_h: "3. Service Fees",
        t3_p: "Spyder Web charges a small percentage (Service Fee) from every successful online transaction for platform maintenance.",
        t4_h: "4. Disputes & Refunds",
        t4_p: "If a worker fails to deliver, the client can request a refund. Spyder Web's decision in disputes is final and binding.",
        t5_h: "5. Local Offline Jobs",
        t5_p: "For offline jobs (Masonry, Plumbing etc.), payments are handled directly between the parties. Spyder Web is not liable for offline issues.",
        last_update: "Last Updated: April 2026"
    },
    ta: {
        terms_title: "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
        terms_subtitle: "பயனர்களுக்கும் ஸ்பைடர் வெப் நிறுவனத்திற்கும் இடையிலான ஒப்பந்தம்",
        t1_h: "1. பயனர் கணக்குகள்",
        t1_p: "பயனர்கள் துல்லியமான தகவல்களை வழங்க வேண்டும். ஒருவருக்கு ஒரு கணக்கு மட்டுமே அனுமதிக்கப்படும். போலி கணக்குகள் நிரந்தரமாக தடை செய்யப்படும்.",
        t2_h: "2. ஆன்லைன் வேலைக் கொடுப்பனவுகள்",
        t2_p: "ஃப்ரீலான்ஸ் வேலைகளுக்கு, வாடிக்கையாளர் முழுத் தொகையையும் ஸ்பைடர் வெப் தளத்தில் வைப்பு செய்ய வேண்டும். வேலை முடிந்த பின்பே தொழிலாளிக்கு பணம் வழங்கப்படும்.",
        t3_h: "3. சேவை கட்டணங்கள்",
        t3_p: "தளத்தின் பராமரிப்பிற்காக ஒவ்வொரு ஆன்லைன் பணப்பரிமாற்றத்திலிருந்தும் ஒரு சிறிய சதவீதத்தை (Service Fee) ஸ்பைடர் வெப் வசூலிக்கும்.",
        t4_h: "4. தகராறு மற்றும் ரீஃபண்ட்",
        t4_p: "தொழிலாளி வேலையை முடிக்கத் தவறினால், வாடிக்கையாளர் பணத்தைத் திரும்பக் கோரலாம். இது குறித்த தளத்தின் முடிவே இறுதியானது.",
        t5_h: "5. உள்ளூர் நேரடி வேலைகள்",
        t5_p: "மேசன், பிளம்பர் போன்ற நேரடி வேலைகளுக்கு, பணப்பரிமாற்றம் இரு தரப்பினருக்கும் இடையே நேரடியாக நடைபெற வேண்டும். இதில் தளம் பொறுப்பேற்காது.",
        last_update: "கடைசியாக புதுப்பிக்கப்பட்டது: ஏப்ரல் 2026"
    },
    si: {
        terms_title: "සේවා නියමයන්",
        terms_subtitle: "පරිශීලකයින් සහ Spyder Web අතර ගිවිසුම",
        t1_h: "1. පරිශීලක ගිණුම්",
        t1_p: "පරිශීලකයින් නිවැරදි තොරතුරු සැපයිය යුතුය. ව්‍යාජ ගිණුම් ස්ථිරවම තහනම් කරනු ලැබේ.",
        t2_h: "2. මාර්ගගත රැකියා ගෙවීම්",
        t2_p: "නිදහස් රැකියා සඳහා, සේවාදායකයා සම්පූර්ණ ගෙවීම Spyder Web වෙත තැන්පත් කළ යුතුය. සේවාදායකයාගේ අනුමැතියෙන් පසු මුදල් නිදහස් කෙරේ.",
        t3_h: "3. සේවා ගාස්තු",
        t3_p: "වේදිකාව නඩත්තු කිරීම සඳහා සෑම සාර්ථක ගනුදෙනුවකින්ම කුඩා ප්‍රතිශතයක් අය කෙරේ.",
        t4_h: "4. ආරවුල් සහ මුදල් ආපසු ගෙවීම්",
        t4_p: "වැඩ නිම කිරීමට අපොහොසත් වුවහොත්, සේවාදායකයාට මුදල් ආපසු ඉල්ලා සිටිය හැක. මේ පිළිබඳ අවසන් තීරණය Spyder Web සතුය.",
        t5_h: "5. දේශීය රැකියා",
        t5_p: "දේශීය රැකියා (මේසන්, ජලනල ආදිය) සඳහා ගෙවීම් පාර්ශවයන් අතර සෘජුවම සිදු කෙරේ.",
        last_update: "අවසන් වරට යාවත්කාලීන කළේ: 2026 අප්‍රේල්"
    }
};

function changeLanguage(lang) {
    localStorage.setItem('spyderWebLang', lang);
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('spyderWebLang') || 'en';
    changeLanguage(savedLang);
});