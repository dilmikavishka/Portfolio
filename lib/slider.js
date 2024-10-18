const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.project-card').length;
const cardWidth = 300;
let intervalId;


function goToSlide(index) {
    currentIndex = index;
    slider.style.transform = `translateX(-${index * 200}px)`;


    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}


function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
}


function startAutoSlide() {
    intervalId = setInterval(0);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}


dots.forEach(dot => {
    dot.addEventListener('click', () => {
        stopAutoSlide();
        goToSlide(dot.dataset.index);
        startAutoSlide();
    });
});

goToSlide(currentIndex);
startAutoSlide();
