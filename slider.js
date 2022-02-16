const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnRight = document.querySelector('#btn-right');
const btnLeft = document.querySelector('#btn-left');

slider.insertAdjacentElement('afterbegin', sliderSectionLast)

const Next = () => {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0]
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all .5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },500)
}

const Prev = () => {
    let sliderSection = document.querySelectorAll(".slider-section")
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all .5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500)
}


btnRight.addEventListener("click", () => {
    Next();
})

btnLeft.addEventListener("click", () => {
   Prev();
})

setInterval(() => {
    Next();
},3500)