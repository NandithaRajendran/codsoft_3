//JS
setInterval(updateClock, 1000);

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString('en-US', { hour12: true });
}

updateClock(); // Initial call to display the clock immediately