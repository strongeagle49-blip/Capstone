const toggleZoom = (e) => {
    const image = e.target;
    image.classList.toggle('zoomed');
}

const images = document.querySelectorAll('.zoomable');

images.forEach(image => {
    image.addEventListener('click', toggleZoom);
});

