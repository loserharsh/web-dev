const template = document.getElementById('box-template');
let x = 100;

function createBox(x) {
    const box = template.content.cloneNode(true);
    const sbox = box.querySelector('.box');
    sbox.style.left = x + 'px';
    sbox.style.top = x + 'px';
    const closeButton = box.querySelector('.close');
    const minimizeButton = box.querySelector('.minimize');
    const tbar = box.querySelector('.tbar');

    // Close
    closeButton.addEventListener('click', () => {
        closeButton.closest('.box').remove();
    });
    
    // Minimize
    minimizeButton.addEventListener('click', () => {
        const mbox = minimizeButton.closest('.box');
        mbox.style.backgroundColor = '#8d3737';
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
        mxbox.style.width = '320px';
        mxbox.style.height = '180px';
        mxbox.style.top = '100px'
        mxbox.style.left = '100px'
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

const spawn = document.querySelector('.app');

spawn.addEventListener('click', () => {
    x += 14;
    createBox(x);
});