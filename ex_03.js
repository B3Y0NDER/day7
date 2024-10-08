function map(array,callback) {
let resultArray = [];

for (let i = 0; i < array.lenth){
resultArray.push(callback(array[i])),   
}
return resultArray
}

function isEven(number) {
return number % 2 === 0;
}
console.log(map([5,8,10], isEven));
