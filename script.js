function init() {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

init()

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

// Set initial values for animations
function valueSet() {
  gsap.set('.hero .row h1', { y: 210 });
  gsap.set('nav ul li', { y: -20, opacity: 0 });
  gsap.set('.hero .upperrow p', { y: 20, opacity: 0 });
  gsap.set('.hero .lowerrow .hero-footer-txt p', { y: 20, opacity: 0 });
  gsap.set('.hero .lowerrow p', { y: 20, opacity: 0 });
  gsap.set('.hero2 .right-skills h1', { y: 100, opacity: 0 });
}

// Animate preloader text
function animateText() {
  gsap.fromTo(
      '.preloader .text',
      { opacity: 0, y: -50, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: Expo.easeInOut }
  );
}

// Homepage Animations
function homePage() {
  let tl = gsap.timeline();
  tl.to('nav ul li', {
      y: 0,
      duration: 0.6,
      delay: 1,
      stagger: 0.1,
      opacity: 1,
  })
      .to('.hero .row h1', {
          y: 0,
          stagger: 0.5,
          duration: 0.7,
      })
      .to('.hero .upperrow p', {
          y: 0,
          duration: 0.6,
          delay: -1,
          stagger: 0.1,
          opacity: 1,
      })
      .to('.hero .lowerrow .hero-footer-txt p', {
          y: 0,
          duration: 0.6,
          delay: -1,
          stagger: 0.1,
          opacity: 1,
      })
      .to('.hero .lowerrow p', {
          y: 0,
          duration: 0.6,
          delay: -1,
          stagger: 0.1,
          opacity: 1,
      });
}

// Hero Section 2 Animation
function hero2() {
  gsap.to('.hero2 .right-skills h1', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.6,
      ease: Expo.easeInOut,
      scrollTrigger: {
          trigger: '.hero2 .right-skills h1',
          scroller: '.main',
      },
  });
}

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

counter();
animateText();
hero2();

// Enhanced Preloader with Fade Out
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
    
    // Add initial animations
    setTimeout(() => {
        // Add fade-out class
        preloader.classList.add('fade-out');
        
        // Enable scrolling and remove preloader
        setTimeout(() => {
            document.body.style.overflow = 'visible';
            preloader.style.display = 'none';
        }, 800);
        valueSet();
        homePage();
      }, 1500);
    });
    
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

// Magnetic and glitch effect for skill items
document.querySelectorAll('.skill-item').forEach(item => {
    let bounds;
    let mouseLeaveAnim;
    
    const mouseEnter = () => {
        bounds = item.getBoundingClientRect();
        document.addEventListener('mousemove', magneticMove);
        
        // Add glitch effect
        gsap.to(item.querySelector('h1'), {
            duration: 0.1,
            skewX: gsap.utils.random(-3, 3),
            skewY: gsap.utils.random(-3, 3),
            ease: "power3.out",
            repeat: 1,
            yoyo: true
        });
    };
    
    const magneticMove = (e) => {
        const { clientX, clientY } = e;
        const relativeX = clientX - bounds.left - bounds.width / 2;
        const relativeY = clientY - bounds.top - bounds.height / 2;
        
        gsap.to(item, {
            duration: 1,
            x: relativeX * 0.3,
            y: relativeY * 0.3,
            rotation: relativeX * 0.02,
            ease: "power4.out"
        });
        
        gsap.to(item.querySelector('h1'), {
            duration: 1,
            x: relativeX * 0.5,
            y: relativeY * 0.5,
            rotation: relativeX * 0.03,
            scale: 1.1,
            ease: "power4.out"
        });
        
        // Dynamic color effect
        gsap.to(item.querySelector('span'), {
            duration: 0.3,
            color: `hsl(${Math.abs(relativeX)}deg, 100%, 50%)`,
            ease: "none"
        });
        
        // Add trail effect
        createTrail(clientX, clientY);
    };
    
    const mouseLeave = () => {
        document.removeEventListener('mousemove', magneticMove);
        
        mouseLeaveAnim = gsap.to(item, {
            duration: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)"
        });
        
        gsap.to(item.querySelector('h1'), {
            duration: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)"
        });
    };
    
    const createTrail = (x, y) => {
        const trail = document.createElement('div');
        trail.className = 'trail';
        document.body.appendChild(trail);
        
        gsap.set(trail, {
            position: 'fixed',
            left: x,
            top: y,
            width: '10px',
            height: '10px',
            backgroundColor: '#00dc63',
            borderRadius: '50%',
            pointerEvents: 'none'
        });
        
        gsap.to(trail, {
            duration: 0.5,
            opacity: 0,
            scale: 0,
            ease: "power2.out",
            onComplete: () => trail.remove()
        });
    };
    
    item.addEventListener('mouseenter', mouseEnter);
    item.addEventListener('mouseleave', mouseLeave);
    
    // Random glitch effect
    setInterval(() => {
        if (Math.random() > 0.9) {
            gsap.to(item.querySelector('h1'), {
                duration: 0.1,
                skewX: gsap.utils.random(-10, 10),
                opacity: gsap.utils.random(0.8, 1),
                ease: "power4.out",
                repeat: 1,
                yoyo: true
            });
        }
    }, 2000);
});
