// Translation Data
const translations = {
    en: {
        hero: {
            title: "Confusion Hunter",
            subtitle: "Understanding Aadhaar Linking vs DBT Seeding",
            description: "Clear guidance for students and parents on getting scholarship payments right",
            cta: "Learn the Difference",
            ctaSecondary: "Check Your Status"
        },
        difference: {
            title: "What's the Difference?",
            aadhaarLink: "Aadhaar Linking",
            aadhaarLinkDesc: "Just connecting your Aadhaar number to your bank account",
            dbtSeed: "DBT Seeding (Aadhaar Enabled)",
            dbtSeedDesc: "Making your account ready to receive government benefits",
            key: "Key Point: Linking ≠ Seeding!"
        },
        guide: {
            title: "Step-by-Step Seeding Guide",
            step1: "Visit Your Bank Branch",
            step1Desc: "Go to your bank with Aadhaar card and passbook",
            step2: "Request DBT Seeding",
            step2Desc: "Ask specifically for 'Aadhaar seeding for DBT'",
            step3: "Get Confirmation",
            step3Desc: "Ensure you receive written confirmation",
            step4: "Verify Status",
            step4Desc: "Check your DBT status using our tool"
        },
        check: {
            title: "Check DBT Status (Educational Demo)",
            disclaimer: "This is a simulated check for educational purposes only. Not connected to actual NPCI/UIDAI systems.",
            bankLabel: "Bank Account Number",
            aadhaarLabel: "Last 4 digits of Aadhaar",
            checkButton: "Check Status"
        },
        resources: {
            title: "Download Resources",
            infographics: "Infographics & Posters",
            videos: "Video Guides",
            faqs: "FAQs & Documentation"
        },
        chat: {
            title: "Confusion Hunter Assistant",
            greeting: "Hi! I'm here to help clarify Aadhaar linking vs DBT seeding. What would you like to know?"
        },
        admin: {
            title: "Admin Dashboard"
        }
    },
    hi: {
        hero: {
            title: "कन्फ्यूजन हंटर",
            subtitle: "आधार लिंकिंग बनाम DBT सीडिंग को समझें",
            description: "छात्रों और अभिभावकों के लिए छात्रवृत्ति भुगतान को सही तरीके से प्राप्त करने का स्पष्ट मार्गदर्शन",
            cta: "अंतर जानें",
            ctaSecondary: "अपनी स्थिति जाँचें"
        },
        difference: {
            title: "क्या अंतर है?",
            aadhaarLink: "आधार लिंकिंग",
            aadhaarLinkDesc: "केवल अपने आधार नंबर को बैंक खाते से जोड़ना",
            dbtSeed: "DBT सीडिंग (आधार सक्षम)",
            dbtSeedDesc: "अपने खाते को सरकारी लाभ प्राप्त करने के लिए तैयार करना",
            key: "मुख्य बिंदु: लिंकिंग ≠ सीडिंग!"
        },
        guide: {
            title: "चरण-दर-चरण सीडिंग गाइड",
            step1: "अपनी बैंक शाखा पर जाएँ",
            step1Desc: "आधार कार्ड और पासबुक के साथ अपने बैंक जाएँ",
            step2: "DBT सीडिंग का अनुरोध करें",
            step2Desc: "विशेष रूप से 'DBT के लिए आधार सीडिंग' के लिए पूछें",
            step3: "पुष्टि प्राप्त करें",
            step3Desc: "सुनिश्चित करें कि आपको लिखित पुष्टि मिले",
            step4: "स्थिति सत्यापित करें",
            step4Desc: "हमारे टूल का उपयोग करके अपनी DBT स्थिति जाँचें"
        }
    },
    or: {
        hero: {
            title: "କନ୍‌ଫ୍ୟୁଜନ୍ ହଣ୍ଟର୍",
            subtitle: "ଆଧାର ଲିଙ୍କିଂ ବନାମ DBT ସିଡିଂ ବୁଝନ୍ତୁ",
            description: "ଛାତ୍ର ଏବଂ ଅଭିଭାବକଙ୍କ ପାଇଁ ଛାତ୍ରବୃତ୍ତି ଠିକ୍ ଭାବରେ ପାଇବା ପାଇଁ ସ୍ପଷ୍ଟ ମାର୍ଗଦର୍ଶନ",
            cta: "ପାର୍ଥକ୍ୟ ଜାଣନ୍ତୁ",
            ctaSecondary: "ଆପଣଙ୍କ ସ୍ଥିତି ଯାଞ୍ଚ କରନ୍ତୁ"
        }
    }
};

// Mock Chat Responses
const mockChatResponses = {
    default: "I can help you understand the difference between Aadhaar linking and DBT seeding. Aadhaar linking is just connecting your Aadhaar to your bank account for KYC, while DBT seeding enables your account to receive government scholarships and benefits. Would you like to know the steps for DBT seeding?",
    seeding: "To enable DBT seeding:\n\n1. Visit your bank branch with Aadhaar card and passbook\n2. Fill out the DBT/PFMS seeding form\n3. Ask specifically for 'Aadhaar seeding for Direct Benefit Transfer'\n4. Get written confirmation\n5. Wait 24-48 hours and verify status\n\nWhich bank do you have an account with?",
    difference: "Great question! Here's the key difference:\n\n📌 Aadhaar Linking: Just KYC compliance, connects your Aadhaar number to your bank account.\n\n💰 DBT Seeding: Makes your account eligible to receive government scholarships and benefits directly.\n\nMany students have linking done but miss seeding - that's why scholarships get rejected!",
    status: "You can check your DBT status in three ways:\n\n1. Visit your bank and ask for DBT status\n2. Use our educational demo tool (for practice)\n3. Check with your scholarship portal\n\nNote: Banks are the authoritative source for DBT seeding status.",
};

