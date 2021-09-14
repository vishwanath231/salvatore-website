// DOM Elment's
const hamburger = document.querySelector('.hamburger');
const hamburgerSpan = document.querySelector('.hamburger span');
const mobileHamburger = document.querySelector('.mobile__menu-list');
const mHamburger = document.querySelectorAll('.mobile__item');
const nav = document.querySelector('.nav');
const progressBarDiv = document.querySelector('.progress__bar');
const indicator = document.querySelector('.indicator');



// Hamburger Menu
hamburger.addEventListener('click' ,() => {
    hamburger.classList.toggle('open');
    mobileHamburger.classList.toggle('active');
    indicator.classList.toggle('active')
    nav.classList.toggle('show')
})


// Hamburger Menu Item
mHamburger.forEach((item) => {
    item.addEventListener('click' ,() => {
        hamburger.classList.remove('open');
        mobileHamburger.classList.remove('active');
        indicator.classList.remove('active');
        nav.classList.remove('show');
    })
})


// Window 
window.onscroll = function(){
    scrollFunction();
    progressBar();
    scrollTopFun();
}


// Navbar scroll change background color
function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
        nav.classList.add('active');
        hamburger.classList.add('active');
    }else{
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }
}


// Scroll Progress Bar
function progressBar(){
    var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height  = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var widthPercentage = (windowScroll/height) * 100;
    progressBarDiv.style.width = widthPercentage + '%';
}



//Testimonial Slider
var slideIndex = 1;

showSlide(slideIndex)

function plusSlides(n){
    showSlide( slideIndex += n)
}

function currentSlide(n){
    showSlide(slideIndex = n)
}

function showSlide(n){

    var i;
    var slides = document.getElementsByClassName('slides');
    var dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i= 0;  i< slides.length; i++) {
        slides[i].style.display = "none"
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
 
}



//Back to Top
const scrollContainer = document.querySelector('.scroll__container');
const scrollBtn = document.querySelector('.scroll__btn');


function scrollTopFun(){
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        scrollContainer.classList.add('active')
    }else{
        scrollContainer.classList.remove('active')
    }
}

scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
