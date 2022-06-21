let mobileMenu = document.getElementById("mobileMenu");
let burgerBtn = document.getElementById("burgerBtn");
let crossBtn = document.getElementById("crossBtn");
let modalPhone = document.getElementById("phone");
let phoneOpen = document.querySelectorAll(".phone-open");
let phoneClose = document.getElementById("phone-close");
let modalCall = document.getElementById("call");
let callOpen = document.querySelectorAll(".call-open");
let callClose = document.getElementById("call-close");
let blur = document.querySelector(".blur");
let menuBlur = document.querySelector(".menu-blur");
let mq = matchMedia("(min-width: 1366px)");

burgerBtn.onclick = function () {
  mobileMenu.classList.remove("mobileMenu_hidden");
  blur.style = "z-index: 3; background-color: #fff; opacity: 0.9;";
}

crossBtn.onclick = function () {
  mobileMenu.classList.add("mobileMenu_hidden");
  blur.style = "z-index: -10; background-color: transparent; opacity: 1;";
  menuBlur.style = "z-index: -10; background-color: transparent; opacity: 1;";
}

blur.addEventListener('click', () => {
  mobileMenu.classList.add('mobileMenu_hidden');
  call.classList.add('call_hidden');
  phone.classList.add('phone_hidden');
  blur.style = 'z-index: -10; background-color: transparent; opacity: 1;';
  menuBlur.style = 'z-index: -10; background-color: transparent; opacity: 1;';
});

menuBlur.addEventListener('click', () => {
  mobileMenu.classList.add('mobileMenu_hidden');
  call.classList.add('call_hidden');
  phone.classList.add('phone_hidden');
  blur.style = 'z-index: -10; background-color: transparent; opacity: 1;';
  menuBlur.style = 'z-index: -10; background-color: transparent; opacity: 1;';
});


phoneOpen[0].onclick = function () {
  modalPhone.classList.remove("phone_hidden");
  modalCall.classList.add("call_hidden");
  blur.style = "z-index: 3; background-color: #fff; opacity: 0.9;";

  if (mq.matches) {
    menuBlur.style = "z-index: 3; background-color: #fff; opacity: 0.9;";
    mobileMenu.style = "overflow: hidden";
  }
}

phoneOpen[1].onclick = function () {
  modalPhone.classList.remove("phone_hidden");
  modalCall.classList.add("call_hidden");
  blur.style = "z-index: 3; background-color: #fff; opacity: 0.9;";

  if (mq.matches) {
    menuBlur.style = "z-index: 3; background-color: #fff; opacity: 0.9;";
  }
}

phoneClose.onclick = function () {
  modalPhone.classList.add("phone_hidden");
  blur.style = 'z-index: -10; background-color: transparent; opacity: 1;';
  menuBlur.style = 'z-index: -10; background-color: transparent; opacity: 1;';
}

callOpen[0].onclick = function () {
  modalCall.classList.remove("call_hidden");
  modalPhone.classList.add("phone_hidden");
  blur.style = "z-index: 3; background-color: #fff; opacity: 0.9;";

  if (mq.matches) {
    menuBlur.style = "z-index: 3; background-color: #fff; opacity: 0.9;";
  }
}

callOpen[1].onclick = function () {
  modalCall.classList.remove("call_hidden");
  modalPhone.classList.add("phone_hidden");
  blur.style = "z-index: 3; background-color: #fff; opacity: 0.9;";

  if (mq.matches) {
    menuBlur.style = "z-index: 5; background-color: #fff; opacity: 0.9;";
  }
}

callClose.onclick = function () {
  modalCall.classList.add("call_hidden");
  blur.style = 'z-index: -10; background-color: transparent; opacity: 1;';
  menuBlur.style = 'z-index: -10; background-color: transparent; opacity: 1;';
}

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    mobileMenu.classList.add('mobileMenu_hidden');
    modalCall.classList.add("call_hidden");
    modalPhone.classList.add("phone_hidden");;
    blur.style = 'z-index: -10; background-color: transparent; opacity: 1;';
    menuBlur.style = 'z-index: -10; background-color: transparent; opacity: 1;';
  }
});
