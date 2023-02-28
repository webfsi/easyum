var $ = jQuery.noConflict();
export default () => {
  $('[data-range-cp] .input-type-range').on('input', function(){
    // console.log($(this).val());
    let val = $(this).val() - 1;
    $(this).parents('[data-range-cp]').find('.cp-banner__eq-price-item.active').removeClass('active')
    const list = document.querySelectorAll('.cp-banner__eq-price-item')
    list[val].classList.add('active')
  });
}