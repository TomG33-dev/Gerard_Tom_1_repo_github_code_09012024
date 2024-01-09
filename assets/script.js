document.addEventListener('DOMContentLoaded', function() {
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');
    const bannerImg = document.querySelector('.banner-img');
    const tagLine = document.querySelector('#banner p');
    const dots = Array.from(document.querySelectorAll('.dot'));
    const slides = [
        {
            "image":"slide1.jpg",
            "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image":"slide2.jpg",
            "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image":"slide3.jpg",
            "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image":"slide4.png",
            "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];
    let currentSlide = 0;

    function updateSlide() {
        bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;
        tagLine.innerHTML = slides[currentSlide].tagLine;
        dots.forEach(dot => dot.classList.remove('dot_selected'));
        dots[currentSlide].classList.add('dot_selected');
    }

    arrowLeft.addEventListener('click', function() {
        console.log('Clic sur la flèche gauche');
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        updateSlide();
    });

    arrowRight.addEventListener('click', function() {
        console.log('Clic sur la flèche droite');
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        updateSlide();
    });

    updateSlide();
});