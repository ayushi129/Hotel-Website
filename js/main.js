//HEADER SCROLL
let nav = document.querySelector('.navbar');
window.onscroll = function() {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
};


// NAV HIDE
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove('show');
    })
})


//SWIPER SLIDER
var swiper = new Swiper('.mySwiper', {
    direction: 'vertical',
    loop: true,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});

console.log(window.screen.width, window.screen.height);

