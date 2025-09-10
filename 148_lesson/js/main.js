(function () {
    // === Бургер меню ===
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    // === Модальное окно ===
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.aboutUs__img-button')

    if (modalButton && modal) {
        modalButton.addEventListener('click', openModal)
        modal.addEventListener('click', closeModal)
    }

    function openModal(e) {
        e.preventDefault()
        document.body.classList.add('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()
        const target = e.target
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }

    // tab

    const tabControls = document.querySelector('.tab-controls')

    //делегирую все события

    tabControls.addEventListener('click', togglwTab)

    function togglwTab(e) {

        // условия
        const tabControl = e.target.closest('.tab-controls__link')
        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return


        // получаем атрибут ссылки 
        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')


        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }
        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        tabContent.classList.add('tab-content--show')
        tabControl.classList.add('tab-controls__link--active')
    }


    // Находим все аккордеоны
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(list => {
        list.addEventListener('click', (e) => {
            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return;

            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            // ищем уже открытый элемент внутри этого списка
            const openedItem = list.querySelector('.accordion-list__item--opened');
            const openedContent = openedItem ? openedItem.querySelector('.accordion-list__content') : null;

            // если есть уже открытый элемент и он не тот же самый — закрываем его
            if (openedItem && openedItem !== accordionItem) {
                openedItem.classList.remove('accordion-list__item--opened');
                openedContent.style.maxHeight = null;
            }

            // переключаем текущий
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });

    // слайдер-галерея 

    const swiper = new Swiper('.gallery__swiper', {

        spaceBetween: 32,
        slidesPerView: 4,

        pagination: {
            el: '.gallery__pagination',
            type: "fraction",
        },
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            // when window width is >= 320px
            100: {
                slidesPerView: 1,

            },
            600: {
                slidesPerView: 2,

            },
            // when window width is >= 480px
            880: {
                slidesPerView: 3,

            },
            // when window width is >= 640px
            1101: {
                slidesPerView: 4,
            }
        }
    });


    // слайдер-отзывы

    new Swiper('.testimonial__swiper', {

        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonial__next',
            prevEl: '.testimonial__prev',
        },

        scrollbar: {
            el: '.testimonial__scrollbar',
            draggable: true,
        },


        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1200: {
                slidesPerView: 2.1,
            }
        }

    });

    const telInputs = document.querySelectorAll("input[type='tel']");
    const im = new Inputmask("+7 (999) 999-99-99");
    telInputs.forEach(input => im.mask(input));

})()
