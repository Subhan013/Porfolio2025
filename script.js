
// Initialize locomotive scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"), // your scroll container
  smooth: true
});

// Tell ScrollTrigger to use these proxy methods for "#main"
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// Update ScrollTrigger on scroll
locoScroll.on("scroll", ScrollTrigger.update);

// Refresh ScrollTrigger after everything loads
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();



var crsr = document.querySelector('.cursor')
var main = document.querySelector('#main')
var page1Vid = document.querySelector('.page1 video')

document.addEventListener('mousemove',function(dets) {
    crsr.style.left = dets.x+-10+'px'
    crsr.style.top = dets.y+-10+'px'
})

const images = document.querySelectorAll(".trail-img");
const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const positions = Array.from(images).map(() => ({ x: mouse.x, y: mouse.y }));
let isMoving = false;
let fadeTimeout;


var hero1 = document.querySelector(".hero")
hero1.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  if (!isMoving) {
    isMoving = true;

    images.forEach((img, i) => {
      img.style.opacity = `${1 - i * 0.1}`;
      img.style.transform = `translate(-50%, -50%) scale(1) rotate(${(i - 2) * 3}deg)`;
    });
  }

  clearTimeout(fadeTimeout);
  fadeTimeout = setTimeout(() => {
    isMoving = false;

    images.forEach((img) => {
      img.style.opacity = "0";
      img.style.transform = `translate(-50%, -50%) scale(0.8)`;
    });
  }, 200);
});

// Animate trail stack
function animate() {
  // Smooth move
  positions[0].x += (mouse.x - positions[0].x) * 0.2;
  positions[0].y += (mouse.y - positions[0].y) * 0.2;

  for (let i = 1; i < images.length; i++) {
    positions[i].x += (positions[i - 1].x - positions[i].x) * 0.1;
    positions[i].y += (positions[i - 1].y - positions[i].y) * 0.1;
  }

  images.forEach((img, i) => {
    img.style.left = `${positions[i].x}px`;
    img.style.top = `${positions[i].y}px`;
  });

  requestAnimationFrame(animate);
}

animate();

function fillRow(id, text) {
    const el = document.getElementById(id);
    let repeated = "";
    while (repeated.length < 500) {
      repeated += text + " ";
    }
    el.innerText = repeated + repeated;
  }
  
  fillRow("row1", "SUBHANDHEDHI");
  fillRow("row2", "SUBHANDHEDHI");
  

gsap.from(".scroll-top",{
    opacity: 0,
    scrollTrigger:{
        trigger: ".scroll-top",
        start: "top 70%",
        end: "bottom 70%",
        scrub: true
    }
})


tl = gsap.timeline()

tl.from(".hero2",{
    scale: 0.7,
    scrollTrigger:{
        trigger: ".hero2",
        start: "top 100%",
        end: "bottom 140%",
        scroller: "#main",
        marker: true,
        scrub: true
    }
})



gsap.to("#main", {
    backgroundColor: "#101114",  // or any color you want
    color: "#fff",            // text color for all nested text
    scrollTrigger: {
      trigger: ".hero3",
      start: "top 140%",
      end: "bottom 200%",
      scrub: true
    }
  });

tl.from(".hero3",{
    scale: 0.7,
    scrollTrigger:{
        trigger: ".hero3",
        start: "top 100%",
        end: "bottom 100%",
        scroller: "#main",
        scrub: true
    }
})

gsap.to(".card1",{
    scale: 0.7,
    opacity: 0,
    scrollTrigger:{
        trigger:".card1",
        start: "top 15%",
        end: "bottom 15%",
        scroller: "#main",
        scrub: true
    }
})
gsap.to(".card2",{
    scale: 0.7,
    opacity: 0,
    scrollTrigger:{
        trigger:".card2",
        start: "top 15%",
        end: "bottom 15%",
        scroller: "#main",
        scrub: true
    }
})
gsap.to(".card3",{
    scale: 0.7,
    opacity: 0,
    scrollTrigger:{
        trigger:".card3",
        start: "top 15%",
        end: "bottom 15%",
        scroller: "#main",
        scrub: true
    }
})
gsap.to(".card4",{
    scale: 0.7,
    opacity: 0,
    scrollTrigger:{
        trigger:".card4",
        start: "top 15%",
        end: "bottom 15%",
        scroller: "#main",
        scrub: true
    }
})
gsap.to(".card5",{
    scale: 0.7,
    opacity: 0,
    scrollTrigger:{
      trigger:".card5",
      start: "top 15%",
      end: "bottom 15%",
      scroller: "#main",
      scrub: true
    }
  })
  gsap.to(".card6",{
    scale: 0.7,
    opacity: 0,
    scrollTrigger:{
        trigger:".card6",
        start: "top 5%",
        end: "bottom 60%",
        scroller: "#main",
        scrub: true
    }
})

ScrollTrigger.matchMedia({
    // Desktop
    "(min-width: 769px)": function () {
      gsap.to(".card", {
        scrollTrigger: {
          trigger: ".card",
          start: "top 20%",
          end: "+=500", // desktop value
          scrub: true
        },
        y: -100
      });
    },
  
    // Mobile
    "(max-width: 768px)": function () {
      gsap.to(".card", {
        scrollTrigger: {
          trigger: ".card",
          start: "top 10%",   // mobile value
          end: "+=300",       // shorter scroll for smaller cards
          scrub: true
        },
        y: -50
      });
    }
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    var menu = document.querySelector(".menu");
    var menu_btn = document.querySelector(".menu-toggle");
    var close_btn =document.querySelector(".close-menu")
  
    if (!menu || !menu_btn || !close_btn) {
      console.error("Menu elements missing");
      return;
    }
  
    gsap.set(menu, { pointerEvents: "none" }); // Initially disable pointer events for the menu
    gsap.set(close_btn, { display: "none" }); // hide on page load
  
    menu_btn.addEventListener("click", () => {
      console.log("Menu open clicked");
      gsap.to(menu, {
        height: "100vh",
        duration: 0.5,
        ease: "power2.out",
        onStart: () => {
          gsap.set(close_btn, { display: "flex" });
          gsap.set(menu, { pointerEvents: "auto" }); // Enable pointer events when menu is open
          document.body.style.overflow = "hidden";  // disable page scroll
        }
      });
    });
  
    close_btn.addEventListener("click", () => {
      console.log("Close button clicked");
      gsap.to(menu, {
        height: "0vh",
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(close_btn, { display: "none" });
          gsap.set(menu, { pointerEvents: "none" }); // Disable pointer events when menu is closed
          document.body.style.overflow = "";  // enable page scroll
        }
      });
    });
  });
  
