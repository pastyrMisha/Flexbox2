const menuBurger = document.querySelector(".a-burger");
const menuAll = document.querySelector(".main-header_dropdown__menu");
const closeMenu = document.querySelector(".main-header_dropdown__close");
const section = document.getElementsByTagName('section');
const btn = document.querySelector('.callback');
const hiddenElement = document.getElementById('garanty_third_number_sendform_item___phone');
const order = document.querySelector('.garanty_third_number');


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

function handleButtonClick() {
    order.scrollIntoView({block: "start", behavior: "smooth"});
    window.scrollBy(-10000, -1100);
    hiddenElement.focus();
 }
 
 btn.addEventListener('click', handleButtonClick);