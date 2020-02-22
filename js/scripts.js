; (function () {

	"use strict";

	// preloader
	function loadPage() {
		return new Promise((resolve, reject) => {
			setTimeout(resolve, 2000);
		});
	}
	const preloader = document.querySelector('.preloader');
	const preloaderHidden = 'preloader--hidden';

	loadPage().then(() => {
		preloader.classList.add(preloaderHidden);
	}).catch(() => {
		preloader.classList.remove(preloaderHidden);
	});


	// navbar shadow
	function addShadowNavbar() {
		const navbar = document.querySelector('.navbar');
		const navbarHeight = navbar.offsetHeight;
		let scrollY;
		const btnUp = document.querySelector('.btn-up');

		window.addEventListener('scroll', function () {
			scrollY = window.scrollY || window.pageYOffset;
			if (scrollY > navbarHeight) {
				navbar.classList.add('navbar-shadow');
				btnUp.classList.add('btn-up--show');
			} else {
				navbar.classList.remove('navbar-shadow');
				btnUp.classList.remove('btn-up--show');
			}
		});
	}
	addShadowNavbar();


	// slider team
	if ($('.slider-doit').length > 0) {
		$('.slider-doit').owlCarousel({
			loop: false,
			margin: 0,
			nav: false,
			responsiveClass: true,
			slideBy: 1,
			dots: false,
			lazyLoad: true,
			responsive: {
				0: {
					items: 1,
					margin: 0
				},
				640: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	}


	// slider team
	if ($('.slider-team').length > 0) {
		$('.slider-team').owlCarousel({
			loop: false,
			margin: 24,
			nav: false,
			responsiveClass: true,
			slideBy: 2,
			lazyLoad: true,
			responsive: {
				0: {
					items: 2,
					margin: 0
				},
				640: {
					items: 3
				},
				1000: {
					items: 4
				}
			}
		});
	}

	// slider clients
	if ($('.slider-clients').length > 0) {
		$('.slider-clients').owlCarousel({
			loop: false,
			margin: 24,
			nav: false,
			responsiveClass: true,
			slideBy: 2,
			lazyLoad: true,
			responsive: {
				0: {
					items: 2,
					margin: 0
				},
				640: {
					items: 4
				},
				1000: {
					items: 6
				}
			}
		});
	}

	// slider media
	if ($('.slider-media').length > 0) {
		$('.slider-media').owlCarousel({
			loop: false,
			margin: 84,
			nav: false,
			responsiveClass: true,
			slideBy: 1,
			lazyLoad: true,
			responsive: {
				0: {
					items: 1,
					margin: 0
				},
				640: {
					items: 2,
					margin: 24
				},
				1000: {
					items: 3
				}
			}
		});
	}

	const selectElements = document.querySelectorAll('.js-choice');
	for(let i = 0; i < selectElements.length; i++){
		new Choices(selectElements[i]);
	}	
	

	// scroll anchor
	$(document).on('click', '.js-scroll', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});


})();