// alert("hello world from script.js!");

let name = "John";
let age = 30;
var a = 32;
let b = 8;

// console.log(name);

{
    let age = 49;
    // console.log("age inside block is :" + age);
}

// console.log("code is running....");

let x = 10;
let y = 3.14159;
let z = true;
const PI = 3.14159;
let p = null;
let q = undefined;
let r = "Hello World";
let s = [1, 2, 3, 4, 5];

// console.log(x, y, z, PI, p, q, r, s);
// console.log(typeof x, typeof y, typeof z, typeof PI, typeof p, typeof q, typeof r, typeof s);

let o = {
    "name": "John",
    "age": 30,
    "code number": 1234
};
console.log(o["name"]);
console.log("Your name is " + o.name );
console.log("number and age : ",o["code number"], o["age"]);