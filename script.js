const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

// ScrollTrigger integration with Locomotive Scroll
ScrollTrigger.scrollerProxy('.main', {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    }
});

// Ensure ScrollTrigger updates on scroll
scroll.on('scroll', ScrollTrigger.update);

// Refresh ScrollTrigger on load
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});

function counter() {
    var count = setInterval(() => {
        var c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if(c == 100){
            clearInterval(count);
            $('.counter').addClass('hide');
            $('.preloader').addClass('active');
            valueSet();
            homePage();
          }
        }, 30);
}

function valueSet() {
    gsap.set(".hero .row h1", {y: 210});
    gsap.set("nav ul li", {y: -20, opacity:0} )
    gsap.set(".hero .upperrow p", {y: 20, opacity:0} )
    gsap.set(".hero .lowerrow .hero-footer-txt p", {y: 20, opacity:0} )
    gsap.set(".hero .lowerrow p", {y: 20, opacity:0} )
    gsap.set(".hero2 .right-skills h1", {y: 100, opacity:0} )
}

function animateText() {
    gsap.fromTo(".preloader .text", {
        opacity: 0,
        y: -50,
        scale: 0.5,
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: Expo.easeInOut
    });
}

function homePage() {
    var tl = gsap.timeline()
    
    tl.to("nav ul li",{
      y: 0,
      duration: 0.6,
      delay: 3.5,
      stagger: 0.1,
      opacity: 1
    })
    .to(".hero .row h1",{
      y: 0,
      stagger: 0.5,
      duration: 0.7,
    })
    .to(".hero .upperrow p",{
      y: 0,
      duration: 0.6,
      delay: -1,
      stagger: 0.1,
      opacity: 1
    })
    .to(".hero .lowerrow .hero-footer-txt p",{
      y: 0,
      duration: 0.6,
      delay: -1,
      stagger: 0.1,
      opacity: 1
    })
    .to(".hero .lowerrow p",{
      y: 0,
      duration: 0.6,
      delay: -1,
      stagger: 0.1,
      opacity: 1
    });
}

function hero2() {
    gsap.to(".hero2 .right-skills h1", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.6,
        ease: Expo.easeInOut,
        scrollTrigger: {
            trigger: '.hero2 .right-skills h1',
            scroller: '.main',
        }
    });
}

counter();
animateText();
hero2();