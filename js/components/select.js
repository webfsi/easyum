var $ = jQuery.noConflict();
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


  //form elements
  // jcf.setOptions('File', {
  //   buttonText: 'Выбрать',
  //   placeholderText: 'Выберите файл'
  // });
  
  jcf.setOptions('Select', {
    wrapNative: false,
    multipleCompactStyle: true,
    maxVisibleItems: 6,
    // wrapNativeOnMobile: false,
    fakeDropInBody: false,
    // flipDropToFit: false,
    useCustomScroll: false
  });
  
  jcf.replaceAll();



  $('.fancy-open-modal-price1').fancybox({
    type: 'ajax',
    src: './modal-blocks.html',
    filter: '#modalPrice1',
    baseClass: 'modal-select-wrapp',
    parentEl: 'body',
    hideScrollbar: false,
    animationEffect: 'slide-in-out',
    animationDuration: 500,
    beforeShow: function(){
			$("body").addClass('fancy-modal');
		},
    afterShow: function(){
      jcf.setOptions('Select', {
        wrapNative: false,
        multipleCompactStyle: true,
        maxVisibleItems: 6,
        fakeDropInBody: false,
        useCustomScroll: false
      });
      
      jcf.replaceAll();
      
		},
		afterClose: function(){
      $("body").removeClass('fancy-modal');
		}
  });

  $('.fancy-open-modal-price2').fancybox({
    type: 'ajax',
    src: './modal-blocks.html',
    filter: '#modalPrice2',
    baseClass: 'modal-select-wrapp',
    parentEl: 'body',
    hideScrollbar: false,
    animationEffect: 'slide-in-out',
    animationDuration: 500,
    beforeShow: function(){
			$("body").addClass('fancy-modal');
		},
    afterShow: function(){
      jcf.setOptions('Select', {
        wrapNative: false,
        multipleCompactStyle: true,
        maxVisibleItems: 6,
        fakeDropInBody: false,
        useCustomScroll: false
      });
      
      jcf.replaceAll();

      $('.jcf-select-slct-find-selected').on('click', function(){
        $('.jcf-option').on('click', function(){
          if ($(this).hasClass('jcf-option-js-selected')) {
            $(this).parents('.jcf-select').addClass('js-jcf-active').parent().addClass('js-select-active')
          } else {
            $(this).parents('.jcf-select').removeClass('js-jcf-active').parent().removeClass('js-select-active')
          }
        })
      })
      
		},
		afterClose: function(){
      $("body").removeClass('fancy-modal');
		}
  });
  
  
}