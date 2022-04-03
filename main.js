let navManu = document.getElementById("nav_manu")
let close = document.getElementById("close")
let toggle = document.getElementById("toggle")
let searchBtn = document.getElementById("search-btm")
let search = document.getElementById("search-formm")
let navItem1 = document.getElementById("nav_item1")
let navItem2 = document.getElementById("nav_item2")
let navItem3 = document.getElementById("nav_item3")
let navItem4 = document.getElementById("nav_item4")
if(toggle){
    toggle.addEventListener("click" , ()=>{
        navManu.classList.add("show")
    })
}
if(close){
    close.addEventListener("click" , ()=>{
        navManu.classList.remove("show")
    })
}
navItem1.onclick = function(){
    navManu.classList.remove("show")
}
navItem2.onclick = function(){
    navManu.classList.remove("show")
}
navItem3.onclick = function(){
    navManu.classList.remove("show")
}
navItem4.onclick = function(){
    navManu.classList.remove("show")
}
searchBtn.addEventListener("click", ()=>{
    search.classList.toggle("display")
})
close.addEventListener("click", ()=>{
    search.classList.toggle("hide")
})
let swiper = new Swiper(".containerr", {
    loop:true,
    spaceBetween :24,
    slidesPerView:'auto',
    grabCursor:true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 48,
        },
    },
});
let mixer = mixitup('.featuredd', {
    selectors: {
        target: '.featured-cards'
    },
    animation: {
        duration: 300
    }
});
const sr =ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay:400
})
sr.reveal('.home-one')
sr.reveal('.containerr')
sr.reveal('.home-img', {delay:500})
sr.reveal('.home-panal', {delay:700, interval:100, origin:'botton'})
sr.reveal('.home-panal', {delay:900, origin:'botton'})
sr.reveal('.home-btn', {delay:1000, origin:'botton'})
sr.reveal('.about-one', {origin:'left'})
sr.reveal('.about-two', {origin:'right'}) 
sr.reveal('.map', {delay:600, origin:'botton'})
sr.reveal('.all-card', {interval:300})
sr.reveal('.featured-btns')
sr.reveal('.featuredd')
// sr.reveal('.offer-data', {origin:'left'})
// sr.reveal('.offer-img', {origin:'right'}) 
sr.reveal('.logos', {interval:100})
sr.reveal('.footer-data', {interval:300})
// sr.reveal('.credit', {delay:100, origin:'botton'})