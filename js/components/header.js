export default () => {
  $('.fancy-open-header').fancybox({
    type: 'ajax',
    src: './modal-blocks.html',
    filter: '#modalHeader',
    baseClass: 'modal-header-wrapp',
    parentEl: 'header',
    hideScrollbar: false,
    animationEffect: 'slide-in-out',
    animationDuration: 500,
    beforeShow: function(){
			$("body").addClass('fancy-modal');
		},
    afterShow: function(){
      const listMapHeader = document.querySelectorAll('.modal-city .main-map-modal__item'),
        listTextHeader = document.querySelectorAll('.modal-city [data-find-city] .mc-point')
      listMapHeader.forEach(el => {
        $( el ).hover(
          function() {
            $( this ).addClass('active');
            let value = this.dataset.cityFind
            listTextHeader[value].classList.add('active');
          }, function() {
            $( this ).removeClass('active')
            let value = this.dataset.cityFind
            listTextHeader[value].classList.remove('active')
          }
        );
      });

      for (let i = 0; i < listTextHeader.length; i++) {
        const element = listTextHeader[i];
        
        $( element ).hover(
          function() {
            $( this ).addClass('active');
            let value = this.dataset.findCityValue
            console.log(value);
            console.log(listMapHeader[value]);
            listMapHeader[value].classList.add('active');
          }, function() {
            $( this ).removeClass('active')
            let value = this.dataset.findCityValue
            listMapHeader[value].classList.remove('active');
          }
        );
      }

		},
		afterClose: function(){
      $("body").removeClass('fancy-modal');
		}
  });


  $('.fancy-open-course').fancybox({
    type: 'ajax',
    src: './modal-blocks.html',
    filter: '#modalCourse',
    baseClass: 'modal-header-wrapp',
    parentEl: 'header',
    hideScrollbar: false,
    animationEffect: 'slide-in-out',
    animationDuration: 500,
    beforeShow: function(){
			$("body").addClass('fancy-modal');
		},
    afterShow: function(){
      // tabs
      $('ul.tabs-list').on('click', 'li:not(.current)', function() {
        $(this).addClass('current').siblings().removeClass('current')
          .parents('div.tabs-section').find('div.tabs-box').eq($(this).index()).slideDown(1000).addClass('active').siblings('div.tabs-box').slideUp(0).removeClass('active');
      });
		},
		afterClose: function(){
      $("body").removeClass('fancy-modal');
		}
  });


  $('.fancy-open-burger').fancybox({
    type: 'ajax',
    src: './modal-blocks.html',
    filter: '#modalBurger',
    baseClass: 'modal-header-burger',
    parentEl: 'header',
    hideScrollbar: false,
    animationEffect: 'slide-burger',
    animationDuration: 500,
    beforeShow: function(){
			$("body").addClass('fancy-modal-burger');
		},
    afterShow: function(){
      // tabs
      // $('ul.tabs-list').on('click', 'div.modal-burger__item-cap:not(.current)', function() {
      //   $(this).addClass('current').parent().addClass('current').siblings().removeClass('current')
      //     .parents('div.tabs-section').find('div.tabs-box').eq($(this).index()).slideDown(1000).addClass('active').siblings('div.tabs-box').slideUp(0).removeClass('active');
      // });

      $('.js-acc__title').click(function(j) {
    
        var dropDown = $(this).closest('.js-acc__item').find('.js-acc__body');
        $(this).closest('.js-acc').find('.js-acc__body').not(dropDown).slideUp();
        
        if ($(this).closest('.js-acc__item').hasClass('active')) {
          $(this).closest('.js-acc__item').removeClass('active');
        } else {
          $(this).closest('.js-acc').find('.js-acc__item.active').removeClass('active');
          $(this).closest('.js-acc__item').addClass('active');
        }
        
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
      });
      
      // tabs
      $('ul.js-acc-two__list').on('click', '.js-acc-two__item:not(.active) > .js-acc-two__title', function() {
        $(this).parents('.js-acc-two__item').addClass('active').siblings().removeClass('active')
          .parents('.js-acc-two').find('.js-acc-two__body').eq($(this).parents('.js-acc-two__item').index()).slideDown(500).addClass('active').siblings('.js-acc-two__body').delay(500).slideUp(500).removeClass('active');
      });
      
		},
		afterClose: function(){
      $("body").removeClass('fancy-modal-burger');
		}
  });




}