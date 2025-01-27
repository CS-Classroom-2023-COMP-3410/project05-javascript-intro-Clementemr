// JavaScript for Sorting Visualization Tool

const arrayContainer = document.getElementById("array-container");  // Array container
const algorithmSelect = document.getElementById("algorithm-select");    // Algorithm select
const speedRange = document.getElementById("speed-range");  // Speed range
const startButton = document.getElementById("start");   // Start button
const resetButton = document.getElementById("reset");   // Reset button
const commentary = document.getElementById("explanation");  // Commentary

let array = [];  // Array to be sorted
let speed = 100 - speedRange.value; // Speed of visualization

// Generate a random array
function generateArray(size = 20) { 
    array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);    // Generate random array
    renderArray();  // Render the array
}

// Render the array as bars
function renderArray() {
    arrayContainer.innerHTML = "";  // Clear the array container
    array.forEach(value => {    // Create bars for each value
        const bar = document.createElement("div");  // Create a bar element
        bar.classList.add("bar");   // Add the bar class
        bar.style.height = `${value * 3}px`;    // Set the bar height
        arrayContainer.appendChild(bar);    // Add the bar to the array container
    });
}

// Sleep function for animation
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));   // Return a promise that resolves after a delay
}

// Bubble Sort
async function bubbleSort() {
    const bars = document.querySelectorAll(".bar");   // Get all bars
    for (let i = 0; i < array.length - 1; i++) {    // Iterate over the array
        for (let j = 0; j < array.length - i - 1; j++) {    // Iterate over the unsorted part
            bars[j].classList.add("comparing"); // Highlight the bars being compared
            bars[j + 1].classList.add("comparing"); // Highlight the bars being compared

            commentary.textContent = `Comparing ${array[j]} and ${array[j + 1]}`;   // Display commentary

            if (array[j] > array[j + 1]) {  // Compare the values
                commentary.textContent = `Swapping ${array[j]} and ${array[j + 1]}`;    // Display commentary
                [array[j], array[j + 1]] = [array[j + 1], array[j]];    // Swap the values
                renderArray();  // Render the array
                await sleep(speed); // Delay
            }

            bars[j].classList.remove("comparing");  // Remove highlighting
            bars[j + 1].classList.remove("comparing");  // Remove highlighting
        }

        bars[array.length - i - 1].classList.add("sorted");   // Mark the sorted bars
    }

    bars[0].classList.add("sorted");    // Mark the last bar as sorted
    commentary.textContent = "Array sorted!";   // Display commentary
}

// Insertion Sort
async function insertionSort() {
    const bars = document.querySelectorAll(".bar");  // Get all bars
    for (let i = 1; i < array.length; i++) {    // Iterate over the array
        let key = array[i]; // Get the key value
        let j = i - 1;  // Set the comparison index

        bars[i].classList.add("comparing"); // Highlight the bar being compared
        commentary.textContent = `Key: ${key}`;   // Display commentary

        while (j >= 0 && array[j] > key) {  // Compare the key with the sorted part
            commentary.textContent = `Moving ${array[j]} to the right`;   // Display commentary
            array[j + 1] = array[j];    // Move the value to the right
            renderArray();  // Render the array
            await sleep(speed); // Delay
            j--;    // Move to the next comparison index
        }

        array[j + 1] = key; // Insert the key value
        renderArray();  // Render the array
        await sleep(speed); // Delay

        bars[i].classList.remove("comparing");  // Remove highlighting
    }

    document.querySelectorAll(".bar").forEach(bar => bar.classList.add("sorted"));  // Mark all bars as sorted
    commentary.textContent = "Array sorted!";   // Display commentary
}

// Handle sorting visualization
async function startSorting() {
    startButton.disabled = true;    // Disable the start button
    resetButton.disabled = true;    // Disable the reset button

    const algorithm = algorithmSelect.value;    // Get the selected algorithm
    if (algorithm === "bubble") {   // Check the selected algorithm
        await bubbleSort(); // Visualize bubble sort
    } else if (algorithm === "insertion") {   // Check the selected algorithm
        await insertionSort();  // Visualize insertion sort
    }

    startButton.disabled = false;   // Enable the start button
    resetButton.disabled = false;   // Enable the reset button
}

// Reset the array
function resetArray() {
    generateArray();    // Generate a new array
    commentary.textContent = "Select an algorithm and press start to visualize the sorting process.";   // Display commentary
}

// Update speed
speedRange.addEventListener("input", () => {    // Add input event listener
    speed = 100 - speedRange.value; // Update speed
});

// Event listeners
startButton.addEventListener("click", startSorting);    // Start button
resetButton.addEventListener("click", resetArray);  // Reset button

// Initialize the array
generateArray();
