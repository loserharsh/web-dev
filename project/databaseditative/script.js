class Draggable {
    constructor(element) {
        this.element = element;

        this.newX = 0;
        this.newY = 0;
        this.startX = 0;
        this.startY = 0;

        this.element.addEventListener("mousedown", this.mousedown.bind(this));
    }

    mousedown(e) {
        this.startX = e.clientX;
        this.startY = e.clientY;

        document.addEventListener("mousemove", this.mousemove);
        document.addEventListener("mouseup", this.mouseup);
    }

    mousemove = (e) => {
        this.newX = this.startX - e.clientX;
        this.newY = this.startY - e.clientY;

        this.startX = e.clientX;
        this.startY = e.clientY;

        this.element.style.top =
            (this.element.offsetTop - this.newY) + "px";

        this.element.style.left =
            (this.element.offsetLeft - this.newX) + "px";
    };

    mouseup = () => {
        document.removeEventListener("mousemove", this.mousemove);
    };
}

const flot = document.querySelector(".flot");
const flot1 = document.querySelector(".flot1");


addEventListener("mousedown", (e) => {
    flot.style.zIndex = 1;
    flot1.style.zIndex = 0;
});
addEventListener("mouseup", (e) => {
    flot.style.zIndex = 0;
    flot1.style.zIndex = 0;
});

const window1 = new Draggable(flot);
const window2 = new Draggable(flot1);



const cross1 = document.querySelector(".flot .cross");
cross1.addEventListener("click", () => {
    flot.style.display = "none";
});
const cross2 = document.querySelector(".flot1 .crossf");
cross2.addEventListener("click", () => {
    flot1.style.display = "none";
});