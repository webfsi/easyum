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
}