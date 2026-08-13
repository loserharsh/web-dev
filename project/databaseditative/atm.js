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
        mbox.style.position  = 'absolute';
        mbox.style.top = '100px';
        mbox.style.left = '100px';
        mbox.style.width = '320px';
        mbox.style.height = '180px';
    });

    // Maximize
    const maximizeButton = box.querySelector('.maximize');
    maximizeButton.addEventListener('click', () => {
        const mxbox = maximizeButton.closest('.box');
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