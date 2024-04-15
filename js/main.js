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


//COUNTER DESIGN
document.addEventListener("DOMContentLoaded", ()=>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 2766, 2500);
    counter("count3", 0, 1540, 3000);
    counter("count4", 0, 3110, 6000);
})

console.log(window.screen.width, window.screen.height);

