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
  
    gsap.set(close_btn, { display: "none" }); // hide on page load
  
    menu_btn.addEventListener("click", () => {
      console.log("Menu open clicked");
      gsap.to(menu, {
        height: "100vh",
        duration: 0.5,
        ease: "power2.out",
        onStart: () => {
          gsap.set(close_btn, { display: "flex" });
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
          document.body.style.overflow = "";  // enable page scroll
        }
      });
    });
  });