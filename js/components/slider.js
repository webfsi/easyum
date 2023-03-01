export default () => {
  

	const $sliderFour = document.querySelectorAll('[data-slider-four]');

	$sliderFour.forEach((sliderEl) => {
		const sInit = sliderEl.querySelector('.swiper'),
			prev = sliderEl.querySelector('.swiper-button-prev'),
			next = sliderEl.querySelector('.swiper-button-next');
			// pag = sliderEl.querySelector('.swiper-pagination');
		let sliderMy = new Swiper(sInit, {
			speed: 500,
			// loop: true,

			// observeParents: true,
			// observeSlideChildren: true,
			// observer: true,
			spaceBetween: 24,
			slidesPerView: 4,

			navigation: {
				prevEl: prev,
				nextEl: next,
			},

			breakpoints: {
				1440: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 3,
				},
				0: {
					slidesPerView: 2,
				},

			},
		});


	});

	const $sliderThree = document.querySelectorAll('[data-slider-three]');

	$sliderThree.forEach((sliderEl) => {
		const sInit = sliderEl.querySelector('.swiper'),
			prev = sliderEl.querySelector('.swiper-button-prev'),
			next = sliderEl.querySelector('.swiper-button-next');
			// pag = sliderEl.querySelector('.swiper-pagination');
		let sliderMy = new Swiper(sInit, {
			speed: 500,
			// loop: true,

			// observeParents: true,
			// observeSlideChildren: true,
			// observer: true,
			spaceBetween: 42,
			slidesPerView: 3,

			navigation: {
				prevEl: prev,
				nextEl: next,
			},

			breakpoints: {
				1440: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 3,
				},
				0: {
					slidesPerView: 2,
				},

			},
		});


	});

	const $slidersPersonal = document.querySelectorAll('[data-sliders-personal]');

	$slidersPersonal.forEach((sliderEl) => {
		const sInit = sliderEl.querySelector('.swiper_personal-cap'),
			prev = sliderEl.querySelector('.swiper-button-prev'),
			next = sliderEl.querySelector('.swiper-button-next'),
			sInit2 = sliderEl.querySelector('.swiper_personal-info');
			// pag = sliderEl.querySelector('.swiper-pagination');
		let sliderMyOne = new Swiper(sInit, {
			speed: 500,
			// loop: true,

			// observeParents: true,
			// observeSlideChildren: true,
			// observer: true,
			// spaceBetween: 42,
			slidesPerView: 1,

			navigation: {
				prevEl: prev,
				nextEl: next,
			},

			// breakpoints: {
			// 	1440: {
			// 		slidesPerView: 3,
			// 	},
			// 	768: {
			// 		slidesPerView: 3,
			// 	},
			// 	0: {
			// 		slidesPerView: 2,
			// 	},

			// },
		});

		let sliderMyTwo = new Swiper(sInit2, {
			speed: 500,
			// loop: true,

			// observeParents: true,
			// observeSlideChildren: true,
			// observer: true,
			// spaceBetween: 42,
			slidesPerView: 1,
      effect: 'fade',

			// navigation: {
			// 	prevEl: prev,
			// 	nextEl: next,
			// },

			// breakpoints: {
			// 	1440: {
			// 		slidesPerView: 3,
			// 	},
			// 	768: {
			// 		slidesPerView: 3,
			// 	},
			// 	0: {
			// 		slidesPerView: 2,
			// 	},

			// },
		});

		sliderMyOne.controller.control = sliderMyTwo;
    sliderMyTwo.controller.control = sliderMyOne;


	});
}