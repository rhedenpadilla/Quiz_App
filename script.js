import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue, query, orderByChild, limitToLast }
    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 1. YOUR FIREBASE CONFIG
const firebaseConfig = {
    apiKey: "AIzaSyDmkfNBFNKCyZctwdYDCYNhv2zadcW661k",
    authDomain: "quizapp-643e2.firebaseapp.com",
    databaseURL: "quizapp-643e2.firebasestorage.app",
    projectId: "quizapp-643e2",
    appId: "1:1091827502621:web:e4fca69723b4f4f60240f4"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 2. QUIZ DATA
const questions = [
    { q: "Which planet is the 'Blue Giant'?", a: ["Earth", "Neptune", "Mars", "Jupiter"], c: 1 },
    { q: "What is the boiling point of water?", a: ["90°C", "120°C", "100°C", "110°C"], c: 2 },
    { q: "Which CSS property adds glass effect?", a: ["Blur", "Backdrop-filter", "Opacity", "Glass-mode"], c: 1 }
];

// 3. APP STATE
let currentQ = 0;
let score = 0;
let user = "";

// 4. UI HANDLERS
const startBtn = document.getElementById('start-btn');
const authSection = document.getElementById('auth-section');
const quizSection = document.getElementById('quiz-section');
const lbSection = document.getElementById('leaderboard-section');

startBtn.onclick = () => {
    user = document.getElementById('username-input').value || "Guest";
    authSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    loadQuestion();
};

function loadQuestion() {
    const data = questions[currentQ];
    document.getElementById('question-text').innerText = data.q;
    const grid = document.getElementById('answer-grid');
    grid.innerHTML = '';

    data.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => handleAnswer(i);
        grid.appendChild(btn);
    });
}

function handleAnswer(choice) {
    if (choice === questions[currentQ].c) score += 10;
    currentQ++;

    if (currentQ < questions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    quizSection.classList.add('hidden');
    lbSection.classList.remove('hidden');

    // Save to Firebase
    const scoresRef = ref(db, 'leaderboard');
    push(scoresRef, { username: user, score: score });

    loadLeaderboard();
}

function loadLeaderboard() {
    const lbRef = query(ref(db, 'leaderboard'), orderByChild('score'), limitToLast(5));
    onValue(lbRef, (snapshot) => {
        const list = document.getElementById('leaderboard-list');
        list.innerHTML = '';
        const data = [];
        snapshot.forEach(child => { data.push(child.val()); });
        data.reverse().forEach(entry => {
            list.innerHTML += `<li><span>${entry.username}</span> <b>${entry.score} pts</b></li>`;
        });
    });
}   