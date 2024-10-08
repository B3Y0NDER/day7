function increaseQuantity(button) {
const input = button.previousElementSibling;
let quantity = parseInt(input.value);
input.value = quantity + 1;
}

function decreaseQuantity(button){
const input = button.nextElementSibling;
let quantity = parseInt(input.value);
if (quantity > 1){
input.value = quantity - 1;
}
}

function deleteProduct(item){
item.remove();
}
function toggleLike(button) {
button.classList.toggle('is-active');
}
document.querySelectorAll('.plus-btn').forEach(button =>{
button.addEventListener ('click', () => increaseQuantity(button))
})
document.querySelectorAll('.minus-btn').forEach(button => {
button.addEventListener('click', () => decreaseQuantity(button));
});

document.querySelectorAll('.delete-btn').forEach(button => {
button.addEventListener('click', () => {
const item = button.closest('.item');
deleteProduct(item);
});
});

document.querySelectorAll('.like-btn').forEach(button => {
button.addEventListener('click', () => toggleLike(button));
});
