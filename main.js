let controller;
let slideScene;
let pageScene;

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

    //GSAP Slider Timeline
    const slideTimeline = gsap.timeline({
      defaults: { duration: 2, ease: 'power2.inOut' }
    });

    slideTimeline.fromTo(revealImg, { x: '0%' }, { x: '100%' });
    slideTimeline.fromTo(img, { opacity: '0' }, { opacity: '1' }, '-=2');
    slideTimeline.fromTo(revealText, { y: '0%' }, { y: '100%' }, '-=1');
    slideTimeline.fromTo(nav, { y: '-100%' }, { y: '0%' }, '-=3');

    //Create Scene
    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 1.25,
      reverse: false
    })
      .setTween(slideTimeline)
      .addIndicators({
        colorStart: 'white',
        colorTrigger: 'white',
        name: 'slide'
      })
      .addTo(controller)
  });
}

//Styled Cursor
let mouse = document.querySelector('.cursor');
function cursor(e) {
  mouse.style.top = e.pageY + 'px';
  mouse.style.left = e.pageX + 'px';
}

function activeCursor(e) {
  const item = e.target;
  if (item.id === 'logo' || item.classList.contains('menu')) {
    mouse.classList.add('nav-active');
  } else {
    mouse.classList.remove('nav-active');
  }
  if (item.classList.contains('explore')) {
    mouse.classList.add('explore-active');
    gsap.to('.title-swipe', 1, { y: '0%' });

  } else {
    mouse.classList.remove('explore-active');
    gsap.to('.title-swipe', 1, { y: '-100%' });
  }

}
window.addEventListener('mousemove', cursor);
window.addEventListener('mouseover', activeCursor);

animateSlides();