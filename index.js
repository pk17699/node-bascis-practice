function add(x, y){
    return x + y;
}
function substract(x, y){
    return x - y;
}
function divide(x, y){
    if(y == 0) return "cannot divide by zero";
    return x/y;
}
function multiply(x, y){
    return x*y;
}
console.log(add(4, 5));
console.log(substract(4, 8));
console.log(divide(4, 0));
console.log(multiply(3, 7));
console.log(divide(8, 4));