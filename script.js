// Navegación tipo pestañas para mostrar solo una sección a la vez
const tabLinks = document.querySelectorAll('.tab-link');
const tabSections = document.querySelectorAll('.tab-section');

tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Quitar activo de todas las pestañas y secciones
        tabLinks.forEach(l => l.classList.remove('active'));
        tabSections.forEach(s => s.classList.remove('active'));
        // Activar la pestaña y sección correspondiente
        this.classList.add('active');
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');
    });
});

// Chatbot funcionalidad básica
const chatbotForm = document.getElementById('chatbot-form');
const chatbotMessages = document.getElementById('chatbot-messages');
if (chatbotForm) {
    chatbotForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('chatbot-name').value;
        const email = document.getElementById('chatbot-email').value;
        const msg = document.getElementById('chatbot-msg').value;
        chatbotMessages.innerHTML += `<div class='bot-message'>¡Gracias, ${name}! Tu mensaje ha sido enviado. Me pondré en contacto contigo pronto.</div>`;
        chatbotForm.reset();
    });
} 