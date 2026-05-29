"homepage":"https://strongeagle49-blip.github.io/Capstone"
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}

const toggleZoom = (e) => {
    const image = e.target;
    image.classList.toggle('zoomed');
}

const images = document.querySelectorAll('.zoomable');

images.forEach(image => {
    image.addEventListener('click', toggleZoom);
});

