let newX = 0;
let newY = 0;
let startX = 0;
let startY = 0;

const flot = document.querySelector('.flot');
class Flot {
    constructor(name) {
        this.name = name;
        this.flot = document.querySelector(`.${name}`);
        this.flot.addEventListener('mousedown', this.mousedown.bind(this));
    }

    mousedown(e) {
        startX = e.clientX;
        startY = e.clientY;

        document.addEventListener('mousemove', this.mousemove.bind(this));
        document.addEventListener('mouseup', this.mouseup.bind(this));
    }

    mousemove(e) {
        newX = startX - e.clientX;
        newY = startY - e.clientY;
        startX = e.clientX;
        startY = e.clientY;
        this.flot.style.top = (this.flot.offsetTop - newY) + 'px';
        this.flot.style.left = (this.flot.offsetLeft - newX) + 'px';

    }

    mouseup(e) {
        document.removeEventListener('mouseup', this.mouseup.bind(this));
    }

}

const flotInstance = new Flot('flot');