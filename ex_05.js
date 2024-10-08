function expressPain() {
const bubble = document.getElementById("speech-bubble");
bubble.innerHTML = "Ouch! That stings!";
setTimeout(() => {
bubble.innerHTML = "Hey there!";
}, 2000);
}

function showCoordinates(event) {
const posX = event.clientX;
const posY = event.clientY;
const display = document.getElementById("screen-text");
display.innerHTML = `Coordinates: X=${posX}, Y=${posY}`;
}

function beep() {
const screen = document.getElementById("screen-text");
screen.innerHTML = "Beep beep beep!";
}

function reassurance() {
const screen = document.getElementById("screen-text");
screen.innerHTML = "No worries, I’ve got this!";
setTimeout(() => {
screen.innerHTML = "Beep beep beep!";
}, 2000);
}

