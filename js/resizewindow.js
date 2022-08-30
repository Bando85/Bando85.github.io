window.addEventListener("resize", resizeWindow);

let oldSize=window.innerWidth;

function resizeWindow() {
    

    if (window.innerWidth>=768 && oldSize<768) {
        let toShow = document.querySelectorAll(".m-texts, .latest-projects, .technologies");
        toShow.forEach((element)=> element.style.display="block")
        toShow.forEach((element)=> element.style.opacity="1")
    }
    if (window.innerWidth<768 && oldSize>768) {
        let toNotShow = document.querySelectorAll(".latest-projects, .technologies");
        toNotShow.forEach((element)=> element.style.display="none")
        toNotShow.forEach((element)=> element.style.opacity="0")
        toNotShow.forEach((element)=> element.setAttribute("menuVisible","false"))
        let toShow = document.querySelector(".m-texts");
        toShow.style.display="block"
        toShow.style.opacity="1"
        toShow.setAttribute("menuVisible","true")
    }
    oldSize=window.innerWidth;

}