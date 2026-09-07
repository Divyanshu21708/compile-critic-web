const input = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const messages = document.getElementById("messages");

// Dynamic API Routing
const BACKEND_PORT = 5001;
const API_BASE = (window.location.port === String(BACKEND_PORT))
    ? ''
    : `http://${window.location.hostname || 'localhost'}:${BACKEND_PORT}`;

async function sendMessage() {
    const text = input.value.trim();
    if (text === "") return;

    // Show user's message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = text;
    messages.appendChild(userMessage);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;

    // Show AI thinking message
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.innerHTML = `
        <div class="message-robot">🤖</div>
        <div>
            <strong>AI Assistant</strong>
            <p>Thinking...</p>
        </div>
    `;
    messages.appendChild(botMessage);
    messages.scrollTop = messages.scrollHeight;

    try {
        const response = await fetch(`${API_BASE}/api/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: text })
        });

        let data = {};
        try {
            data = await response.json();
        } catch (e) {}

        if (!response.ok) {
            throw new Error(data.error || data.message || `Server error (${response.status})`);
        }

        // Display AI response with markdown formatting
        botMessage.innerHTML = `
            <div class="message-robot">🤖</div>
            <div>
                <strong>AI Assistant</strong>
                <p>${formatResponse(data.reply || "No response received from AI.")}</p>
            </div>
        `;
    } catch (error) {
        console.error("AI Chat Error:", error);
        botMessage.innerHTML = `
            <div class="message-robot">🤖</div>
            <div>
                <strong>AI Assistant</strong>
                <p style="color: #ef4444;">${formatResponse(error.message || "Could not connect to the AI server.")}</p>
            </div>
        `;
    }
    messages.scrollTop = messages.scrollHeight;
}

// Upgraded Markdown Formatter
function formatResponse(text) {
    return text
        // 1. Escape basic HTML for safety
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        // 2. Format large code blocks (```code```)
        .replace(/```[\w]*\n([\s\S]*?)```/g, '<pre style="background:#0F172A; padding:12px; border-radius:8px; margin:10px 0; border: 1px solid #334155; font-family: monospace; overflow-x: auto; color: #E2E8F0;"><code>$1</code></pre>')
        // 3. Format inline code words (`code`)
        .replace(/`([^`]+)`/g, '<code style="background:#1E293B; padding:2px 6px; border-radius:4px; color:#3B82F6; font-family: monospace;">$1</code>')
        // 4. Format Bold text (**text**)
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        // 5. Format Italic text (*text*)
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        // 6. Format Headers (### Header)
        .replace(/### (.*)/g, '<h4 style="color:#3B82F6; margin-top:15px; margin-bottom:5px;">$1</h4>')
        .replace(/## (.*)/g, '<h3 style="color:#3B82F6; margin-top:15px; margin-bottom:5px;">$1</h3>')
        // 7. Fix Line Breaks
        .replace(/\n/g, '<br>');
}

if (sendButton) {
    sendButton.addEventListener("click", sendMessage);
}

if (input) {
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });
}