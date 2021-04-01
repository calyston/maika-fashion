let controller;
let slideScene;

function animateSlides() {
  //Initiate Controller
  controller = new ScrollMagic.Controller();
  const sliders = document.querySelectorAll('.slide');
  const nav = document.querySelector('.nav-header');
  //Loop Over Each Slide
  sliders.forEach(slide => {
    const revealImg = slide.querySelector('.reveal-img');
    const img = slide.querySelector('img');
    const revealText = slide.querySelector('.reveal-text');
  })
}