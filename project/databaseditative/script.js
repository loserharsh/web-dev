let newX = 0;
let newY = 0;
let startX = 0;
let startY = 0;

const flot = document.querySelector('.flot');
const flot1 = document.querySelector('.flot1');
flot.addEventListener('mousedown', mousedown);
flot1.addEventListener('mousedown', mousedown);
function mousedown(e) {
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mousemove);
    document.addEventListener('mouseup', mouseup);
};

function mousemove(e) {
    newX =  startX - e.clientX ;
    newY = startY - e.clientY;
    startX = e.clientX;
    startY = e.clientY;
    flot.style.top = (flot.offsetTop - newY)  + 'px';
    flot.style.left = (flot.offsetLeft - newX) + 'px';


};

function mouseup(e){
    document.removeEventListener('mousemove', mousemove);
};