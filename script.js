import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDmkfNBFNKCyZctwdYDCYNhv2zadcW661k",
    authDomain: "quizapp-643e2.firebaseapp.com",
    databaseURL: "https://quizapp-643e2-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "quizapp-643e2",
    appId: "1:1091827502621:web:e4fca69723b4f4f60240f4"
};

try {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    console.log("Firebase Initialized ✅");

    let currentUser = null;
    let currentPoints = 0;

    const quizzes = {
        "tech-quiz": [
            { q: "HTML stands for?", a: ["HyperText Markup Language", "HighText Machine Language"], c: 0 },
            { q: "JavaScript is a...", a: ["Coffee", "Programming Language"], c: 1 }
        ],
        "science-quiz": [
            { q: "Symbol for Gold?", a: ["Au", "Ag"], c: 0 }
        ],
        "history-quiz": [
            { q: "First man on moon?", a: ["Neil Armstrong", "Buzz Aldrin"], c: 0 }
        ]
    };

    // Registration Logic
    document.getElementById('register-btn').onclick = async () => {
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value.trim().replace(/\./g, '_');

        if(!name || !email) {
            alert("Please fill in all fields");
            return;
        }

        try {
            console.log("Attempting to register user...");
            await set(ref(db, 'users/' + email), { name: name, points: 0 });
            currentUser = email;
            
            document.getElementById('reg-page').classList.add('hidden');
            document.getElementById('dash-page').classList.remove('hidden');
            document.getElementById('welcome-msg').innerText = `Hi, ${name}!`;
            console.log("User registered successfully! 🚀");
        } catch (error) {
            console.error("Registration Error:", error);
            alert("Database Error: Make sure your Rules are set to true!");
        }
    };

    // Tab Logic
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const cat = e.target.dataset.target;
            console.log("Starting category:", cat);
            renderQuestion(quizzes[cat], 0, cat);
        };
    });

    function renderQuestion(data, index, cat) {
        const q = data[index];
        const grid = document.getElementById('options-grid');
        document.getElementById('q-text').innerText = q.q;
        grid.innerHTML = '';

        q.a.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.style.cssText = "width:100%; padding:10px; margin:5px; border-radius:10px; border:1px solid rgba(255,255,255,0.2); background:rgba(255,255,255,0.05); color:white; cursor:pointer;";
            btn.innerText = opt;
            btn.onclick = () => {
                const isCorrect = (i === q.c);
                btn.style.background = isCorrect ? "rgba(74, 222, 128, 0.2)" : "rgba(248, 113, 113, 0.2)";
                btn.style.borderColor = isCorrect ? "#4ade80" : "#f87171";
                
                if(isCorrect) {
                    currentPoints += 10;
                    document.getElementById('total-points').innerText = currentPoints;
                    update(ref(db, 'users/' + currentUser), { points: currentPoints });
                }

                setTimeout(() => {
                    if(index + 1 < data.length) renderQuestion(data, index + 1, cat);
                    else alert("Category complete!");
                }, 1000);
            };
            grid.appendChild(btn);
        });
    }

} catch (e) {
    console.error("Initialization error:", e);
}
