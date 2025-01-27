const canvas = document.getElementById('drawing-canvas'); // Canvas element
const ctx = canvas.getContext('2d'); // Canvas context
const brushColorInput = document.getElementById('brush-color'); // Brush color input
const brushSizeInput = document.getElementById('brush-size'); // Brush size input
const backgroundColorInput = document.getElementById('background-color'); // Background color input
const undoButton = document.getElementById('undo'); // Undo button
const clearButton = document.getElementById('clear'); // Clear button
const saveButton = document.getElementById('save'); // Save button

canvas.width = 800; // Canvas width
canvas.height = 600; // Canvas height

let drawing = false; // Drawing flag
let brushColor = brushColorInput.value; // Brush color
let brushSize = parseInt(brushSizeInput.value); // Brush size
let backgroundColor = backgroundColorInput.value; // Background color
let strokes = []; // Strokes array
let currentStroke = []; // Current stroke

// Set initial background color
ctx.fillStyle = backgroundColor; // Set fill style
ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill rectangle

function startDrawing(event) {
    drawing = true; // Set drawing flag
    currentStroke = []; // Reset current stroke
    addPoint(event); // Add point
}

function stopDrawing() {
    if (drawing) { // Check if drawing
        drawing = false; // Reset drawing flag
        strokes.push({ points: currentStroke, color: brushColor, size: brushSize }); // Add stroke
    }
}

function draw(event) {
    if (!drawing) return; // Check if drawing
    addPoint(event); // Add point
    redraw(); // Redraw
}

function addPoint(event) {
    const rect = canvas.getBoundingClientRect(); // Get canvas bounding rectangle
    const x = event.clientX - rect.left; // Calculate x coordinate
    const y = event.clientY - rect.top; // Calculate y coordinate
    currentStroke.push({ x, y }); // Add point
}

function redraw() {
    // Clear the canvas
    ctx.fillStyle = backgroundColor; // Set fill style
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill rectangle

    // Redraw all strokes
    strokes.forEach(stroke => { // Iterate over strokes
        ctx.strokeStyle = stroke.color; // Set stroke style
        ctx.lineWidth = stroke.size; // Set line width
        ctx.beginPath(); // Begin path
        stroke.points.forEach((point, index) => { // Iterate over points
            if (index === 0) { // Check if first point
                ctx.moveTo(point.x, point.y); // Move to point
            } else {
                ctx.lineTo(point.x, point.y); // Draw line to point
            }
        });
        ctx.stroke(); // Stroke path
    });

    // Draw the current stroke
    ctx.strokeStyle = brushColor; // Set stroke style
    ctx.lineWidth = brushSize; // Set line width
    ctx.beginPath(); // Begin path
    currentStroke.forEach((point, index) => { // Iterate over points
        if (index === 0) { // Check if first point
            ctx.moveTo(point.x, point.y); // Move to point
        } else {
            ctx.lineTo(point.x, point.y); // Draw line to point
        }
    });
    ctx.stroke(); // Stroke path
}

function undoLastStroke() {
    strokes.pop(); // Remove the last stroke
    redraw(); // Redraw
}

function clearCanvas() {
    strokes = []; // Clear all strokes
    currentStroke = []; // Clear the current stroke
    ctx.fillStyle = backgroundColor; // Set fill style
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill rectangle
}

function saveCanvas() {
    const link = document.createElement('a'); // Create a link element
    link.download = 'drawing.png'; // Set download attribute
    link.href = canvas.toDataURL('image/png'); // Set href attribute
    link.click(); // Click the link
}

// Event Listeners
canvas.addEventListener('mousedown', startDrawing); // Add mousedown event listener
canvas.addEventListener('mouseup', stopDrawing); // Add mouseup event listener
canvas.addEventListener('mousemove', draw); // Add mousemove event listener
canvas.addEventListener('mouseout', stopDrawing); // Add mouseout event listener

brushColorInput.addEventListener('change', (e) => brushColor = e.target.value); // Add change event listener
brushSizeInput.addEventListener('change', (e) => brushSize = parseInt(e.target.value)); // Add change event listener
backgroundColorInput.addEventListener('change', (e) => { // Add change event listener
    backgroundColor = e.target.value; // Update background color
    redraw(); // Redraw
});

undoButton.addEventListener('click', undoLastStroke); // Add click event listener
clearButton.addEventListener('click', clearCanvas); // Add click event listener
saveButton.addEventListener('click', saveCanvas); // Add click event listener
