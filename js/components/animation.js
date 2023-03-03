// export default (gsap, ScrollTrigger, ScrollToPlugin) => {
var $ = jQuery.noConflict();
export default () => {
  const $navListItems = document.querySelectorAll('.nav-list-item')
  $navListItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      if (!item.classList.contains('hover')) {
        item.classList.add('hover');
      }
    })
    item.addEventListener('mouseleave', function() {
      if (item.classList.contains('hover')) {
        setTimeout(() => {

          item.classList.remove('hover');
          // item.classList.remove('hover');
        }, 1000);
      }
    })
  });


  const animFadeY = document.querySelectorAll("[data-anim-fadey]");
	const animFadeYScrub = document.querySelectorAll("[data-anim-fadeys]");
	const animFadeYFix = document.querySelectorAll("[data-anim-fadey-fix]");
	const animFadeL = document.querySelectorAll("[data-anim-fadel]");
	const animFadeR = document.querySelectorAll("[data-anim-fader]");
	const animFadeZ = document.querySelectorAll("[data-anim-zoom]");
	const animDuration = 1;
	const animToggleActions = "play none none none";
	const animStart = "top bottom";
	const animEnd = "top bottom-=100px";

  


	animFadeY.forEach((animFY) => {
			gsap
			.timeline({
					scrollTrigger: {
							trigger: animFY,
							toggleActions: animToggleActions,
							start: animStart,
							// markers: true,
							end: animEnd,
							// scrub: true,
					},
			})
			.fromTo(animFY, {
					y: 70,
					opacity: 0,
			}, {
					y: 0,
					opacity: 1,
					duration: animDuration,
					delay: animFY.dataset.animFadey,
			})
	});

	// const svgHeader = document.querySelectorAll('.main-map-modal__item')

}