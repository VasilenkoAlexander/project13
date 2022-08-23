const blogImages = document.querySelectorAll('.blogItem');

blogImages.forEach(el => {
    el.addEventListener('click', () => {
        deleteStyle();
        el.classList.add('currentItem');
    })
})

function deleteStyle() {
    blogImages.forEach(el => {
        el.classList.remove('currentItem');
    })
}
/* Кнопка "View all Blog Articles" */
const btnViewAll = document.querySelector('.blog__viewAll');

btnViewAll.addEventListener('click', () => {
    blogImages.forEach(el => {
        if (el.dataset['hidden']) {
            el.classList.toggle('hidden');
            addText();
        }
    })
})
function addText() {
    btnViewAll.innerHTML = `<img src="./image/blog/triangleBtn.svg" >
    <span>Hide All Blog Articles</span>`;
}

/* Модальное окно */
const modalBtn = document.querySelector('.bestProduct__button');
const modalWindow = document.querySelector('.modal__window');
const closeModal = document.querySelector('.modal__close');

//Вешаем событие на кнопку для показа модального окна
modalBtn.addEventListener('click', function() {
    modalWindow.style.display = 'block';
});
//Скрыть модальное при нажатии на крестик
closeModal.addEventListener('click', function() {
    modalWindow.style.display = 'none';
});

//Закрытие модального окна при нажатии на любое поле окна браузера
window.onclick = function (event) {
    if (event.target == modalWindow) {
        modalWindow.style.display = 'none';
    }
}

/* Кнопка "View all Product Reviews" */
const reviewBtn = document.querySelector('.review__btn');
const reviewBlocks = document.querySelectorAll('.content-review__item');

reviewBtn.addEventListener('click', () => {
    reviewBlocks.forEach(el => {
        if (el.dataset['hidden']) {
            el.classList.toggle('hidden');
            if (el.classList.contains('hidden')) {
                standartText(reviewBtn);
            } else {
                addTexting(reviewBtn);
            }
        } 
    })
})
function addTexting(el) {
    el.innerHTML = `<img src="./image/blog/triangleBtn.svg" >
    <span>Hide all Product Reviews</span>`;
}
function standartText(el) {
    el.innerHTML = `<img src="./image/blog/triangleBtn.svg" >
    <span>View all Product Reviews</span>`;
}

/* Кнопка "Search" в Footer */
    // const seacrhArea = document.querySelector('.form-search__input');
    // const searchBtn = document.querySelector('.form-search__btn');
    // const wrapper = document.querySelector('.wrapper');

    // searchBtn.addEventListener('click', () => {
        
    // });