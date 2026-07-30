let name1 = "John";
let name2 = "Doe";

console.log(name1);

console.log(`this name is ${name1} and this name is ${name2}`);

let name3 = "lorem ipsum";

console.log(name3.toUpperCase());
console.log(name3.toLowerCase());
console.log(name3.length);
console.log(name3.charAt(0));
console.log(name3.charAt(6));
console.log(name3.indexOf("ipsum"));
// console.log(name3.capitalize()); // This will throw an error because capitalize is not a standard JavaScript method
console.log(name3.slice(0, 5));
console.log(name3.substring(0, 7));
console.log(name3.replace("lorem", "hello"));

