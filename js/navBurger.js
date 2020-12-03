const menuBurger = document.querySelector(".a-burger");
const menuAll = document.querySelector(".main-header_dropdown__menu");
const closeMenu = document.querySelector(".main-header_dropdown__close");
const section = document.getElementsByTagName('section');


menuBurger.addEventListener("click", function (evt) {
    evt.preventDefault();
    menuAll.classList.remove("close_dropdown");
    menuAll.classList.add("open_dropdown");
    for (let i = 0; i < section.length; i++) {
        section[i].style.filter = "blur(2px)";
    }


});


closeMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    menuAll.classList.remove("open_dropdown");
    menuAll.classList.add("close_dropdown");
    for (let i = 0; i < section.length; i++) {
        section[i].style.filter = "none";
    }
});