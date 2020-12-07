const menuBurger = document.querySelector(".a-burger");
const menuAll = document.querySelector(".main-header_dropdown__menu");
const closeMenu = document.querySelector(".main-header_dropdown__close");
const section = document.getElementsByTagName('section');
const callbackBtn = document.querySelector('.callback');
const telField= document.getElementById('garanty_third_number_sendform_item___phone');
const mini = document.querySelectorAll('.minimazed');



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


callbackBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    telField.focus();
    telField.scrollIntoView({block: "start", behavior: "smooth"});
});



mini.forEach(element => element.addEventListener("click", function (evt) {
evt.preventDefault();
let iPath = element.getAttribute('src');
document.body.insertAdjacentHTML("beforeend", '<div id="overlay"></div><div id="magnify"><img src="'+iPath+'"><div id="close-popup"><i></i></div></div>');

}));