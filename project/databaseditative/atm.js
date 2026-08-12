
class creatingb{
    constructor(height, width, color, classname, top, left){
        this.height = height;
        this.width = width;
        this.color = color; 
        this.classname = classname;
        this.top = top;
        this.left = left;
        const mainDiv = document.createElement('div');
        mainDiv.setAttribute('class', classname);
        document.querySelector('body').appendChild(mainDiv);
        mainDiv.style.position = 'absolute';
        mainDiv.style.top = this.top + 'px';
        mainDiv.style.left = this.left + 'px';
        mainDiv.style.backgroundColor = this.color;
        mainDiv.style.height = this.height + 'px';
        mainDiv.style.width = this.width + 'px';
    }
}

const create = new creatingb(100, 100, '#5e8583', 'flot', 10, 10);
const create2 = new creatingb(100, 100, '#64bac2', 'flot1', 10, 120);
const create3 = new creatingb(100, 100, '#64bac2', 'flot2', 10, 230);