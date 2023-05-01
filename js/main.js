let menuButton = document.getElementById("menu_button");
let menuNav = document.getElementById("menu_nav");
const buttonsLine = document.querySelectorAll(".button_line");
const classAnimations = ["rotate1", "scale2", "rotate3"];

menuButton.onclick = () => {
    menuNav.classList.toggle("active_nav");
    buttonsLine.forEach((item, index) => {
        item.classList.toggle(classAnimations[index]);
    })
}