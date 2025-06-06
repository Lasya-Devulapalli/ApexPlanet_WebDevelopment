const questions = [
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<css>", "<script>", "<link>"],
    answer: "<style>",
  },
  {
    question: "Which HTML attribute is used to specify an alternate text for an image?",
    options: ["alt", "title", "src", "href"],
    answer: "alt",
  },
  {
    question:
    "What is the default display value of the <div> element in HTML?",
    options: ["inline", "block", "inline-block", "none"],
    answer: "block",
  },
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  document.getElementById("quiz-result").textContent = "";
  document.getElementById("final-score").textContent = "";
  document.getElementById("next-btn").style.display = "none";

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  const result = document.getElementById("quiz-result");
  if (selected === correct) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
    score++;
  } else {
    result.textContent = `❌ Wrong! Correct answer is: ${correct}`;
    result.style.color = "red";
  }

  document.querySelectorAll("#options button").forEach((btn) => {
    btn.disabled = true;
  });

  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question").textContent = "🎉 Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("quiz-result").textContent = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById(
      "final-score"
    ).textContent = `Your Score: ${score} / ${questions.length}`;
  }
}

function getJoke() {
  const jokeText = document.getElementById("joke-text");
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      jokeText.textContent = `${data.setup} 😂 ${data.punchline}`;
    })
    .catch((error) => {
      jokeText.textContent = "Oops! Couldn't fetch a joke.";
      console.error(error);
    });
}

window.onload = showQuestion;
