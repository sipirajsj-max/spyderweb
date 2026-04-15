const translations = {
    en: {
        priv_title: "PRIVACY POLICY",
        priv_subtitle: "How we protect your personal data at Spyder Web",
        p1_h: "1. Information We Collect",
        p1_p: "We collect your name, phone number, and email when you register. For workers, we may collect professional skills and payment details.",
        p2_h: "2. How We Use Data",
        p2_p: "Your data is used to connect you with clients/workers, process payments, and improve our services in Sri Lanka.",
        p3_h: "3. Data Security",
        p3_p: "We use SSL encryption to keep your information safe. Your private contact details are never shared with third-party advertisers.",
        p4_h: "4. Cookies",
        p4_p: "Our website uses cookies to remember your language preferences and provide a faster browsing experience.",
        p5_h: "5. Your Rights",
        p5_p: "You have the right to edit or delete your personal information from our database at any time through your profile settings.",
        last_update: "Last Updated: April 2026"
    },
    ta: {
        priv_title: "தனியுரிமைக் கொள்கை",
        priv_subtitle: "உங்கள் தரவுகளை நாங்கள் எவ்வாறு பாதுகாப்போம்?",
        p1_h: "1. சேகரிக்கப்படும் தகவல்கள்",
        p1_p: "பதிவின் போது உங்கள் பெயர், போன் நம்பர் மற்றும் மின்னஞ்சலை சேகரிக்கிறோம். தொழிலாளிகளிடம் அவர்களது வேலைத் திறன்கள் மற்றும் வங்கி விவரங்களைக் கோரலாம்.",
        p2_h: "2. தகவல்களின் பயன்பாடு",
        p2_p: "உங்களை வாடிக்கையாளர்களுடன் இணைக்கவும், பணப்பரிமாற்றங்களைச் செய்யவும் மற்றும் எமது சேவையை மேம்படுத்தவும் மட்டுமே உங்கள் தகவல்கள் பயன்படும்.",
        p3_h: "3. தரவு பாதுகாப்பு",
        p3_p: "உங்கள் தகவல்களைப் பாதுகாக்க SSL தொழில்நுட்பத்தைப் பயன்படுத்துகிறோம். உங்கள் தனிப்பட்ட விவரங்கள் விளம்பர நிறுவனங்களுக்கு விற்கப்படாது.",
        p4_h: "4. குக்கீகள் (Cookies)",
        p4_p: "உங்கள் மொழித் தெரிவுகளை நினைவில் வைத்து இணையதளத்தை விரைவாக இயக்க குக்கீகள் பயன்படுகின்றன.",
        p5_h: "5. உங்கள் உரிமைகள்",
        p5_p: "எந்த நேரத்திலும் உங்கள் கணக்கைத் திருத்த அல்லது எமது தரவுத்தளத்திலிருந்து உங்கள் விவரங்களை நீக்க உங்களுக்கு உரிமை உண்டு.",
        last_update: "கடைசியாக புதுப்பிக்கப்பட்டது: ஏப்ரல் 2026"
    },
    si: {
        priv_title: "පෞද්ගලිකත්ව ප්‍රතිපත්තිය",
        priv_subtitle: "ඔබේ දත්ත අපි ආරක්ෂා කරන්නේ කෙසේද?",
        p1_h: "1. අප රැස් කරන තොරතුරු",
        p1_p: "ලියාපදිංචි වීමේදී ඔබගේ නම, දුරකථන අංකය සහ විද්‍යුත් තැපෑල අපි රැස් කරන්නෙමු.",
        p2_h: "2. දත්ත භාවිතය",
        p2_p: "ඔබව සේවාදායකයින් සමඟ සම්බන්ධ කිරීමට සහ ගෙවීම් සැකසීමට ඔබේ දත්ත භාවිතා වේ.",
        p3_h: "3. දත්ත ආරක්ෂාව",
        p3_p: "ඔබේ තොරතුරු සුරක්ෂිතව තබා ගැනීමට අපි SSL සංකේතනය භාවිතා කරමු.",
        p4_h: "4. කුකීස්",
        p4_p: "ඔබේ භාෂා මනාපයන් මතක තබා ගැනීමට කුකීස් භාවිතා කරයි.",
        p5_h: "5. ඔබේ අයිතිවාසිකම්",
        p5_p: "ඔබගේ පෞද්ගලික තොරතුරු ඕනෑම වේලාවක සංස්කරණය කිරීමට හෝ මකා දැමීමට ඔබට අයිතියක් ඇත.",
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