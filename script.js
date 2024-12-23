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
    },30)
  }
  
  function valueSet() {
    gsap.set(".hero .row h1", {y: 210});
    gsap.set("nav ul li", {y: -20, opacity:0} )
    gsap.set(".hero .upperrow p", {y: 20, opacity:0} )
    gsap.set(".hero .lowerrow .hero-footer-txt p", {y: 20, opacity:0} )
    gsap.set(".hero .lowerrow p", {y: 20, opacity:0} )
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
    })
  
  }
  
  counter()
  