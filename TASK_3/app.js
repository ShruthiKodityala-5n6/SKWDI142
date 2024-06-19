document.addEventListener('DOMContentLoaded', () => {
    const chatLog = document.getElementById('chat-log');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            appendMessage(userMessage, 'user-message');
            chatInput.value = '';
            getBotResponse(userMessage);
        }
    });

    function appendMessage(message, className) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${className}`;
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const botMessage = generateBotResponse(userMessage);
        setTimeout(() => {
            appendMessage(botMessage, 'bot-message');
        }, 500);
    }

    function generateBotResponse(userMessage) {
        const responses = {
            'hi': 'Hello! How can I assist you today?',
            'hello': 'Hi there! How can I help you?',
            'how are you doing?': 'I\'m just a bot, but I\'m here to help you!',
            'what is the capital of india?': 'The capital of India is New Delhi.',
            'who is the president of the usa?': 'The current President of the USA is Joe Biden.',
            'what is the weather like?': 'I can\'t check the weather right now, but it\'s always a good idea to look outside or check a weather app!',
            'tell me a joke': 'Why don’t scientists trust atoms? Because they make up everything!',
            'what is your purpose?': 'I am here to assist you with any questions you have!',
            'how old are you?': 'I am as old as the code that created me!',
            'what is the meaning of life?': 'The meaning of life is a philosophical question, but many say it\'s 42!'
        };

        return responses[userMessage.toLowerCase()] || 'Sorry, I didn\'t understand that.';
    }
});
