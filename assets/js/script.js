const hamburger = document.querySelector('.hamburger');
const hamburgerSpan = document.querySelector('.hamburger span');
const mobileHamburger = document.querySelector('.mobile__menu-list');
const mHamburger = document.querySelectorAll('.mobile__item');
const nav = document.querySelector('.nav');
const progressBarDiv = document.querySelector('.progress__bar');
const indicator = document.querySelector('.indicator');

hamburger.addEventListener('click' ,() => {
    hamburger.classList.toggle('open');
    mobileHamburger.classList.toggle('active');
    indicator.classList.toggle('active')
    nav.classList.toggle('show')
})

mHamburger.forEach((item) => {
    item.addEventListener('click' ,() => {
    hamburger.classList.remove('open');
    mobileHamburger.classList.remove('active')
    indicator.classList.remove('active')
    nav.classList.remove('show')
})
})

window.onscroll = function(){
    scrollFunction();
    progressBar();
}

function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
        nav.classList.add('active');
        hamburger.classList.add('active');
    }else{
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }
}


function progressBar(){
    var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height  = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var widthPercentage = (windowScroll/height) * 100;
    progressBarDiv.style.width = widthPercentage + '%';
}





