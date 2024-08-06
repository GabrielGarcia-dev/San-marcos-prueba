function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('visible');
    navList.classList.toggle('hidden');
}

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel .product');
const track = document.querySelector('.carousel-track');

function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlidePosition();
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(nextSlide, 3000);
});

