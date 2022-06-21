// Burger
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".menu");

burger.addEventListener("click", function (e) {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("lock");
});

// Audio
let buttonsPlay = document.querySelectorAll(".player-audio__button");
let audios = document.querySelectorAll(".player-audio__audio");
let buttonIcons = document.querySelectorAll(".player-audio__icon");
// Button 1
buttonsPlay[0].addEventListener("click", function (e) {
  let isPlaying = buttonsPlay[0].classList.contains("play");
  if (isPlaying) {
    stopPlaying0();
  } else {
    stopPlaying1();
    stopPlaying2();
    startPlaying0();
  }
});

function stopPlaying0(e) {
  buttonsPlay[0].classList.remove("play");
  audios[0].pause();
  buttonIcons[0].src = "img/audio/button-play.svg";
}

function startPlaying0(e) {
  buttonsPlay[0].classList.add("play");
  audios[0].play();
  buttonIcons[0].src = "img/audio/button-pause.svg";
}

// Button 2
buttonsPlay[1].addEventListener("click", function (e) {
  let isPlaying = buttonsPlay[1].classList.contains("play");
  if (isPlaying) {
    stopPlaying1();
  } else {
    stopPlaying0();
    stopPlaying2();
    startPlaying1();
  }
});

function stopPlaying1(e) {
  buttonsPlay[1].classList.remove("play");
  audios[1].pause();
  buttonIcons[1].src = "img/audio/button-play.svg";
}

function startPlaying1(e) {
  buttonsPlay[1].classList.add("play");
  audios[1].play();
  buttonIcons[1].src = "img/audio/button-pause.svg";
}

// Button 3
buttonsPlay[2].addEventListener("click", function (e) {
  let isPlaying = buttonsPlay[2].classList.contains("play");
  if (isPlaying) {
    stopPlaying2();
  } else {
    stopPlaying0();
    stopPlaying1();
    startPlaying2();
  }
});

function stopPlaying2(e) {
  buttonsPlay[2].classList.remove("play");
  audios[2].pause();
  buttonIcons[2].src = "img/audio/button-play.svg";
}

function startPlaying2(e) {
  buttonsPlay[2].classList.add("play");
  audios[2].play();
  buttonIcons[2].src = "img/audio/button-pause.svg";
}
