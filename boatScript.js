let score = 0;
let timerValue = 60;
let timerInterval;
let currentProblem = generateProblem();

function generateProblem() {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  return {
    problem: `${num1} + ${num2}`,
    answer: num1 + num2,
  };
}

function updateScore(points) {
  score += points;
  document.getElementById("scoreValue").textContent = score;
  if (score === 100 || score >= 100) {
    score = 0;
    document.querySelector("img").style.left = score + "%";
    document.getElementById("scoreValue").textContent = score;
  } else {
    document.querySelector("img").style.left = score + "%";
  }
}

function updateTimer() {
  timerValue--;
  document.getElementById("timerValue").textContent = timerValue;
  if (timerValue === 0) {
    clearInterval(timerInterval);
    alert("Time's up! Your final score is: " + score);
    resetGame();
  }
}

function resetGame() {
  score = 0;
  document.getElementById("scoreValue").textContent = score;
  timerValue = 60;
  document.getElementById("timerValue").textContent = timerValue;
  clearInterval(timerInterval);
  currentProblem = generateProblem(); // Reset the current problem
  document.getElementById("problem").textContent = currentProblem.problem; // Update the problem text
  document.querySelector("img").style.left = "0%";
}

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

document.getElementById("submit").addEventListener("click", () => {
  const answer = parseInt(document.getElementById("answer").value);
  const correctAnswer = currentProblem.answer;

  if (answer === correctAnswer) {
    updateScore(10);
    //   const boat = document.getElementsByClassName("boat");
    //   boat.style.left = score + "%";
  } else {
    updateScore(-5);
    //   const boat = document.getElementsByClassName("boat");
    //   boat.style.left = score + "px";
  }
  document.getElementById("answer").value = ""; // Clear the input field
  currentProblem = generateProblem(); // Generate a new problem
  document.getElementById("problem").textContent = currentProblem.problem; // Update the problem text
});

document.getElementById("start").addEventListener("click", startTimer);

document.getElementById("reset").addEventListener("click", resetGame);

document.getElementById("problem").textContent = currentProblem.problem; // Set the initial problem
