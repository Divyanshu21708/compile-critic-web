// Dynamic Quiz Logic for AI Code Reviewer

let selectedLanguage = "";
let selectedQuestionCount = 0;
let selectedDifficulty = "";

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let activeQuizQuestions = [];

/* ================= SELECTION HANDLERS ================= */

function selectLanguage(language) {
    selectedLanguage = language;
    highlightSelection('#language-options', language);
    checkCanStart();
}

function selectQuestionCount(count) {
    selectedQuestionCount = Number(count);
    highlightSelection('#count-options', String(count));
    checkCanStart();
}

function selectDifficulty(difficulty) {
    selectedDifficulty = difficulty;
    highlightSelection('#difficulty-options', difficulty);
    checkCanStart();
}

function highlightSelection(containerSelector, valueText) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const buttons = container.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.textContent.trim() === valueText) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

function checkCanStart() {
    const startBtn = document.getElementById('start-button');
    const warningEl = document.getElementById('quiz-warning');

    if (selectedLanguage && selectedQuestionCount && selectedDifficulty) {
        const pool = getMatchingQuestions(selectedLanguage, selectedDifficulty);

        if (pool.length === 0) {
            if (warningEl) {
                warningEl.textContent = `No ${selectedDifficulty} questions are currently available for ${selectedLanguage}.`;
                warningEl.classList.remove('hidden');
            }
            if (startBtn) startBtn.disabled = true;
        } else if (pool.length < selectedQuestionCount) {
            if (warningEl) {
                warningEl.textContent = `Only ${pool.length} ${selectedDifficulty} ${selectedLanguage} questions are currently available. Please choose a smaller quiz size.`;
                warningEl.classList.remove('hidden');
            }
            if (startBtn) startBtn.disabled = true;
        } else {
            if (warningEl) warningEl.classList.add('hidden');
            if (startBtn) startBtn.disabled = false;
        }
    } else {
        if (startBtn) startBtn.disabled = true;
    }
}

/* ================= RANDOMIZATION & SHUFFLING ================= */

// Fisher-Yates shuffle algorithm
function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getMatchingQuestions(lang, diff) {
    if (typeof allQuizQuestions === 'undefined' || !Array.isArray(allQuizQuestions)) {
        return [];
    }
    return allQuizQuestions.filter(q => 
        q.language.toLowerCase() === lang.toLowerCase() &&
        q.difficulty.toLowerCase() === diff.toLowerCase()
    );
}

function prepareQuizSet() {
    const pool = getMatchingQuestions(selectedLanguage, selectedDifficulty);
    const shuffledPool = shuffle(pool);
    const selectedPool = shuffledPool.slice(0, selectedQuestionCount);

    // Shuffle options for each question without losing the correct answer mapping
    activeQuizQuestions = selectedPool.map(q => {
        const correctAnswerText = q.answers[q.correct];
        const shuffledAnswers = shuffle(q.answers);
        const newCorrectIndex = shuffledAnswers.indexOf(correctAnswerText);
        return {
            question: q.question,
            answers: shuffledAnswers,
            correct: newCorrectIndex,
            language: q.language,
            difficulty: q.difficulty
        };
    });
}

/* ================= START, RETAKE & NEW QUIZ ================= */

function startQuiz() {
    if (!selectedLanguage || !selectedQuestionCount || !selectedDifficulty) return;

    prepareQuizSet();

    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');

    document.getElementById('language-name').textContent = `${selectedLanguage} • ${selectedDifficulty}`;

    showQuestion();
}

function retakeQuiz() {
    // Generates a NEW randomized question set with the SAME settings
    startQuiz();
}

function newQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;

    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');

    checkCanStart();
}

/* ================= SHOW & DISPLAY QUESTIONS ================= */

function showQuestion() {
    if (activeQuizQuestions.length === 0) return;

    const question = activeQuizQuestions[currentQuestionIndex];
    selectedAnswer = null;

    document.getElementById('question').textContent = question.question;
    document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1} / ${activeQuizQuestions.length}`;

    const progress = ((currentQuestionIndex) / activeQuizQuestions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';

    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer';
        button.textContent = answer;

        button.onclick = function() {
            selectAnswer(index, button);
        };

        answersContainer.appendChild(button);
    });

    // Convert backticks into styled HTML code blocks
let formattedQuestion = question.question.replace(/`([^`]+)`/g, '<code style="background:#0f172a; border: 1px solid #334155; padding:3px 8px; border-radius:6px; color:#3b82f6; font-family: monospace;">$1</code>');

// Use innerHTML so the browser renders the custom styling
document.getElementById('question').innerHTML = formattedQuestion;
}

/* ================= ANSWER SELECTION & NEXT ================= */

