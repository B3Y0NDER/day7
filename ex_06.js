let eyeClickCounter = 0;

function handleEyeClick() {
eyeClickCounter += 1;    
if (eyeClickCounter >= 10) {
const leftIris = document.querySelector(".eye-left-iris");
const rightIris = document.querySelector(".eye-right-iris");
leftIris.style.fill = generateRandomColor();
rightIris.style.fill = generateRandomColor();
eyeClickCounter = 0;
}
}
function generateRandomColor() {
const hexValues = "123456789ABCDEF";
let colorCode = "#";
    
for (let i = 0; i < 6; i++) {
colorCode += hexValues[Math.floor(Math.random() * 16)];
}
    
return colorCode;
}
document.getElementById('robot').addEventListener('click', expressPain);
document.getElementById('robot').addEventListener('mouseover', showCoordinates);
document.getElementById('robot').addEventListener('mouseout', beep);
document.getElementById('robot-input').addEventListener('input', reassurance);
document.querySelectorAll(".eye-left-iris, .eye-right-iris").forEach(iris => {
iris.addEventListener("click", handleEyeClick);
});
