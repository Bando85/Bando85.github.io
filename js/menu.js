function toggleMenu(menuButton) {
    menuButton.classList.toggle('opened');
    menuButton.setAttribute('aria-expanded', menuButton.classList.contains('opened'));
    if (menuButton.classList.contains('opened')) openNav()
    else closeNav();
}


function openNav() {
    console.log("this opens")
    document.getElementById("mySidenav").style.zIndex = "10";
    document.getElementById("mySidenav").style.opacity = "1";
}

function closeNav() {
    console.log("this close")
    document.getElementById("mySidenav").style.zIndex = "-2";
    document.getElementById("mySidenav").style.opacity = "0";
}