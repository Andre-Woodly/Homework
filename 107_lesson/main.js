const open = document.querySelector('.button-open');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.button-close');

// Открытие по кнопке 
open.addEventListener('click', () => {
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
})
// Закрытие по кнопке
close.addEventListener('click', () => {
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
})
// Закртыие по кнопке ESCAPE 
document.addEventListener('keydown', event => {
    if ((event.code === 'Escape')) {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
    }
})
// Закртые по нажатию на свободное поле
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
    }
});