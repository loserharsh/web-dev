const template = document.getElementById('box-template');
let x = 100;
let z = 1;

function createBox(x,color1, image,z, image2) {
    const box = template.content.cloneNode(true);
    const sbox = box.querySelector('.box');
    sbox.style.left = x + 100 + 'px';
    sbox.style.top = x + 100 + 'px';
    const closeButton = box.querySelector('.close');
    const minimizeButton = box.querySelector('.minimize');
    const tbar = box.querySelector('.tbar');
    sbox.style.backgroundColor = color1;
    const image1 = box.querySelector('.box-img');
    image1.src = image;

    //tastbar
    const  taskbarIcons = document.createElement('div');
    taskbarIcons.setAttribute('class', 'taskbar-icons1');
    document.querySelector('.taskbar-icons').appendChild(taskbarIcons);
    
    taskbarIcons.style.backgroundImage = `url(${image2})`;
    taskbarIcons.style.backgroundSize = 'cover';
    taskbarIcons.style.backgroundPosition = 'center';
    taskbarIcons.style.borderRadius = '10px';
    taskbarIcons.style.width = '100px';
    taskbarIcons.style.height = '100%';
    
    
    sbox.addEventListener('mousedown', () => {
        z++;
        sbox.style.zIndex = z;
    });
    // Close
    closeButton.addEventListener('click', () => {
        closeButton.closest('.box').remove();
    });
    closeButton.addEventListener('click', () => {
        taskbarIcons.remove();
    });
    
    // Minimize
    minimizeButton.addEventListener('click', () => {
        const mbox = minimizeButton.closest('.box');
        mbox.style.display = 'none';
        taskbarIcons.addEventListener('click', () => {
            mbox.style.display = 'block';
        });
    });


    const maximize1Button = box.querySelector('.maximize1');
    maximize1Button.style.display = 'none';
    maximize1Button.addEventListener('click', () => {
        const mxbox = maximize1Button.closest('.box');
        maximize1Button.style.display = 'none';
        maximizeButton.style.display = 'block';
        maximizeButton.style.display = 'flex';
        maximizeButton.style.justifyContent = 'center';
        mxbox.style.position  = 'absolute';
        mxbox.style.width = '480px';
        mxbox.style.height = '270px';
        mxbox.style.top = '100px'
        mxbox.style.left = '300px'
    });
    // Maximize
    const maximizeButton = box.querySelector('.maximize');
    maximizeButton.addEventListener('click', () => {
        const mxbox = maximizeButton.closest('.box');
        maximizeButton.style.display = 'none';
        maximize1Button.style.display = 'block';
        maximize1Button.style.display = 'flex';
        maximize1Button.style.justifyContent = 'center';
        mxbox.style.position  = 'absolute';
        mxbox.style.width = '100vw';
        mxbox.style.height = '100vh';
        mxbox.style.top = '0px'
        mxbox.style.left = '0px'
    });
    sbox.style.zIndex = z;
    // Dragging
    let newX;
    let newY;
    
    tbar.addEventListener('mousedown', (e) => {
        newX = e.clientX;
        newY = e.clientY;
        function mousemove(e) {
            const dx = e.clientX - newX;
            const dy = e.clientY - newY;
            
            const mbox = tbar.closest('.box');
            
            mbox.style.left = mbox.offsetLeft + dx + 'px';
            mbox.style.top = mbox.offsetTop + dy + 'px';
            
            newX = e.clientX;
            newY = e.clientY;
        }
        
        function mouseup() {
            document.removeEventListener('mousemove', mousemove);
            document.removeEventListener('mouseup', mouseup);
        }
        
        document.addEventListener('mousemove', mousemove);
        document.addEventListener('mouseup', mouseup);
    });
    
    document.body.appendChild(box);
}

const spawn = document.querySelector('.app1');

spawn.addEventListener('click', () => {
    createBox(x, undefined, 'https://i.pinimg.com/736x/ad/cb/5c/adcb5c8b2b97e49ac2ae289114dfa729.jpg', z, 'https://i.pinimg.com/736x/49/d9/db/49d9dbde634d2582cce4a76e18e69ba4.jpg');
    x += 14

});
const app2 = document.querySelector('.app2');
app2.style.backgroundColor = 'red';

app2.addEventListener('click', () => {
    createBox(x, 'red', 'https://i.pinimg.com/736x/26/43/b8/2643b82fc34daa34929d9fe268857eaa.jpg', z, 'https://i.pinimg.com/736x/6a/4c/5e/6a4c5ed675aa1963d956b54afee88482.jpg');
    
    x += 14;
});
const app3 = document.querySelector('.app3');
app3.style.backgroundColor = 'blue';

app3.addEventListener('click', () => {
    createBox(x, 'blue', 'https://i.pinimg.com/736x/39/2f/f2/392ff28b2dac432be2e5779031d22d1a.jpg', z, 'https://i.pinimg.com/1200x/12/82/03/128203aa4c9be1aaf93d2a28c4901db4.jpg');
    x += 14;
});