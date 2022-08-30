
const menuButton = document.querySelector(".menu-icon");
menuButton.addEventListener("click", () => toggleMenu(menuButton));

const menuFirst = document.querySelector(".menu-first");
menuFirst.addEventListener("click", () => showMenuElement(menuFirst));

const menuSecond = document.querySelector(".menu-second");
menuSecond.addEventListener("click", () => showMenuElement(menuSecond));

const menuThird = document.querySelector(".menu-third");
menuThird.addEventListener("click", () => showMenuElement(menuThird));

function toggleMenu(menuButton) {
    menuButton.classList.toggle('opened');
    menuButton.setAttribute('aria-expanded', menuButton.classList.contains('opened'));
    if (menuButton.classList.contains('opened')) openNav()
    else closeNav();
}


function openNav() {
    document.getElementById("mySidenav").style.zIndex = "2";
    document.getElementById("mySidenav").style.opacity = "1";
}

function closeNav() {
    document.getElementById("mySidenav").style.zIndex = "-2";
    document.getElementById("mySidenav").style.opacity = "0";
}

let menuFreeze = false;

function showMenuElement(element) {
    async function changeIt() {
        if (!menuFreeze) {
            menuFreeze = true;

            //hide actual menu element
            const el = document.querySelector('div[menuVisible="true"]')
            async function hideIt() {
                el.style.opacity = "0"
                await new Promise(r => setTimeout(r, 500));
                el.style.display = "none"
                await new Promise(r => setTimeout(r, 50));
                el.setAttribute("menuVisible", false);
            }
            await hideIt();



            //show selected element
            const listKey = element.getAttribute("key")
            if (listKey == 0) {
                async function showIt() {
                    let toShow = document.querySelector(".m-texts");
                    toShow.setAttribute("menuVisible", true);
                    toShow.style.display = "block"
                    await new Promise(r => setTimeout(r, 500));
                    toShow.style.opacity = "1"

                }
                await showIt();
            }

            if (listKey == 1) {
                async function showIt() {
                    let toShow = document.querySelector(".technologies");
                    toShow.setAttribute("menuVisible", true);
                    toShow.style.display = "block"
                    await new Promise(r => setTimeout(r, 500));
                    toShow.style.opacity = "1"

                }
                await showIt();
            }

            if (listKey == 2) {
                async function showIt() {
                    let toShow = document.querySelector(".latest-projects");
                    toShow.setAttribute("menuVisible", true);
                    toShow.style.display = "block"
                    await new Promise(r => setTimeout(r, 500));
                    toShow.style.opacity = "1"

                }
                await showIt();
            }
            menuFreeze = false;
        }
    }
    changeIt();
}