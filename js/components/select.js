export default () => {
  $('[data-select-click] .select-div__cap .btn').on('click', function() {
    if (!$(this).parents('[data-select-click]').hasClass('active')) {
      $(this).parents('[data-select-click]').addClass('active').find('.select-div__body').slideDown(300)
    } else {
      $(this).parents('[data-select-click]').removeClass('active').find('.select-div__body').slideUp(300)
    }
    
  })

  $(document).mouseup( function(e){
		var div = $( "[data-select-click] .select-div__cap .btn" );
		if ( !div.is(e.target) && div.has(e.target).length === 0 ) {
      div.parents('[data-select-click]').removeClass('active').find('.select-div__body').slideUp(300);
		}
	});
}