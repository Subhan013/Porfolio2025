var crsr = document.querySelector('.cursor')
var main = document.querySelector('#main')
var page1Vid = document.querySelector('.page1 video')

document.addEventListener('mousemove',function(dets) {
    crsr.style.left = dets.x+-10+'px'
    crsr.style.top = dets.y+-10+'px'
})

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


// 1) Lock both images EXACTLY to the center using xPercent/yPercent
gsap.set([".img-left", ".img-right"], {
    xPercent: -50,
    yPercent: -50,
    left: "50%",
    top: "50%",
    position: "absolute",
    rotate: 0,
    force3D: true
  });
  
  // 2) Animate them apart on scroll (starting from the centered position)
  gsap.to(".img-left", {
    scrollTrigger: {
      trigger: ".hero1",
      start: "top 0%",
      end: "bottom 100%",
      scrub: true
    },
    x: "-15vw",        // move left from center
    rotate: -8,
    ease: "power2.inOut"
  });
  
  gsap.to(".img-right", {
    scrollTrigger: {
      trigger: ".hero1",
      start: "top 0%",
      end: "bottom 100%",
      scrub: true
    },
    x: "15vw",         // move right from center
    rotate: 8,
    ease: "power2.inOut"
  });
  
  gsap.from(".hero2",{
    scale:0,
    scrollTrigger: {
        trigger: ".hero2",
        start: "top 150%",
        end: "bottom 80%",
        scrub: true,
      }
})

const text = document.querySelector("#reveal-text");
const letters = text.textContent.split(""); // split into letters
text.innerHTML = ""; 

// wrap each letter in span
letters.forEach(letter => {
  text.innerHTML += `<span>${letter}</span>`;
});

gsap.to("#reveal-text span", {
  color: "#fff",
  stagger: 0.1, // reveal one by one
  scrollTrigger: {
    trigger: "#reveal-text",
    start: "top 60%",
    end: "bottom top",
    scrub: true
  }
});