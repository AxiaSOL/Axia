const apiKey = "your_openai_api_key";

async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    // Display user's message
    const responseBox = document.getElementById("response");
    responseBox.innerHTML = `<p><strong>You:</strong> ${userInput}</p>`;
    
    // Fetch AI response
    const aiResponse = await fetchResponse(userInput);

    // Display AI's response
    responseBox.innerHTML += `<p><strong>AI:</strong> ${aiResponse}</p>`;
    document.getElementById("user-input").value = ""; // Clear input
}

async function fetchResponse(message) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-4", // Choose your model
            messages: [{ role: "user", content: message }],
        }),
    });
    const data = await response.json();
    return data.choices[0].message.content;
}
