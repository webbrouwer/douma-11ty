
/*
 * Open / close mobile menu
 */
var isOpen = false;
var menu = document.querySelector('#menu-js');
var menuButton = document.querySelector('#mobileMenuButton-js');
var menuClosedIcon = document.querySelector('#menuClosed-js');
var menuOpenIcon = document.querySelector('#menuOpen-js');

function closeMenu() {
    menu.classList.remove('block');
    menu.classList.add('hidden');
    menuOpenIcon.classList.remove('hidden');
    menuOpenIcon.classList.add('block');
    menuClosedIcon.classList.remove('block');
    menuClosedIcon.classList.add('hidden');

    isOpen = false;
}

function openMenu() {
    menu.classList.remove('hidden');
    menu.classList.add('block');
    menuClosedIcon.classList.add('block');
    menuClosedIcon.classList.remove('hidden');
    menuOpenIcon.classList.add('hidden');
    menuOpenIcon.classList.remove('block');
    isOpen = true;
}

menuButton.addEventListener('click', function(event) {
    if(isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}, true);

/*
 * Open / close mobile submenu
 */
var subIsOpen = false;
var submenu = document.querySelector('#submenu-js');
var submenuButton = document.querySelector('#mobileSubMenuButton-js');
var submenuClosedIcon = document.querySelector('#submenuClosed-js');
var submenuOpenIcon = document.querySelector('#submenuOpen-js');

function closeSubMenu() {
    submenu.classList.remove('block');
    submenu.classList.add('hidden');
    submenuOpenIcon.classList.remove('hidden');
    submenuOpenIcon.classList.add('block');
    submenuClosedIcon.classList.remove('block');
    submenuClosedIcon.classList.add('hidden');

    subIsOpen = false;
}

function openSubMenu() {
    submenu.classList.remove('hidden');
    submenu.classList.add('block');
    submenuClosedIcon.classList.add('block');
    submenuClosedIcon.classList.remove('hidden');
    submenuOpenIcon.classList.add('hidden');
    submenuOpenIcon.classList.remove('block');
    subIsOpen = true;
}

submenuButton.addEventListener('click', function(event) {
    if(subIsOpen) {
        closeSubMenu();
    } else {
        openSubMenu();
    }
}, true);

/*
 * Swiper slider
 */
var mySwiper = new Swiper('.swiper-container', {
    autoHeight: true,    
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});
