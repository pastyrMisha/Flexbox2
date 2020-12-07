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


// function fadeIn(el) {
  
//     let opacity = 0.01;
  
// 	let timer = setInterval(function() {
//         let opacity = document.getElementById(el).style.opacity;

// 		if(opacity >= 1) {
			
// 			clearInterval(timer);
		
// 		}
        

// 		opacity += opacity * 0.1;
   
// 	}, 10);
	
// };

function fadeIn(el, time) {
    el.style.opacity = 0;
  
    let last = +new Date();

    let tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / time;
      last = +new Date();
  
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
  
    tick();
  };

  
  


mini.forEach(element => element.addEventListener("click", function (evt) {
evt.preventDefault();
const iPath = element.getAttribute('src');
document.body.insertAdjacentHTML("beforeend", '<div id="overlay"></div><div id="magnify"><img src="'+iPath+'"><div id="close-popup"><i></i></div></div>');

const newBlock = document.getElementById('magnify');
const newLay = document.getElementById('overlay');


fadeIn(newLay, 300);
fadeIn(newBlock, 300);




}));


