let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active')
            }, (idx + 1) * 400)
        })
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                span.classList.remove('active')
                span.classList.add('fade')
            }, (idx + 1) * 50)
        }, 2000)
        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300)
    })
})

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});