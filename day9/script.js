let diav = document.createElement("div");
diav.setAttribute('id', 'myDiv');
document.querySelector(".container").append(diav); 
diav.innerHTML = "Hello, World!";

let cont = document.querySelector(".container");
cont.insertAdjacentHTML('afterend', '<p>This is a new paragraph added to the container.</p>');
