export default () => {
  $('[data-select-click] .select-div__cap button').on('click', function() {
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

  // select standart
  $('[data-select-st] .select-st__btn').on('click', function() {
    if (!$(this).parents('[data-select-st]').hasClass('active')) {
      $(this).parents('[data-select-st]').addClass('active').find('.select-st__body').slideDown(300)
    } else {
      $(this).parents('[data-select-st]').removeClass('active').find('.select-st__body').slideUp(300)
    }
  })

  $(document).mouseup( function(e){
		var div = $( "[data-select-st] .select-st__btn" );
		if ( !div.is(e.target) && div.has(e.target).length === 0 ) {
      div.parents('[data-select-st]').removeClass('active').find('.select-st__body').slideUp(300);
		}
	});
}