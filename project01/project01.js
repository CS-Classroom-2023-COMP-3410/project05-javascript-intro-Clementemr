// JavaScript for Customizable Digital Clock

const clock = document.getElementById("clock"); // Clock element
const toggleFormat = document.getElementById("toggle-format"); // 24-hour format toggle
const colorPicker = document.getElementById("color-picker"); // Clock color picker
const fontSizeInput = document.getElementById("font-size"); // Clock font size input 
const alarmTimeInput = document.getElementById("alarm-time"); // Alarm time input
const setAlarmButton = document.getElementById("set-alarm"); // Set alarm button
const alarmList = document.getElementById("alarm-list"); // Alarm list 

let alarms = JSON.parse(localStorage.getItem("alarms")) || []; // Alarms array
let is24HourFormat = JSON.parse(localStorage.getItem("is24HourFormat")) || false; // 24-hour format flag

// Initialize preferences
function initializePreferences() { 
    toggleFormat.checked = is24HourFormat; // Set 24-hour format toggle
    updateClockColor(localStorage.getItem("clockColor") || "#000000"); // Set clock color
    fontSizeInput.value = localStorage.getItem("fontSize") || 48; // Set clock font size
    updateClockFontSize(fontSizeInput.value); // Update clock font size
    renderAlarms(); // Render alarms
}

// Update the clock
function updateClock() {
    const now = new Date(); // Get current date and time
    let hours = now.getHours(); // Get hours, minutes, and seconds
    let minutes = now.getMinutes(); // Get minutes
    let seconds = now.getSeconds(); // Get seconds

    if (!is24HourFormat) {
        const period = hours >= 12 ? "PM" : "AM"; // Get period (AM/PM)
        hours = hours % 12 || 12; // Convert to 12-hour format
        clock.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${period}`; // Display time
    } else {
        clock.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`; // Display time
    }

    checkAlarms(now); // Check and trigger alarms
}

// Format time with leading zero
function formatTime(unit) {
    return unit.toString().padStart(2, "0"); // Add leading zero if needed
}

// Check and trigger alarms
function checkAlarms(currentTime) {
    const currentFormattedTime = `${formatTime(currentTime.getHours())}:${formatTime(currentTime.getMinutes())}`; // Format current time
    alarms.forEach((alarm, index) => { // Check each alarm
        if (alarm === currentFormattedTime) { // Check if alarm time matches current time
            alert("Alarm Triggered: " + alarm); // Trigger alarm
            alarms.splice(index, 1); // Remove alarm
            saveAlarms(); // Save alarms
            renderAlarms(); // Render alarms
        }
    });
}

// Update clock color
function updateClockColor(color) {
    clock.style.color = color; // Set clock color
    colorPicker.value = color; // Set color picker value
    localStorage.setItem("clockColor", color); // Save color to localStorage
}

// Update clock font size
function updateClockFontSize(size) {
    clock.style.fontSize = `${size}px`; // Set clock font size
    localStorage.setItem("fontSize", size); // Save font size to localStorage
}

// Add a new alarm
function addAlarm() {
    const alarmTime = alarmTimeInput.value; // Get alarm time
    if (alarmTime && !alarms.includes(alarmTime)) { // Check if alarm time is valid and not already set
        alarms.push(alarmTime); // Add alarm
        saveAlarms(); // Save alarms
        renderAlarms(); // Render alarms
    }
}

// Render alarms
function renderAlarms() {
    alarmList.innerHTML = ""; // Clear alarm list
    alarms.forEach(alarm => { // Add each alarm to the list
        const listItem = document.createElement("li"); // Create list item
        listItem.innerText = alarm; // Set list item text
        alarmList.appendChild(listItem); // Add list item to the list
    });
}

// Save alarms to localStorage
function saveAlarms() {
    localStorage.setItem("alarms", JSON.stringify(alarms)); // Save alarms to localStorage
}

// Event Listeners
setAlarmButton.addEventListener("click", addAlarm); // Add alarm button
toggleFormat.addEventListener("change", () => { // 24-hour format toggle
    is24HourFormat = toggleFormat.checked; // Update 24-hour format flag
    localStorage.setItem("is24HourFormat", is24HourFormat); // Save 24-hour format to localStorage
});
colorPicker.addEventListener("input", (e) => updateClockColor(e.target.value)); // Clock color picker
fontSizeInput.addEventListener("input", (e) => updateClockFontSize(e.target.value)); // Clock font size input

// Start clock and initialize preferences
initializePreferences(); // Initialize preferences
setInterval(updateClock, 1000); // Update clock every second
