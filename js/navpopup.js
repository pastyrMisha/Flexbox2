var menuBurger = document.querySelector(".a-burger");
var menuAll = document.querySelector(".main-header_dropdown__menu");
var closeMenu = document.querySelector(".main-header_dropdown__close");


menuBurger.addEventListener("click", function (evt) {
    evt.preventDefault();
    menuAll.classList.remove("closed_dropdown");
    menuAll.classList.add("open_dropdown");
});


closeMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    menuAll.classList.remove("open_dropdown");
    menuAll.classList.add("closed_dropdown")
});