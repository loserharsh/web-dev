console.log("Hello, World!");
document.title = "DOM Manipulation";
document.body.style.backgroundColor = "lightblue";
const heading = document.createElement("h1");
heading.textContent = "Welcome to DOM Manipulation!";
document.body.appendChild(heading);
console.log("document.title:", document.title);
console.log(document.body);