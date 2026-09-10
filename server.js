require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const User = require('./models/User');
const Snippet = require('./models/snippet'); 
const { GoogleGenAI } = require('@google/genai');
const { exec } = require('child_process');

const app = express();

// Initialize the Gemini AI client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname, { index: 'home.html' }));


// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/code_reviewer_db'; 
mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// ==========================================
// 1. JUDGE0 CLOUD COMPILER ROUTE
// ==========================================
const LANGUAGES = {
    c: 50,
    cpp: 54,
    java: 62,
    python: 71,
    javascript: 93 // Added to support the new frontend dropdown!
};

const JUDGE0_URL = process.env.JUDGE0_URL || "https://ce.judge0.com";

// Updated to catch both the old /api/run and the new /api/compile routes
app.post(['/api/run', '/api/compile'], async (req, res) => {
    try {
        const { language, code, customInput = "" } = req.body;

        if (!language || !code) {
            return res.status(400).json({ success: false, error: "Language and Code are required" });
        }

        const languageId = LANGUAGES[language.toLowerCase()];
        if (!languageId) {
            return res.status(400).json({ success: false, error: "Unsupported language" });
        }

        // Package data for Judge0 using Base64 encoding for safety
        const submission = {
            source_code: Buffer.from(code, "utf8").toString("base64"),
            language_id: languageId,
            stdin: Buffer.from(String(customInput), "utf8").toString("base64"),
            cpu_time_limit: 2,
            wall_time_limit: 5,
            memory_limit: 128000
        };

        const createResponse = await fetch(`${JUDGE0_URL}/submissions?base64_encoded=true&wait=true`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(submission)
        });

        if (!createResponse.ok) {
            return res.status(500).json({ success: false, error: "Cloud execution service returned an error" });
        }

        const result = await createResponse.json();

        // Helper to decode Base64 back to normal text
        const decode = (value) => {
            if (!value) return "";
            return Buffer.from(value, "base64").toString("utf8");
        };

        // Formatted to match exactly what the new index.html expects
        const stdout = decode(result.stdout);
        const stderr = decode(result.stderr);
        const compile_output = decode(result.compile_output);

        res.json({
            success: true,
            output: stdout,
            error: compile_output || stderr,
            time: result.time,
            memory: result.memory
        });

    } catch (error) {
        console.error("Compiler error:", error);
        res.status(500).json({ success: false, error: "Unable to execute the code" });
    }
});

// ==========================================
// 2. AUTHENTICATION ROUTES
// ==========================================
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password, securityQuestion, securityAnswer } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists.' });
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Hash the security answer so it's safely encrypted in the database!
        const hashedAnswer = await bcrypt.hash(securityAnswer, salt); 
        
        const newUser = new User({ 
            name, 
            email, 
            password: hashedPassword,
            securityQuestion,
            securityAnswer: hashedAnswer
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'DB Error: ' + error.message });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }
        res.status(200).json({ 
            message: 'Login successful!', 
            user: { id: user._id, name: user.name, email: user.email } 
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error during login.' });
    }
});

app.post('/api/forgot-password', async (req, res) => {
    try {
        const { email, securityAnswer, newPassword } = req.body;
        
        // 1. Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found.' });

        // 2. Compare the provided answer with the hashed answer in the database
        const isMatch = await bcrypt.compare(securityAnswer, user.securityAnswer);
        if (!isMatch) return res.status(400).json({ message: 'Incorrect security answer.' });

        // 3. Hash the new password and update
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        await user.save();

        res.status(200).json({ message: 'Password reset successful! You can now log in.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error during password reset.' });
    }
});

app.post('/api/forgot-password', async (req, res) => {
    try {
        const { email, securityAnswer, newPassword } = req.body;
        
        // 1. Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found.' });

        // 2. Compare the provided answer with the hashed answer in the database
        const isMatch = await bcrypt.compare(securityAnswer, user.securityAnswer);
        if (!isMatch) return res.status(400).json({ message: 'Incorrect security answer.' });

        // 3. Hash the new password and update
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        await user.save();

        res.status(200).json({ message: 'Password reset successful! You can now log in.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error during password reset.' });
    }
});


// ==========================================
// 3. SNIPPET HISTORY ROUTES
// ==========================================
app.post('/api/snippets/save', async (req, res) => {
    try {
        const { userId, language, code, customInput } = req.body;
        if (!userId || !code) return res.status(400).json({ message: 'Missing user ID or code.' });

        const newSnippet = new Snippet({ userId, language, code, customInput });
        await newSnippet.save();
        res.status(201).json({ message: 'Code saved successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving code.' });
    }
});

app.get('/api/snippets/history/:userId', async (req, res) => {
    try {
        const snippets = await Snippet.find({ userId: req.params.userId }).sort({ createdAt: -1 });
        res.status(200).json(snippets);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching history.' });
    }
});

app.delete('/api/snippets/:id', async (req, res) => {
    try {
        // Find the snippet by its ID and delete it from MongoDB
        const deletedSnippet = await Snippet.findByIdAndDelete(req.params.id);
        
        if (!deletedSnippet) {
            return res.status(404).json({ message: 'Snippet not found.' });
        }
        
        res.status(200).json({ message: 'Code deleted successfully!' });
    } catch (error) {
        console.error("Delete Error:", error);
        res.status(500).json({ message: 'Error deleting code.' });
    }
});

// ==========================================
// 4. AI CHATBOT ROUTE
// ==========================================
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) return res.status(400).json({ error: "Message is required." });

        const response = await ai.models.generateContent({
            model: 'gemini-3.6-flash',
            contents: `You are an expert coding assistant for CompileCritic. 
            CRITICAL INSTRUCTION: Do NOT use LaTeX formatting or symbols (like $\\mathcal{O}$) for time or space complexity. Always use plain, human-readable text like O(1) or O(N). 
            
            Request: ${message}`
        });
        res.status(200).json({ reply: response.text });
    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ error: 'Failed to communicate with the AI.' });
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    
    // Automatically open the home page in Google Chrome!
    exec(`open -a "Google Chrome" http://localhost:${PORT}/home.html`); 
});