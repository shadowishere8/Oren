// Initialize Speech Recognition API
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = true;  // Keeps listening until stopped
recognition.interimResults = true; // Shows results as they're being spoken
recognition.lang = 'en-US'; // Language to recognize

// Initialize Speech Synthesis API
const synth = window.speechSynthesis;

// Select DOM elements
const messagesDiv = document.getElementById("messages");
const startButton = document.getElementById("start-listening");
const stopButton = document.getElementById("stop-listening");

let isListening = false;

// Function to add message to the chat
function addMessage(text, from = 'bot') {
    const div = document.createElement('div');
    div.textContent = text;
    div.classList.add(from === 'user' ? 'user-message' : 'bot-message');
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto scroll to the bottom
}

// Function to sta
