// let a = document.querySelector(".btn");
// const titles = document.querySelector(".title");

// a.addEventListener("click", () => {
//     titles.style.backgroundColor = "red";
//     titles.innerHTML = "You clicked the button!";

// });
// a.addEventListener("dblclick", () => {
//     titles.style.backgroundColor = "red";
//     titles.innerHTML = "You double-clicked the button!";
// });
// a.addEventListener("mouseenter", () => {
//     titles.style.backgroundColor = "red";
// });
// a.addEventListener("mouseleave", () => {
//     titles.style.backgroundColor = "white";
// });
const callback = (name) => {
    console.log("hello " + name);
}
const loadscirpt = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("harry")
    doucument.body.appendChild(sc);
};
loadscript("ssss.js", callback);