const textToType = document.getElementById("textToType");   // Text to type element
const userInput = document.getElementById("userInput"); // User input element
const startButton = document.getElementById("startButton"); // Start button
const restartButton = document.getElementById("restartButton"); // Restart button
const difficulty = document.getElementById("difficulty");   // Difficulty level
const wpmDisplay = document.getElementById("wpm");  // WPM display
const accuracyDisplay = document.getElementById("accuracy");    // Accuracy display
const finalWpm = document.getElementById("finalWpm");   // Final WPM display
const finalAccuracy = document.getElementById("finalAccuracy");   // Final accuracy display
const summarySection = document.querySelector(".summary");  // Summary section

let timer;  // Timer interval
let startTime;  // Start time
let totalChars = 0; // Total characters typed
let correctChars = 0;   // Correct characters typed
let currentString = ""; // Current string to type

const textPool = {  
    easy: ["hello", "world", "keyboard", "trainer", "test"],    // Text pool for easy level
    medium: ["practice makes perfect", "keep typing accurately", "focus on your speed"],    // Text pool for medium level
    hard: ["typography is an art form", "accuracy is better than speed", "complexity increases with practice"]  // Text pool for hard level
};

function getRandomText(difficultyLevel) {
    const texts = textPool[difficultyLevel];    // Get text pool based on difficulty level
    return texts[Math.floor(Math.random() * texts.length)];   // Return a random text
}

function startExercise() {
    const level = difficulty.value; // Get the difficulty level
    currentString = getRandomText(level);   // Get a random text based on the difficulty level
    textToType.innerHTML = highlightText(currentString, "");    // Highlight the text
    userInput.value = "";   // Clear the user input
    userInput.disabled = false; // Enable the user input
    userInput.focus();  // Focus on the user input

    totalChars = 0; // Reset total characters
    correctChars = 0;   // Reset correct characters
    startTime = new Date();  // Set the start time

    summarySection.classList.add("hidden");   // Hide the summary section

    if (timer) clearInterval(timer);    // Clear the timer interval
    timer = setInterval(updateStats, 100);  // Set the timer interval
}

function highlightText(text, typed) {
    let highlighted = "";   // Highlighted text
    for (let i = 0; i < text.length; i++) {     // Iterate over the text
        if (typed[i] === undefined) {   // Check if the character is undefined
            highlighted += `<span>${text[i]}</span>`;   // Add the character to the highlighted text
        } else if (typed[i] === text[i]) {  // Check if the character is correct
            highlighted += `<span class='correct'>${text[i]}</span>`;   // Add the character to the highlighted text with the correct class
        } else {
            highlighted += `<span class='incorrect'>${text[i]}</span>`; // Add the character to the highlighted text with the incorrect class
        }
    }
    return highlighted; // Return the highlighted text
}

function updateStats() {
    const elapsedTime = (new Date() - startTime) / 1000 / 60; // Convert ms to minutes
    const typedText = userInput.value;  // Get the typed text
    totalChars = typedText.length;  // Get the total characters typed

    // Highlight errors
    textToType.innerHTML = highlightText(currentString, typedText);   // Highlight the text

    let correctCount = 0;   // Correct character count
    for (let i = 0; i < typedText.length; i++) {    // Iterate over the typed text
        if (typedText[i] === currentString[i]) {    // Check if the character is correct
            correctCount++; // Increment the correct count
        }
    }
    correctChars = correctCount;    // Set the correct characters

    const wpm = Math.round((correctChars / 5) / elapsedTime);   // Calculate WPM
    const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100;  // Calculate accuracy

    wpmDisplay.textContent = wpm;   // Display WPM
    accuracyDisplay.textContent = accuracy;  // Display accuracy

    // Check if exercise is complete
    if (typedText === currentString) {  // Check if the typed text matches the current string
        clearInterval(timer);   // Clear the timer interval
        endExercise(wpm, accuracy); // End the exercise
    }
}

function endExercise(wpm, accuracy) {
    userInput.disabled = true;  // Disable the user input
    finalWpm.textContent = wpm; // Display final WPM
    finalAccuracy.textContent = accuracy;   // Display final accuracy
    summarySection.classList.remove("hidden");  // Display the summary section
}

function restartExercise() {
    textToType.textContent = "";    // Clear the text to type
    userInput.value = "";   // Clear the user input
    wpmDisplay.textContent = "0";   // Reset WPM
    accuracyDisplay.textContent = "100";    // Reset accuracy
    summarySection.classList.add("hidden"); // Hide the summary section
    userInput.disabled = true;  // Disable the user input
}

startButton.addEventListener("click", startExercise);   // Start button
restartButton.addEventListener("click", restartExercise);   // Restart button

userInput.addEventListener("input", updateStats);   // User input
