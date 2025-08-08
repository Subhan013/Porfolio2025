// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

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
        start: "top 90%",
        end: "bottom 140%",
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
        start: "top 97%",
        end: "bottom 100%",
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
        scrub: true
    }
})
gsap.to(".card6",{
    scale: 0.7,
    opacity: 0,
    scrollTrigger:{
        trigger:".card6",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true
    }
})