const cards = [
    'A', 'A', 'B', 'B',
    'C', 'C', 'D', 'D',
    'E', 'E', 'F', 'F',
    'G', 'G', 'H', 'H'
];

let flippedCards = []; // Stores the flipped cards
let matchedCards = 0; // Number of matched cards
let moves = 0; // Number of moves
let timer = null; // Timer interval
let seconds = 0; // Elapsed seconds

const gameBoard = document.getElementById('game-board'); // Game board element
const movesCounter = document.getElementById('moves'); // Moves counter element
const timerDisplay = document.getElementById('timer'); // Timer display element
const restartButton = document.getElementById('restart'); // Restart button element

// Shuffle the cards
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5); // Randomize the order of the cards
}

// Initialize the game
function initializeGame() {
    gameBoard.innerHTML = ''; // Clear the game board
    flippedCards = []; // Clear the flipped cards
    matchedCards = 0; // Reset the number of matched cards
    moves = 0; // Reset the number of moves
    seconds = 0; // Reset the elapsed seconds
    updateMoves(); // Update the moves counter
    updateTimer(); // Update the timer display
    clearInterval(timer); // Clear the timer interval

    const shuffledCards = shuffle([...cards]); // Shuffle the cards
    shuffledCards.forEach(cardValue => { // Create card elements
        const card = document.createElement('div'); // Create a card element
        card.classList.add('card'); // Add the card class
        card.dataset.value = cardValue; // Set the card value
        card.addEventListener('click', handleCardClick); // Add a click event listener
        gameBoard.appendChild(card); // Add the card to the game board
    });
}

// Handle card click
function handleCardClick(e) {
    const card = e.target; // Get the clicked card

    if (card.classList.contains('flipped') || card.classList.contains('matched') || flippedCards.length === 2) { // Check if the card is flipped, matched, or two cards are already flipped
        return;  // Do nothing
    }

    if (!timer) startTimer(); // Start the timer if not already started

    card.classList.add('flipped'); // Flip the card
    card.textContent = card.dataset.value; // Show the card value
    flippedCards.push(card); // Add the card to the flipped cards

    if (flippedCards.length === 2) { // Check if two cards are flipped
        moves++; // Increment the number of moves
        updateMoves(); // Update the moves counter

        if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) { // Check if the flipped cards match
            flippedCards.forEach(c => c.classList.add('matched')); // Add the matched class to the cards
            matchedCards += 2; // Increment the number of matched cards
            flippedCards = []; // Clear the flipped cards
            if (matchedCards === cards.length) { // Check if all cards are matched
                clearInterval(timer); // Stop the timer
                alert(`You won! Time: ${seconds} seconds, Moves: ${moves}`); // Show the winning message
            }
        } else {
            setTimeout(() => { // Flip the cards back after 1 second
                flippedCards.forEach(c => { // Flip the cards back
                    c.classList.remove('flipped'); // Remove the flipped class
                    c.textContent = ''; // Hide the card value
                });
                flippedCards = []; // Clear the flipped cards
            }, 1000); // 1 second delay
        }
    }
}

// Update moves counter
function updateMoves() {
    movesCounter.textContent = `Moves: ${moves}`; // Update the moves counter
}

// Start the timer
function startTimer() {
    timer = setInterval(() => { // Start the timer interval
        seconds++; // Increment the elapsed seconds
        updateTimer(); // Update the timer display
    }, 1000); // Update every second
}

// Update timer display
function updateTimer() {
    timerDisplay.textContent = `Time: ${seconds}s`; // Update the timer display
}

// Restart the game
restartButton.addEventListener('click', () => {
    clearInterval(timer); // Stop the timer
    initializeGame(); // Initialize the game
});

// Initialize on load
initializeGame(); // Initialize the game
