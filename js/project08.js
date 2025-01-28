// JavaScript for Interactive Story Game

const storyText = document.getElementById("story-text");    // Story text element
const choicesContainer = document.getElementById("choices");    // Choices container element
const progressBar = document.getElementById("progress-bar");    // Progress bar element
const progressText = document.getElementById("progress-text");  // Progress text element
const resetButton = document.getElementById("reset");   // Reset button element
const saveButton = document.getElementById("save"); // Save button element
const resumeButton = document.getElementById("resume"); // Resume button element

let currentNode = null; // Current story node
let progress = 0;   // Progress percentage

const story = { // Story object
    start: {
        text: "You find yourself in a dark forest. There are paths to the left and right.",
        choices: [
            { text: "Go left", next: "leftPath" },
            { text: "Go right", next: "rightPath" }
        ]
    },
    leftPath: {
        text: "You encounter a river. Do you swim across or follow it upstream?",
        choices: [
            { text: "Swim across", next: "swim" },
            { text: "Follow upstream", next: "upstream" }
        ]
    },
    rightPath: {
        text: "You find an abandoned cabin. Do you go inside or keep walking?",
        choices: [
            { text: "Go inside", next: "cabin" },
            { text: "Keep walking", next: "walking" }
        ]
    },
    swim: {
        text: "You swim across and find safety on the other side. You win!",
        choices: []
    },
    upstream: {
        text: "You follow the river upstream and discover a waterfall. Game over.",
        choices: []
    },
    cabin: {
        text: "Inside the cabin, you find treasure! You win!",
        choices: []
    },
    walking: {
        text: "You keep walking and get lost. Game over.",
        choices: []
    }
};

// Load a story node
function loadNode(nodeKey) {
    currentNode = story[nodeKey];   // Set current node
    storyText.textContent = currentNode.text;   // Display story text
    choicesContainer.innerHTML = "";    // Clear choices
    
    currentNode.choices.forEach(choice => {   // Create choice buttons
        const button = document.createElement("button");    // Create a button element
        button.textContent = choice.text;   // Set button text
        button.addEventListener("click", () => {    // Add click event listener
            progress += 100 / Object.keys(story).length;    // Update progress
            updateProgress();   // Update progress bar
            loadNode(choice.next);  // Load next node
        });
        choicesContainer.appendChild(button);   // Add button to choices container
    });
}

// Update progress bar
function updateProgress() {
    progressBar.value = progress;   // Set progress bar value
    progressText.textContent = `${Math.floor(progress)}%`;  // Set progress text
}

// Reset the game
function resetGame() {
    progress = 0;   // Reset progress
    updateProgress();   // Update progress bar
    loadNode("start");  // Load start node
}

// Save progress
function saveProgress() {
    localStorage.setItem("storyProgress", JSON.stringify({  // Save progress to localStorage
        currentNodeKey: Object.keys(story).find(key => story[key] === currentNode), // Save current node key
        progress: progress  // Save progress
    }));
    alert("Progress saved!");   // Show alert
}

// Resume game
function resumeGame() {
    const savedProgress = JSON.parse(localStorage.getItem("storyProgress"));    // Get saved progress
    if (savedProgress) {    // Check if saved progress exists
        progress = savedProgress.progress;  // Set progress
        updateProgress();   // Update progress bar
        loadNode(savedProgress.currentNodeKey);  // Load saved node
    } else {
        alert("No saved progress found.");  // Show alert
    }
}

// Event listeners
resetButton.addEventListener("click", resetGame);   // Reset button
saveButton.addEventListener("click", saveProgress); // Save button
resumeButton.addEventListener("click", resumeGame); // Resume button

// Start the game
resetGame();
