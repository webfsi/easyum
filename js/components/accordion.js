var $ = jQuery.noConflict();
export default () => {

  $('.js-acc-btn').on('click', function(j) {
    console.log("object");
    if (!$(this).parents('.js-acc-item').hasClass('open')) {
      $(this).parents('.js-acc-item').addClass('open').find('.js-acc-body').slideDown(300).parents('.js-acc-item').siblings().removeClass('open').find('.js-acc-body').slideUp(300);
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2000);
    } else {
      $(this).parents('.js-acc-item').removeClass('open').find('.js-acc-body').slideUp(300).stop(true, false).slideToggle();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2000);
    }
  })
}