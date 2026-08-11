
const box = document.querySelector(".flot");

document.addEventListener("mousemove", function (event) {
    box.style.left = event.clientX + "px";
    box.style.top = event.clientY + "px";
});