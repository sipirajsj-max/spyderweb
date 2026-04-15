const translations = {
    en: {
        tab_login: "LOGIN",
        tab_register: "REGISTER",
        login_title: "Welcome Back",
        register_title: "Create Account",
        ph_name: "Full Name",
        ph_email: "Email Address",
        ph_phone: "Phone Number",
        ph_password: "Password",
        btn_login: "SIGN IN",
        btn_register: "CREATE ACCOUNT",
        no_account: "Don't have an account?",
        have_account: "Already have an account?"
    },
    ta: {
        tab_login: "உள்நுழைக",
        tab_register: "பதிவு செய்க",
        login_title: "மீண்டும் வருக",
        register_title: "கணக்கை உருவாக்குக",
        ph_name: "முழுப் பெயர்",
        ph_email: "மின்னஞ்சல் முகவரி",
        ph_phone: "தொலைபேசி எண்",
        ph_password: "கடவுச்சொல்",
        btn_login: "உள்நுழைக",
        btn_register: "பதிவு செய்க",
        no_account: "கணக்கு இல்லையா?",
        have_account: "ஏற்கனவே கணக்கு உள்ளதா?"
    },
    si: {
        tab_login: "ලොග් වන්න",
        tab_register: "ලියාපදිංචි වන්න",
        login_title: "නැවත සාදරයෙන් පිළිගනිමු",
        register_title: "ගිණුමක් සාදන්න",
        ph_name: "සම්පූර්ණ නම",
        ph_email: "විද්‍යුත් තැපෑල",
        ph_phone: "දුරකථන අංකය",
        ph_password: "මුරපදය",
        btn_login: "ඇතුළු වන්න",
        btn_register: "ගිණුම සාදන්න",
        no_account: "ගිණුමක් නොමැතිද?",
        have_account: "දැනටමත් ගිණුමක් තිබේද?"
    }
};

function toggleAuth(type) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginToggle = document.getElementById('loginToggle');
    const registerToggle = document.getElementById('registerToggle');

    if (type === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        loginToggle.classList.add('active');
        registerToggle.classList.remove('active');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        loginToggle.classList.remove('active');
        registerToggle.classList.add('active');
    }
}

function changeLanguage(lang) {
    localStorage.setItem('spyderWebLang', lang);
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}

window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('spyderWebLang') || 'en';
    changeLanguage(savedLang);
});