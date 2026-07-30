console.log("Hello, World!");
document.title = "DOM Manipulation";
document.body.style.backgroundColor = "lightblue";
const heading = document.createElement("h1");
heading.textContent = "Welcome to DOM Manipulation!";
document.body.appendChild(heading);
// console.log("document.title:", document.title);
// console.log(document.body);

document.body.firstElementChild.style.backgroundColor = "lightgreen";

document.body.firstElementChild.style.fontSize = "2em";
const thischild = document.body.firstElementChild.firstElementChild;
thischild.style.color = "red";
thischild.style.fontSize = "1.5em";
thischild.style.backgroundColor = "teal";
