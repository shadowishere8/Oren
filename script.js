// Text-to-Speech functionality
function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // Set language
    window.speechSynthesis.speak(utterance);
}

// Function to display the bot's response and also speak it
function botResponse(responseText) {
    const botResponseElement = document.getElementById("bot-response");
    botResponseElement.innerHTML = "Bot: " + responseText;
    speakText(responseText); // Speak out the bot's response
}

// Handle user input and AI response
function sendMessage() {
    const userMessage = document.getElementById("userMessage").value;
    const userInputElement = document.getElementById("user-input");
    
    // Display user's message
    userInputElement.innerHTML = "You: " + userMessage;
    
    // Sample AI response logic (can be improved with real AI)
    let response = "";
    if (userMessage.toLowerCase().includes("hello")) {
        response = "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("how are you")) {
        response = "I'm doing well, thank you for asking!";
    } else {
        response = "I'm not sure how to respond to that.";
    }

    botResponse(response);
    document.getElementById("userMessage").value = ""; // Clear the input box
}

// Speech recognition functionality (to listen to user's voice input)
function startListening() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById("userMessage").value = transcript;
        sendMessage();
    }

    recognition.onerror = function(event) {
        console.error("Speech recognition error: ", event.error);
    }
}
