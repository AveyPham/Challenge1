const menu = document.getElementById("minimenu");
const close = document.getElementById("close");
const nav = document.getElementById("menu");

if(menu) {
    menu.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if(close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}


function HandleCarousel(container, items, btn) {
    const slidesContainer = document.getElementById(container);
    const slides = document.getElementsByClassName(items);
    const numberSlide = slides.length - 1;
    const slideWidth = slides[0].clientWidth;
    window.addEventListener('resize', () => {
        slidesContainer.scrollLeft = 0;
    });
    if(btn == 'next') {
        if(slidesContainer.scrollLeft + 20 >= slideWidth * numberSlide) {
            slidesContainer.scrollLeft = 0;
            return;
        }
        slidesContainer.scrollLeft += slideWidth;
    }
    else if(btn == 'prev') {
        if(slidesContainer.scrollLeft == 0) {
            slidesContainer.scrollLeft = slideWidth * numberSlide;
            return;
        }
        slidesContainer.scrollLeft -= slideWidth;
    }
}