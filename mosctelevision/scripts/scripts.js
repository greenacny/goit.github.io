'use strict';

//Menu

let menu = document.querySelector('.menu');
let menuButton = document.querySelector('.header__menu-button');
let popup = document.querySelector('.popup');

function showMenu() {
    menu.classList.toggle('header__menu--active');
    menuButton.classList.toggle('header__menu-button--active');
    popup.classList.toggle('popup--active');
}

menuButton.onclick = showMenu;
popup.onclick = showMenu;

//Menu color

function scrollFunction() {
    if (window.innerWidth > 768 && document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.header__inner-wrapper').style.background = '#333';
        document.querySelector('.header__inner-wrapper').style.transition = 'background-color 0.3s';
    } else if (window.innerWidth < 768 ) { //&& window.pageYOffset < 40
        document.querySelector('.header__inner-wrapper').style.background = '#333';
        document.querySelector('.header__inner-wrapper').style.transition = 'background-color 0.9s';
    }
    else {
        document.querySelector('.header__inner-wrapper').style.background = 'transparent';
        document.querySelector('.header__inner-wrapper').style.transition = 'background-color 0.3s';
    }
    // document.querySelector('.header__inner-wrapper').style.transition = 'background-color 0.3s';
}

window.onscroll = scrollFunction;

//Scroll

let anchors = document.querySelectorAll('.menu__link');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let blockAnchor = anchor.getAttribute('href');

        document.querySelector(blockAnchor).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        showMenu();
    });
}

//Parallax

let parallax = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrolledHeight = window.pageYOffset;
    let limit = parallax.offsetTop + parallax.offsetHeight;
                
    if (scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
        parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 1.2 + 'px';
    } else {
        parallax.style.backgroundPositionY = '0';
    }
});





// 'use strict';

// //Menu

// let menuButton = document.querySelector('.header__menu-button');
// let menu = document.querySelector('.menu');

// function showMenu() {
//     menu.classList.toggle('header__menu--active');
//     menuButton.classList.toggle('header__menu-button--active');
// }

// menuButton.onclick = showMenu;

// //Menu color
// if (window.innerWidth > 768) {
//     if (window.pageYOffset > 50) {
//         document.querySelector('.header__inner-wrapper').style.background = '#333';
//         window.onscroll = scrollFunction;
//         document.querySelector('.header__inner-wrapper').style.transition = 'background-color 0.3s';
//     } else if (window.innerWidth > 768 && window.pageYOffset < 50) {
//         document.querySelector('.header__inner-wrapper').style.background = 'transparent';
//         document.querySelector('.header__inner-wrapper').style.transition = 'background-color 0.3s';
//         window.onscroll = scrollFunction;
//     }
// } else {
//     // document.querySelector('.header__inner-wrapper').style.background = '#333';
//     document.querySelector('.header__inner-wrapper').style.transition = 'background-color 0.3s';
// }

// function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.querySelector('.header__inner-wrapper').style.background = '#333';
//     } else {
//         document.querySelector('.header__inner-wrapper').style.background = 'transparent';
//     }
// }

// // let prevScrollpos = window.pageYOffset;

// // if (prevScrollpos > 50 && window.innerWidth > 768) {
// //     document.querySelector('.header__inner-wrapper').style.background = '#333';

// //     window.onscroll = function() {
// //         scrollFunction()
// //     }; 
// // } else if (prevScrollpos < 50 && window.innerWidth < 768) {
// //     document.querySelector('.header__inner-wrapper').style.background = '#333';
// // } else {
// //     document.querySelector('.header__inner-wrapper').style.background = 'transparent';
// //     window.onscroll = function() {
// //         scrollFunction()
// //     }; 
// // }

// // function scrollFunction() {
// //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
// //         document.querySelector('.header__inner-wrapper').style.background = '#333';
// //     } else {
// //         document.querySelector('.header__inner-wrapper').style.background = 'transparent';
// //     }
// // }

// // window.onscroll = function() {
// //     scrollFunction()
// // }; 

// //ScrollTo

// $(document).ready(function() {
//     $('.menu').on('click','a', function (event) {
//         event.preventDefault(); //отменяем стандартную обработку нажатия по ссылке

//         var id = $(this).attr('href'), //забираем идентификатор бока с атрибута href

//         top = $(id).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь

//         $('body,html').animate({scrollTop: top}, 300); //анимируем переход на расстояние - top за 300 мс

//         showMenu();
//     });
// });

// //Parallax

// // $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});