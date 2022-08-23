const btn = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.burger__nav');

btn.addEventListener('click', () => {
    btn.classList.toggle('hide');
    burgerMenu.classList.toggle('active');
})