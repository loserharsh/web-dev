const template = document.getElementById('box-template');

function createBox() {
    const box = template.content.cloneNode(true);

    const closeButton = box.querySelector('.close');
    const minimizeButton = box.querySelector('.minimize');

    minimizeButton.addEventListener('click', () => {
        const mbox = minimizeButton.closest('.box');
        mbox.style.backgroundColor = 'red';
    });
    closeButton.addEventListener('click', () => {
        closeButton.closest('.box').remove();
    });

    document.body.appendChild(box);
}

const spawn = document.querySelector('.app');

spawn.addEventListener('click', () => {
    createBox();
});