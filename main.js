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
const mouse = document.querySelector('.cursor');
const hamburgerMenu = document.querySelector('.menu');
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
  if (item.classList.contains('exp-about')) {
    mouse.classList.add('explore-active');
    gsap.to('.t-swipe1', 1, { y: '0%' });

  } else {
    mouse.classList.remove('explore-active');
    gsap.to('.t-swipe1', 1, { y: '-100%' });
  }
  if (item.classList.contains('exp-blog')) {
    mouse.classList.add('explore-active');
    gsap.to('.t-swipe2', 1, { y: '0%' });

  } else {
    mouse.classList.remove('explore-active');
    gsap.to('.t-swipe2', 1, { y: '-100%' });
  }
  if (item.classList.contains('exp-browse')) {
    mouse.classList.add('explore-active');
    gsap.to('.t-swipe3', 1, { y: '0%' });

  } else {
    mouse.classList.remove('explore-active');
    gsap.to('.t-swipe3', 1, { y: '-100%' });
  }

}
function navToggle(e) {
  if (!e.target.classList.contains('active')) {
    e.target.classList.add('active');
    gsap.to('.line1', 1, { rotate: '45', y: 5, background: 'black' });
    gsap.to('.line2', 1, { rotate: '-45', y: -5, background: 'black' });
    gsap.to('#logo', 1, { color: 'black' });
    gsap.to('.nav-bar', 2, { clipPath: 'circle(2500px at 100% -10%)' });
  } else {
    e.target.classList.remove('active');
    gsap.to('.line1', 1, { rotate: '0', y: 0, background: 'white' });
    gsap.to('.line2', 1, { rotate: '0', y: 0, background: 'white' });
    gsap.to('#logo', 1, { color: 'white' });
    gsap.to('.nav-bar', 2, { clipPath: 'circle(50px at 100% -10%)' });
  }

}

//Event Listeners
hamburgerMenu.addEventListener('click', navToggle);
window.addEventListener('mousemove', cursor);
window.addEventListener('mouseover', activeCursor);

animateSlides();