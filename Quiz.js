const questionJSON = [
    {
        question: "What is the capital of India?",
        options: ["Delhi", "London", "Berlin", "Madrid"],
        answer: "Delhi"
    },
    {
        question: "What is the population of India?",
        options: ["1.3 billion", "1.4 billion", "1.5 billion", "1.6 billion"],
        answer: "1.3 billion"
    },
    {
        question: "What is the currency of India?",
        options: ["Dollar", "Euro", "Rupee", "Pound"],
        answer: "Rupee"
    },
    {
        question: "What is the national animal of India?",
        options: ["Tiger", "Lion", "Elephant", "Leopard"],
        answer: "Tiger"
    },
    {
        question: "What is the national bird of India?",
        options: ["Peacock", "Crow", "Pigeon", "Sparrow"],
        answer: "Peacock"
    },
];

let score = 0;
let currentQuestion = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

function showQuestion() {
    const {
        question,
        options,
        answer
    } = questionJSON[currentQuestion];

    questionEl.textContent = question;
    const shuffledOptions = shuffleOptions(options);

    optionsEl.innerHTML = ""; // Clear previous options
    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        optionsEl.appendChild(button);
        button.addEventListener("click", () => {
            if (option === answer) {
                score++;
            } else {
                score -= 0.25;
            }
            console.log(score);
            scoreEl.textContent = `Score: ${score}`;
            currentQuestion++;
            if (currentQuestion < questionJSON.length) {
                showQuestion();
            } else {
                questionEl.textContent = "Quiz Completed!!";
                optionsEl.innerHTML = "";
            }
        });
    });
}

function shuffleOptions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Call showQuestion when the page loads
showQuestion();