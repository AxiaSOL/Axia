// Predefined responses
const responses = {
    hello: "Hi there! How can I assist you today?",
    hi: "Hello! What would you like to talk about?",
    help: "Of course! Here are a few things you can ask me:\n- What's your name?\n- How are you?\n- Tell me a joke.",
    "how are you": "I'm just a virtual assistant, but I'm here to help you!",
    goodbye: "Goodbye! Have a great day!",
    "what's your name": "I'm Mystique, your friendly virtual assistant.",
    "tell me a joke": "Why don't robots get tired? Because they recharge themselves!",
    "what can you do": "I can answer your questions, tell jokes, and provide basic assistance. What do you need help with?",
    "who created you": "I was created by a talented developer working on cool projects.",
    "what's the weather": "I can't check the weather, but you can use apps like Weather.com for that!",
   "what's up": "Not much! I'm here to help you.",
"hi there": "Hi! How can I assist you today?",
"good morning": "Good morning! Hope you have a great day.",
"who are you": "I'm Mystique, your virtual assistant.",
"what do you know": "I know a little bit about everything! What do you want to ask?",
"tell me something interesting": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
"do you like humans": "Of course! I exist to assist and chat with you.",
"i feel sad": "I'm here for you. Sometimes, talking to someone can help. You got this!",
"motivate me": "Remember, every small step you take brings you closer to your goal. Keep going!",
"tell me another joke": "Why did the computer cross the road? To get to the other side of the screen!",
"any jokes": "Sure! Why was the math book sad? Because it had too many problems.",
"help": `Of course! Here are a few things you can ask me:
- What's your name?
- How are you?
- Tell me a joke.
- What can you do?
- Who created you?`,

    default: "I'm sorry, I didn't understand that. Can you try rephrasing?",
};


// Function to send a message
function sendMessage() {
    const userInput = document.getElementById("user-input").value.toLowerCase().trim(); // Get user input
    const chatHistory = document.getElementById("chat-history"); // Chat history display

    if (!userInput) {
        alert("Please enter a message."); // Prevent empty submissions
        return;
    }

    // Display the user's message in the chat history
    const userMessage = `<p><strong>You:</strong> ${userInput}</p>`;
    chatHistory.innerHTML += userMessage;

    // Clear the input box
    document.getElementById("user-input").value = "";

    // Determine the AI's response
    const aiResponse = responses[userInput] || responses.default;

    // Display the AI's response
    const aiMessage = `<p><strong>Mystique:</strong> ${aiResponse}</p>`;
    chatHistory.innerHTML += aiMessage;

    // Scroll to the bottom of the chat history
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

