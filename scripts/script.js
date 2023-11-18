let closeBtn = document.querySelector(".close-btn");
let navPanel = document.querySelector(".header__nav");
let hamburgerBtn = document.querySelector(".humburger-btn");
let body = document.querySelector('body');

hamburgerBtn.addEventListener('click', ()=>{
    navPanel.classList.toggle('show');
})

closeBtn.addEventListener('click', ()=>{
    navPanel.classList.remove('show');
})