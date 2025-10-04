const image = document.getElementById('slideImage');
window.addEventListener('scroll', () => {
    const imageTop = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (imageTop < windowHeight - 30){
        image.classList.add('show');
    }
});