const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray",
    "cyan", "magenta", "lime", "teal", "indigo", "violet", "gold", "silver", "maroon", "navy", "olive"];


const boxing = document.querySelectorAll(".box");
boxing.forEach((box) => {
    box.style.display = "flex";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.border = "2px solid black";
    
});

const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flex = "0 0 100%";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.gap = "20px";
container.style.height = "100vh";
container.style.width = "100%";


boxing.forEach((box) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
});