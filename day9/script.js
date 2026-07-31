
function updateVideoInfo(title, viewCount, uploaderName, uploadDate , imagea) {
    // Implementation for updating video info
    const titles = document.querySelector('.title');
    titles.insertAdjacentText('afterbegin', title);

    const views = document.querySelector('.view');
    views.insertAdjacentText('afterbegin', viewCount);

    const name = document.querySelector('.name');
    name.insertAdjacentText('afterbegin', uploaderName);

    const date = document.querySelector('.date');
    date.insertAdjacentText('afterbegin', uploadDate);
    const image = document.querySelector('.imag');
    image.insertAdjacentHTML('beforeend', `<img width="100%" height="100%" src="${imagea}" alt="Video Thumbnail">`);
    image.style.objectFit = 'cover';
}

updateVideoInfo('Installing vscode & how websites work sigma web development course - tutorial #1', '1,234,567', 'code with harry', '2 ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0iI6O610-l60ONVjoOFJ8enypJZZpU7FspqOHh39yA&s=10');