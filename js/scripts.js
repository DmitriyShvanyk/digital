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

		window.addEventListener('scroll', () => {
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
	const sliderDoit = $('.slider-doit');
	if (sliderDoit.length > 0) {
		sliderDoit.owlCarousel({
			loop: true,
			margin: 0,
			nav: false,
			responsiveClass: true,
			slideBy: 1,
			dots: false,
			lazyLoad: true,
			autoHeight: true,
			//animateOut: 'fadeOut',
			//animateIn: 'fadeIn',
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
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

		// add animate.css class(es) to the elements to be animated
		function setAnimation(_elem, _InOut) {
			// Store all animationend event name in a string.
			// cf animate.css documentation
			var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

			_elem.each(function () {
				var $elem = $(this);
				var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

				$elem.addClass($animationType).one(animationEndEvent, function () {
					$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
				});
			});
		}

		// Fired before current slide change
		sliderDoit.on('change.owl.carousel', function (event) {
			var $currentItem = $('.owl-item', sliderDoit).eq(event.item.index);
			var $elemsToanim = $currentItem.find("[data-animation-out]");
			setAnimation($elemsToanim, 'out');
		});

		// Fired after current slide has been changed
		sliderDoit.on('changed.owl.carousel', function (event) {

			var $currentItem = $('.owl-item', sliderDoit).eq(event.item.index);
			var $elemsToanim = $currentItem.find("[data-animation-in]");
			setAnimation($elemsToanim, 'in');
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
			loop: true,
			margin: 24,
			nav: false,
			responsiveClass: true,
			slideBy: 2,
			lazyLoad: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
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
			loop: true,
			margin: 84,
			nav: false,
			responsiveClass: true,
			slideBy: 1,
			lazyLoad: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
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


	// scroll anchor
	$(document).on('click', '.js-scroll', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});


	// lazy load
	var bLazy = new Blazy({
		// Options
		offset: 100
	});


})();