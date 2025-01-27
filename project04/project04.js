// JavaScript for Dynamic Quiz App

const questions = [ // Array of questions
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2,
        explanation: "Paris is the capital of France."
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: 1,
        explanation: "Mars is often called the Red Planet due to its reddish appearance."
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: 1,
        explanation: "The blue whale is the largest mammal, weighing up to 200 tons."
    }
];

let currentQuestionIndex = 0; // Index of the current question
let score = 0; // User's score
let userAnswers = []; // Array to store user's answers

// DOM elements
const questionElement = document.getElementById("question"); 
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback-section");
const nextButton = document.getElementById("next-question");
const resultsSection = document.getElementById("results-section");
const finalScoreElement = document.getElementById("final-score");
const reviewButton = document.getElementById("review-answers");
const reviewSection = document.getElementById("review-section");
const reviewList = document.getElementById("review-list");
const restartButton = document.getElementById("restart-quiz");

// Load a question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex]; // Get the current question
    questionElement.textContent = currentQuestion.question; // Display the question
    optionsElement.innerHTML = ""; // Clear the options

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button"); // Create a button element
        button.textContent = option; // Set the button text
        button.addEventListener("click", () => handleAnswer(index)); // Add a click event listener
        optionsElement.appendChild(button); // Add the button to the options
    });

    feedbackElement.textContent = ""; // Clear the feedback
    nextButton.disabled = true; // Disable the next button
}

// Handle user's answer
function handleAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex]; // Get the current question
    const isCorrect = selectedIndex === currentQuestion.answer; // Check if the answer is correct

    userAnswers.push({ // Store the user's answer
        question: currentQuestion.question,
        correctAnswer: currentQuestion.options[currentQuestion.answer],
        userAnswer: currentQuestion.options[selectedIndex],
        isCorrect: isCorrect,
        explanation: currentQuestion.explanation
    });

    feedbackElement.textContent = isCorrect ? "Correct! " : "Incorrect! "; // Display feedback
    feedbackElement.textContent += currentQuestion.explanation; // Display explanation

    optionsElement.childNodes.forEach((button, index) => { // Disable all buttons and highlight correct/incorrect answers
        button.disabled = true; // Disable the button
        if (index === currentQuestion.answer) { // Highlight correct answer
            button.classList.add("correct"); // Add the correct class
        } else if (index === selectedIndex && !isCorrect) { // Highlight incorrect answer
            button.classList.add("incorrect"); // Add the incorrect class
        }
    });

    if (isCorrect) score++; // Increment the score
    nextButton.disabled = false; // Enable the next button
}

// Move to the next question
nextButton.addEventListener("click", () => { // Add a click event listener
    currentQuestionIndex++; // Move to the next question
    if (currentQuestionIndex < questions.length) { // Check if there are more questions
        loadQuestion(); // Load the next question
    } else {
        showResults(); // Show the quiz results
    }
});

// Show quiz results
function showResults() {
    document.getElementById("quiz-container").style.display = "none"; // Hide the quiz container
    resultsSection.style.display = "block"; // Display the results section
    finalScoreElement.textContent = `You scored ${score} out of ${questions.length}!`; // Display the final score
}

// Review answers
reviewButton.addEventListener("click", () => { // Add a click event listener
    resultsSection.style.display = "none"; // Hide the results section
    reviewSection.style.display = "block"; // Display the review section
    reviewList.innerHTML = ""; // Clear the review list

    userAnswers.forEach((answer, index) => {
        const listItem = document.createElement("li"); // Create a list item
        listItem.innerHTML = `
            <strong>Q${index + 1}: ${answer.question}</strong><br>
            Correct Answer: <span class="correct-answer">${answer.correctAnswer}</span><br>
            Your Answer: <span class="your-answer">${answer.userAnswer}</span>
        `;
        reviewList.appendChild(listItem); // Add the list item to the review list
    });
});

// Restart the quiz
restartButton.addEventListener("click", () => { // Add a click event listener
    currentQuestionIndex = 0; // Reset the question index
    score = 0; // Reset the score
    userAnswers = []; // Reset the user's answers
    resultsSection.style.display = "none"; // Hide the results section
    reviewSection.style.display = "none"; // Hide the review section
    document.getElementById("quiz-container").style.display = "block"; // Display the quiz container
    loadQuestion(); // Load the first question
});

// Start the quiz
loadQuestion();