function selectAnswer(index, button) {
    // Prevent multiple clicks
    if (selectedAnswer !== null) return;

    selectedAnswer = index;
    const question = activeQuizQuestions[currentQuestionIndex];
    const allButtons = document.querySelectorAll('.answer');

    // Check if the clicked answer is correct
    if (index === question.correct) {
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
        // Instantly reveal the correct answer
        allButtons[question.correct].classList.add('correct');
    }

    // Lock all buttons visually
    allButtons.forEach(btn => {
        btn.style.cursor = 'not-allowed';
        if (!btn.classList.contains('correct') && !btn.classList.contains('wrong')) {
            btn.style.opacity = '0.5';
        }
    });

    // Enable the Next button to continue
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    if (selectedAnswer === null) return;

    const question = activeQuizQuestions[currentQuestionIndex];
    
    // Save the user's selected answer for the review screen!
    question.userAnswer = selectedAnswer;

    if (selectedAnswer === question.correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < activeQuizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

/* ================= SHOW RESULTS ================= */

function showResult() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    const total = activeQuizQuestions.length;
    const wrong = total - score;
    const percent = Math.round((score / total) * 100);

    document.getElementById('score').textContent = `${score} / ${total}`;

    const correctEl = document.getElementById('correct-count');
    if (correctEl) correctEl.textContent = score;

    const wrongEl = document.getElementById('wrong-count');
    if (wrongEl) wrongEl.textContent = wrong;

    const percentEl = document.getElementById('percentage-score');
    if (percentEl) percentEl.textContent = `${percent}%`;

    let message = "";
    if (percent === 100) {
        message = "Outstanding! Perfect score! 🚀";
    } else if (percent >= 70) {
        message = "Great job! Keep practicing! 💪";
    } else if (percent >= 50) {
        message = "Good effort! Practice makes perfect! 📚";
    } else {
        message = "Keep learning and try again! 💡";
    }

    document.getElementById('result-message').textContent = message;

    // Generate the Quiz Review Breakdown
    const reviewContainer = document.getElementById('quiz-review');
    if (reviewContainer) {
        reviewContainer.innerHTML = ''; // Clear previous reviews

        activeQuizQuestions.forEach((q, index) => {
            const isCorrect = q.userAnswer === q.correct;
            const userAnswerText = q.answers[q.userAnswer];
            const correctAnswerText = q.answers[q.correct];

            const itemDiv = document.createElement('div');
            itemDiv.className = 'review-item';

            let html = `<div class="review-q">${index + 1}. ${q.question}</div>`;

            if (isCorrect) {
                html += `<div class="review-ans correct-text">✅ You answered: ${userAnswerText}</div>`;
            } else {
                html += `<div class="review-ans wrong-text">❌ You answered: ${userAnswerText}</div>`;
                html += `<div class="review-ans correct-text">👉 Correct answer: ${correctAnswerText}</div>`;
            }

            itemDiv.innerHTML = html;
            reviewContainer.appendChild(itemDiv);
        });
    }
}


/* ================= SHOW RESULTS ================= */

function showResult() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    const total = activeQuizQuestions.length;
    const wrong = total - score;
    const percent = Math.round((score / total) * 100);

    document.getElementById('score').textContent = `${score} / ${total}`;

    const correctEl = document.getElementById('correct-count');
    if (correctEl) correctEl.textContent = score;

    const wrongEl = document.getElementById('wrong-count');
    if (wrongEl) wrongEl.textContent = wrong;

    const percentEl = document.getElementById('percentage-score');
    if (percentEl) percentEl.textContent = `${percent}%`;

    let message = "";
    if (percent === 100) {
        message = "Outstanding! Perfect score! 🚀";
    } else if (percent >= 70) {
        message = "Great job! Keep practicing! 💪";
    } else if (percent >= 50) {
        message = "Good effort! Practice makes perfect! 📚";
    } else {
        message = "Keep learning and try again! 💡";
    }

    document.getElementById('result-message').textContent = message;
    document.getElementById('result-message').textContent = message;

    // NEW: Generate the Quiz Review Breakdown
    const reviewContainer = document.getElementById('quiz-review');
    if (reviewContainer) {
        reviewContainer.innerHTML = ''; // Clear previous reviews

        activeQuizQuestions.forEach((q, index) => {
            const isCorrect = q.userAnswer === q.correct;
            const userAnswerText = q.answers[q.userAnswer];
            const correctAnswerText = q.answers[q.correct];

            const itemDiv = document.createElement('div');
            itemDiv.className = 'review-item';

            let html = `<div class="review-q">${index + 1}. ${q.question}</div>`;

            if (isCorrect) {
                html += `<div class="review-ans correct-text">✅ You answered: ${userAnswerText}</div>`;
            } else {
                html += `<div class="review-ans wrong-text">❌ You answered: ${userAnswerText}</div>`;
                html += `<div class="review-ans correct-text">👉 Correct answer: ${correctAnswerText}</div>`;
            }

            itemDiv.innerHTML = html;
            reviewContainer.appendChild(itemDiv);
        });
    }
}