let closeBtn = document.querySelector(".close-btn");
let navPanel = document.querySelector(".header__nav");
let hamburgerBtn = document.querySelector(".humburger-btn");
let body = document.querySelector('body');
let experianceTopic = document.querySelector(".experiance__topic");
let experianceLinks = document.querySelectorAll(".experiance__topic-link");

hamburgerBtn.addEventListener('click', ()=>{
    navPanel.classList.toggle('show');
})

closeBtn.addEventListener('click', ()=>{
    navPanel.classList.remove('show');
})

experianceTopic.addEventListener('click', (e)=>{
    for (i=0; i<experianceLinks.length; i++){
        if(experianceLinks[i].classList.contains('active-topic-link')){
            experianceLinks[i].classList.remove('active-topic-link');
        }
        if(e.target === experianceLinks[i]){
            experianceLinks[i].classList.add('active-topic-link');
        }
    }
})





