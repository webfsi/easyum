var $ = jQuery.noConflict();
export default () => {
  if (document.querySelectorAll('.parallax-container')[0]) {
    
  // mouse MOVE
  var rect = $('.parallax-container')[0].getBoundingClientRect();
  var mouse = {x: 0, y: 0, moved: false};
  
  $(".parallax-container").mousemove(function(e) {
    mouse.moved = true;
    mouse.x = e.clientX - rect.left;
    mouse.y = e.pageY - rect.top;
    console.log(mouse.y);
    console.log(rect.height);
    rect.height = rect.width
  });
   
  // Ticker event will be called on every frame
  gsap.ticker.add(() => {
    if (mouse.moved){
      const animParallax = document.querySelectorAll('.parallax')
      for (let i = 0; i < animParallax.length; i++) {
        const element = animParallax[i];
        let data = element.dataset.speedX
        parallaxIt(element, data);
        
      }
      // parallaxIt(".parallax", -30);
    }
    mouse.moved = false;
  });
  
  function parallaxIt(target, movement) {
    gsap.to(target, {
      duration: 0.5,
      x: (mouse.x - rect.width / 2) / rect.width * movement,
      y: (mouse.y - rect.height / 2) / rect.height * movement
    });
  }
  
  $(window).on('resize scroll', function(){
    rect = $('.parallax-container')[0].getBoundingClientRect();
  })
  }

  // 

  gsap.registerPlugin(ScrollTrigger);
  let speed = 100;

  /*  SCENE 1 */
  let scene1 = gsap.timeline();
  ScrollTrigger.create({
      animation: scene1,
      trigger: ".parallax-container",
      start: "top top",
      end: "45% 100%",
      scrub: 3,
  });


  const animParallaxTop = document.querySelectorAll('.parallax-top')
  for (let i = 0; i < animParallaxTop.length; i++) {
    const element = animParallaxTop[i];
    let data = element.dataset.speedY;
    scene1.to(element, { y: data * speed }, 0)
  }

}