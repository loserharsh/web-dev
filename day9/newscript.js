let a = document.querySelector(".btn");
const titles = document.querySelector(".title");

a.addEventListener("click", () => {
    titles.style.backgroundColor = "red";
    titles.innerHTML = "You clicked the button!";

});
a.addEventListener("dblclick", () => {
    titles.style.backgroundColor = "red";
    titles.innerHTML = "You double-clicked the button!";
});
a.addEventListener("mouseenter", () => {
    titles.style.backgroundColor = "red";
});
a.addEventListener("mouseleave", () => {
    titles.style.backgroundColor = "white";
});