// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        mobileMenuBtn.setAttribute('aria-expanded', isActive);
        mobileMenuBtn.innerHTML = isActive ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking on links
    document.querySelectorAll('#navMenu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Set Current Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
if (faqQuestions) {
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');
            
            // Close all FAQs
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.style.maxHeight = null;
            });
            
            // Open clicked FAQ
            if (!isActive) {
                question.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

// Chat Bot Toggle
const chatBotBtn = document.getElementById('chatBotBtn');
const chatBotContainer = document.getElementById('chatBotContainer');
const closeChat = document.getElementById('closeChat');

if (chatBotBtn && chatBotContainer) {
    chatBotBtn.addEventListener('click', () => {
        chatBotContainer.classList.toggle('active');
    });
    closeChat.addEventListener('click', () => {
        chatBotContainer.classList.remove('active');
    });
}

// Chat Bot Functionality
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendMessage = document.getElementById('sendMessage');

function sendUserMessage() {
    const message = userInput.value.trim();
    if (message) {
        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'user-message';
        userMsg.textContent = message;
        chatMessages.appendChild(userMsg);

        // Clear input
        userInput.value = '';

        // Bot reply after 1 second
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'bot-message';
            botMsg.textContent = getBotResponse(message);
            chatMessages.appendChild(botMsg);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}

function getBotResponse(message) {
    const msg = message.toLowerCase();
    if (msg.includes('hello') || msg.includes('hi')) {
        return "Hello! How can I help you today?";
    } else if (msg.includes('price') || msg.includes('cost')) {
        return "Our residential cleaning starts from ₵200. Would you like a custom quote?";
    } else if (msg.includes('schedule')) {
        return "Call us at 054 297 7602 or book online!";
    } else {
        return "I’m sorry, I didn’t understand. Please call us for assistance.";
    }
}

if (sendMessage && userInput) {
    sendMessage.addEventListener('click', sendUserMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendUserMessage();
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
        contactForm.reset();
    });
}

// Animate Elements on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.info-card, .service-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('load', () => {
    // Initialize animations
    document.querySelectorAll('.info-card, .service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});