// State Management
let currentLanguage = 'en';
let currentPage = 'home';
let isAdmin = false;
let chatMessages = [];

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeChat();
    updateTranslations();
});

// Page Navigation
function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageName + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
        window.scrollTo(0, 0);
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('open');
}

// Language Change
function changeLanguage() {
    const select = document.getElementById('languageSelect');
    currentLanguage = select.value;
    updateTranslations();
}

// Update Translations
function updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[currentLanguage];
        
        for (let k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                value = translations['en'];
                for (let k2 of keys) {
                    if (value && value[k2]) {
                        value = value[k2];
                    }
                }
                break;
            }
        }
        
        if (typeof value === 'string') {
            element.textContent = value;
        }
    });
}

// Chat Functions
function initializeChat() {
    const greeting = {
        type: 'bot',
        text: translations[currentLanguage].chat.greeting,
        time: new Date()
    };
    chatMessages.push(greeting);
    renderChatMessages();
}

function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    const chatToggleBtn = document.getElementById('chatToggleBtn');
    
    if (chatWindow.classList.contains('hidden')) {
        chatWindow.classList.remove('hidden');
        chatToggleBtn.classList.add('hidden');
    } else {
        chatWindow.classList.add('hidden');
        chatToggleBtn.classList.remove('hidden');
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    chatMessages.push({
        type: 'user',
        text: message,
        time: new Date()
    });
    
    input.value = '';
    renderChatMessages();
    
    // Simulate bot response
    setTimeout(() => {
        const response = getBotResponse(message);
        chatMessages.push({
            type: 'bot',
            text: response,
            time: new Date()
        });
        renderChatMessages();
    }, 1000);
}

function handleChatKeypress(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function getBotResponse(message) {
    const input = message.toLowerCase();
    
    if (input.includes('seed') || input.includes('how')) {
        return mockChatResponses.seeding;
    } else if (input.includes('difference') || input.includes('what')) {
        return mockChatResponses.difference;
    } else if (input.includes('check') || input.includes('status')) {
        return mockChatResponses.status;
    }
    
    return mockChatResponses.default;
}

function renderChatMessages() {
    const container = document.getElementById('chatMessages');
    container.innerHTML = '';
    
    chatMessages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${msg.type}`;
        
        const bubbleDiv = document.createElement('div');
        bubbleDiv.className = `message-bubble ${msg.type}`;
        bubbleDiv.textContent = msg.text;
        
        messageDiv.appendChild(bubbleDiv);
        container.appendChild(messageDiv);
    });
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

// DBT Check Form
function handleDbtCheck(event) {
    event.preventDefault();
    
    const accountNumber = document.getElementById('accountNumber').value;
    const aadhaarLast4 = document.getElementById('aadhaarLast4').value;
    
    if (!accountNumber || !aadhaarLast4 || aadhaarLast4.length !== 4) {
        alert('Please fill all fields correctly');
        return;
    }
    
    // Simulate check with random result
    const results = ['seeded', 'pending', 'not-seeded'];
    const randomResult = results[Math.floor(Math.random() * results.length)];
    
    setTimeout(() => {
        displayCheckResult(randomResult, accountNumber);
    }, 1500);
}

function displayCheckResult(status, accountNumber) {
    const resultDiv = document.getElementById('checkResult');
    resultDiv.classList.remove('hidden');
    
    const messages = {
        'seeded': '✅ DBT Enabled - Your account is ready!',
        'pending': '⏳ Pending - Check again in 24-48 hours',
        'not-seeded': '❌ Not Seeded - Please visit your bank'
    };
    
    const classes = {
        'seeded': 'check-result seeded',
        'pending': 'check-result pending',
        'not-seeded': 'check-result not-seeded'
    };
    
    resultDiv.className = classes[status];
    resultDiv.innerHTML = `
        <p style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem;">
            ${messages[status]}
        </p>
        <p style="font-size: 0.875rem; color: #4b5563;">
            Account ending in: ${accountNumber.slice(-4)}
        </p>
    `;
}

// Admin Toggle
function toggleAdmin() {
    isAdmin = !isAdmin;
    const adminNavLink = document.getElementById('adminNavLink');
    const adminToggle = document.getElementById('adminToggle');
    
    if (isAdmin) {
        adminNavLink.classList.remove('hidden');
        adminToggle.textContent = 'Exit Admin';
    } else {
        adminNavLink.classList.add('hidden');
        adminToggle.textContent = 'Admin Login';
        if (currentPage === 'admin') {
            showPage('home');
        }
    }
}

// Export functions to global scope
window.showPage = showPage;
window.toggleMobileMenu = toggleMobileMenu;
window.changeLanguage = changeLanguage;
window.toggleChat = toggleChat;
window.sendChatMessage = sendChatMessage;
window.handleChatKeypress = handleChatKeypress;
window.handleDbtCheck = handleDbtCheck;
window.toggleAdmin = toggleAdmin;