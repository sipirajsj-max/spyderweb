//==============================================================================
// 1. Language Data - English, Tamil, Sinhala
//==============================================================================
const translations = {
    en: {
        foot_contact: "CONTACT US",
        contact_subtitle: "Call us from anywhere in Sri Lanka",
        placeholder_name: "Your Name",
        placeholder_email: "Your Email",
        placeholder_msg: "How can we help you?",
        btn_send: "SEND MESSAGE",
        success_msg: "Thank you! Your message has been sent successfully.",
        nav_home: "HOME",
        nav_about: "ABOUT"
    },
    ta: {
        foot_contact: "தொடர்பு கொள்ள",
        contact_subtitle: "இலங்கையின் எந்தப் பகுதியிலிருந்தும் எங்களை அழையுங்கள்",
        placeholder_name: "உங்கள் பெயர்",
        placeholder_email: "உங்கள் மின்னஞ்சல்",
        placeholder_msg: "நாங்கள் உங்களுக்கு எப்படி உதவலாம்?",
        btn_send: "மெசேஜ் அனுப்புக",
        success_msg: "நன்றி! உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது.",
        nav_home: "முகப்பு",
        nav_about: "எங்களைப் பற்றி"
    },
    si: {
        foot_contact: "සම්බන්ධ වන්න",
        contact_subtitle: "ශ්‍රී ලංකාවේ ඕනෑම තැනක සිට අප අමතන්න",
        placeholder_name: "ඔබේ නම",
        placeholder_email: "ඔබේ විද්‍යුත් තැපෑල",
        placeholder_msg: "අපට ඔබට උදව් කරන්නේ කෙසේද?",
        btn_send: "පණිවිඩය යවන්න",
        success_msg: "ස්තූතියි! ඔබේ පණිවිඩය සාර්ථකව යවන ලදී.",
        nav_home: "මුල් පිටුව",
        nav_about: "අප ගැන"
    }
};

//==============================================================================
// 2. Language Switching Logic
//==============================================================================
function changeLanguage(lang) {
    // Save preference to local storage
    localStorage.setItem('spyderWebLang', lang);

    const elements = document.querySelectorAll('[data-key]');

    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        
        if (translations[lang] && translations[lang][key]) {
            // Check if it's an input or textarea to change the placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                // Change the inner text for other elements (h1, p, span, button)
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Optional: Add active class to the current language button
    updateLangSwitcherUI(lang);
}

function updateLangSwitcherUI(lang) {
    const buttons = document.querySelectorAll('.lang-switcher button');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        // Match the language code in the function call
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });
}

//==============================================================================
// 3. Form Submission Handling
//==============================================================================
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the current language for the alert message
    const currentLang = localStorage.getItem('spyderWebLang') || 'en';
    
    // Show success alert
    alert(translations[currentLang].success_msg);
    
    // Clear the form fields
    this.reset();
});

//==============================================================================
// 4. Initial Load
//==============================================================================
window.addEventListener('load', () => {
    // Get saved language or default to English
    const savedLang = localStorage.getItem('spyderWebLang') || 'en';
    changeLanguage(savedLang);
});