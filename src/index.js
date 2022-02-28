let hamBurger = document.getElementById('hamburger');
let target = document.querySelector('#ham-target');
let body = document.querySelector('#body');

hamBurger.addEventListener('click', function() {
    target.classList.toggle('-translate-y-36');
    body.classList.toggle('translate-y-24');
})