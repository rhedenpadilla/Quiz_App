import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, update, get } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDmkfNBFNKCyZctwdYDCYNhv2zadcW661k",
    authDomain: "quizapp-643e2.firebaseapp.com",
    databaseURL: "https://quizapp-643e2-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "quizapp-643e2",
    appId: "1:1091827502621:web:e4fca69723b4f4f60240f4"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let currentUser = null;
let currentPoints = 0;

// Quiz Data per Tab
const quizzes = {
    "tech-quiz": [
        { q: "HTML stands for?", a: ["HyperText Markup Language", "HighText Machine Language"], c: 0 },
        { q: "React is a...", a: ["Database", "JS Library"], c: 1 }
    ],
    "science-quiz": [
        { q: "Pure water pH?", a: ["5", "7"], c: 1 }
    ]
};

// 1. REGISTRATION LOGIC
document.getElementById('register-btn').onclick = async () => {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value.replace('.', '_'); // Firebase key safety

    if(!name || !email) return alert("Please fill details");

    currentUser = email;
    await set(ref(db, 'users/' + email), { name, points: 0 });
    
    document.getElementById('reg-page').classList.add('hidden');
    document.getElementById('dash-page').classList.remove('hidden');
    document.getElementById('welcome-msg').innerText = `Welcome, ${name}!`;
};

// 2. TAB SWITCHING LOGIC
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        startQuiz(e.target.dataset.target);
    };
});

function startQuiz(category) {
    const data = quizzes[category];
    renderQuestion(data, 0, category);
}

function renderQuestion(data, index, cat) {
    const q = data[index];
    const grid = document.getElementById('options-grid');
    document.getElementById('q-text').innerText = q.q;
    grid.innerHTML = '';

    q.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => {
            // Reveal Answer Logic
            const isCorrect = i === q.c;
            btn.classList.add(isCorrect ? 'correct' : 'wrong');
            
            if(isCorrect) {
                currentPoints += 10;
                updatePoints();
            }

            // Progress Bar Update
            const prog = ((index + 1) / data.length) * 100;
            document.getElementById('p-bar').style.width = prog + "%";

            // Next Question after delay
            setTimeout(() => {
                if(index + 1 < data.length) renderQuestion(data, index + 1, cat);
                else alert("Quiz Category Finished!");
            }, 1500);
        };
        grid.appendChild(btn);
    });
}

function updatePoints() {
    document.getElementById('total-points').innerText = currentPoints;
    update(ref(db, 'users/' + currentUser), { points: currentPoints });
}
