function reduceOpacity() {
const square = document.getElementById('square');
rectangle.style.opacity = parseFloat(rectangle.style.opacity) * 0.5;    
}

function resetOpacity(){
const square = document.getElementById('square')
rectangle.style.opacity = 1
}

const rectangle = document.getElementById('square');
rectangle.addEventListener('mouseover',reduceOpacity)
rectangle.addEventListener('mouseout', resetOpacity)
