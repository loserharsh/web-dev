let rand = Math.random() * 10;

// console.log(rand);

function rightadd(a, b){
    return a + b;
}
function rightsub(a, b){
    return a - b;
}
function rightmult(a, b){
    return a * b;
}
function rightdiv(a, b){
    return a / b;
}
function div(a, b){
    return a * b;
}
function add(a, b){
    return a * b;
}
function sub(a, b){
    return a / b;
}
function mult(a, b){
    return a + b;
}

let x = 5;
let y = 10;

if (rand > 2){
    console.log("right this time ");
    console.log("Addition: " + rightadd(x, y));
    console.log("Subtraction: " + rightsub(x, y));
    console.log("Multiplication: " + rightmult(x, y));
    console.log("Division: " + rightdiv(x, y));
}
else {
    console.log("wrong this time ");
    console.log("Addition: " + add(x, y));
    console.log("Subtraction: " + sub(x, y));
    console.log("Multiplication: " + mult(x, y));
    console.log("Division: " + div(x, y));
}


