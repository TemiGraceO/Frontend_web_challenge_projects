const slide = document.querySelectorAll('.slides');
let current = 0;
slide[current].classList.add('active');

setTimeout(() => {
    setInterval(() => {
        slide[current].classList.remove('active');
        current = (current + 1)% slide.length;
        slide[current].classList.add('active');
    }, 3000);
},3000);