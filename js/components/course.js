export default () => {

  const animCourseScroll = document.querySelectorAll('.course-item')
	animCourseScroll.forEach((el) => {
    gsap
    .timeline({
        scrollTrigger: {
            trigger: el,
            // toggleActions: animToggleActions,
            start: 'top center',
            // markers: true,
            end: 'bottom center',
            // scrub: true,
            onEnter() {
              el.classList.add('_active-scroll');
            },
            onLeave() {
              el.classList.remove('_active-scroll');
            },
            onEnterBack() {
              el.classList.add('_active-scroll');
            },
            onLeaveBack() {
              el.classList.remove('_active-scroll');
            }
        },
    })
});
}