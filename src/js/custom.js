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