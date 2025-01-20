const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
  });

  // ScrollTrigger integration with Locomotive Scroll
ScrollTrigger.scrollerProxy('.main', {
    scrollTop(value) {
        return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    },
  });
  
  // Ensure ScrollTrigger updates on scroll
  scroll.on('scroll', ScrollTrigger.update);
  
  // Refresh ScrollTrigger on load
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });

  function valueSet() {
    gsap.set('.hero h1', { y: 210 , opacity: 0 });
    gsap.set('.hero #row p', { x: 50 , opacity: 0 });
  }

function hero1() {
    gsap.to(".hero h1",{
        y: 0,
        delay: .5,
        opacity: 1,
    })
    gsap.to(".hero #row p",{
        x: 0,
        delay: .8,
        opacity: 1,
    })
}

// Counter Animation
function counter() {
    let count = setInterval(() => {
        let c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if (c === 100) {
            clearInterval(count);
            $('.counter').addClass('hide');
            $('.preloader').addClass('active');
        }
    }, 30);
}



// Enhanced Preloader with Fade Out
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    
    setTimeout(() => {
        // Add fade-out class
        preloader.classList.add('fade-out');
        
        // Enable scrolling and remove preloader
        setTimeout(() => {
            document.body.style.overflow = 'visible';
            preloader.style.display = 'none';
        }, 800);
        valueSet();
        hero1();
    }, 1500);
});

// Prevent scrolling while preloader is active
document.body.style.overflow = 'hidden';

// Horizontal Scroll Animation
gsap.to(".container", {
    x: () => -(document.querySelector(".container").scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: ".hero3",
        scroller: ".main",
        start: "top top",
        end: () => `+=${document.querySelector(".container").scrollWidth - window.innerWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1
    }
});

// Initialize counter
counter();
