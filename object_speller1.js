// Define multiple correct words and their corresponding image paths
const words = ["chair", "earth", "heart", "thumb", "apple", "tiger", "bicycle"];
const images = [
  "chair.png",
  "earth.png",
  "heart.png",
  "thumb.png",
  "apple.jpeg",
  "tiger.jpeg",
  "bicycle.jpeg",
];
let currentWordIndex = 0;
let currentWord = words[currentWordIndex];
let currentImage = images[currentWordIndex];

// Initialize selected letters
let selectedLetters = "";

// Function to shuffle a string
function shuffleString(string) {
  return string
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

// Get a reference to the containers
const wordImage = document.getElementById("wordImage");
const lettersContainer = document.getElementById("lettersContainer");
const selectedLettersContainer = document.getElementById("selectedLetters");
const messageContainer = document.getElementById("message");

// Function to initialize a new word
function initializeWord() {
  // Shuffle the letters of the current word
  const jumbledWord = shuffleString(currentWord);

  // Display the current image and jumbled letters
  wordImage.src = "./assets/" + currentImage;
  lettersContainer.textContent = "";

  // Create letter cards for each letter in the current word
  for (let i = 0; i < jumbledWord.length; i++) {
    const letter = jumbledWord[i];
    const letterCard = document.createElement("div");
    letterCard.classList.add("letter-card");
    letterCard.classList.add("card");
    letterCard.textContent = letter;
    letterCard.addEventListener("click", () => {
      // Add clicked letter to selected letters
      selectedLetters += letter;
      selectedLettersContainer.textContent = selectedLetters;
      // Check if the selected letters match the correct word
      if (selectedLetters === currentWord) {
        messageContainer.textContent = "Congratulations! You won!";
        // Move to the next word
        currentWordIndex = (currentWordIndex + 1) % words.length;
        currentWord = words[currentWordIndex];
        currentImage = images[currentWordIndex];
        // Clear selected letters and message
        selectedLetters = "";
        selectedLettersContainer.textContent = "";
        messageContainer.textContent = "";
        // Initialize the next word
        initializeWord();
      } else if (currentWord.startsWith(selectedLetters)) {
        // If the selected letters match the beginning of the correct word,
        // but are not yet complete, display a hint
        messageContainer.textContent = "Keep going...";
      }
      // Remove the letter card
      letterCard.style.display = "none";
    });
    lettersContainer.appendChild(letterCard);
  }
}
const resetButton = document.getElementById("resetButton");

// Function to reset the game
function resetGame() {
  // Reset game state
  currentWordIndex = 0;
  currentWord = words[currentWordIndex];
  currentImageName = imageNames[currentWordIndex];
  score = 0;
  selectedLetters = "";
  // Update display
  console.log("Hello");
  scoreValue.textContent = score;
  selectedLettersContainer.textContent = "";
  messageContainer.textContent = "";
  // Reinitialize the first word
  initializeWord();
}
//   resetButton.addEventListener("click", resetGame);
// Add click event listener to the reset button
// Initialize the first word
initializeWord();
