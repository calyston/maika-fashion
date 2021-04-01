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
    //GSAP
    const slideTimeline = gsap.timeline({
      defaults: { duration: 2, ease: 'power2.inOut' }
    });

    slideTimeline.fromTo(revealImg, { x: '0%' }, { x: '100%' });
    slideTimeline.fromTo(img, { opacity: '0' }, { opacity: '1' }, '-=2');
    slideTimeline.fromTo(revealText, { opacity: '1' }, { opacity: '0' }, '-=1');
    slideTimeline.fromTo(nav, { y: '-100%' }, { y: '0%' }, '-=3');
  });
}

animateSlides();