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


const newdiv = document.getElementsByClassName("bax")[2];

newdiv.style.backgroundColor = "yellow";
newdiv.style.border = "2px solid black";

const bx5 = document.getElementById("box5");
bx5.style.backgroundColor = "orange";
bx5.style.border = "2px solid black";


const dis = document.querySelector(".bax");
dis.style.display = "flex";
dis.style.justifyContent = "center";

const allboxes = document.querySelectorAll(".bax");
// allboxes.forEach((element) => {
//     element.style.display = "flex";
//     element.style.justifyContent = "center";
// });

for (let i = 0; i < allboxes.length; i++) {
    allboxes[i].style.display = "flex";
    allboxes[i].style.justifyContent = "center";
}