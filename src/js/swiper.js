var ui_slider = (function(document) {

	var evt = [

		function(document) {

			var swipers = document.querySelectorAll('.swiper-holder');

			swipers.forEach(function(slides){

				var progressBar = slides.querySelector(".progress");

				var swipe = slides.querySelector('.swiper');

				var center = swipe.getAttribute('data-center');
				var perview = swipe.getAttribute('data-perview');
				var loop = swipe.getAttribute('data-loop');
				var gap = swipe.getAttribute('data-gap');
				var perviewSm = swipe.getAttribute('data-sm-perview');
				var perviewMd = swipe.getAttribute('data-md-perview');
				var perviewLg = swipe.getAttribute('data-lg-perview');
				var pagination = slides.querySelector('.swiper-pagination');
				var effect = swipe.getAttribute('data-effect');
				var delay = swipe.getAttribute('data-delay');
				var next = slides.querySelector('.swiper-button-next');
				var prev = slides.querySelector('.swiper-button-prev');

				var myloop = Boolean(loop);
				var mycenter = (center);
				var mygap = parseFloat(gap);

				swipe = new Swiper(swipe, {
					spaceBetween: mygap,
					slidesPerView: perviewSm,
					effect: effect,
					loop: myloop,
					grabCursor: true,
					centeredSlides: center,
					autoplay: {
						delay: delay,
						disableOnInteraction: true,
					},
					pagination: {
						el: pagination,
						clickable: true,
					},
					navigation: {
						nextEl: next,
						prevEl: prev,
					},
					breakpoints: {
						640: {
							slidesPerView: perviewSm,
						},
						768: {
							slidesPerView: perviewMd,

						},
						992: {
							slidesPerView: perviewLg,
						},
					},
				});

				progressBar.addEventListener("animationend", myEndFunction);

				// Retrigger Animation on Slide Change

				function myEndFunction() {
					swipe.slideNext();
					progressBar.style.animation = "none";
					void progressBar.offsetWidth; // Triggers Reflow
					progressBar.style.animation = null;
				}

				// Reset Progress Bar On Slide Change

				swipe.on("slideChange", function () {
					progressBar.style.animation = "none";
					void progressBar.offsetWidth; // Triggers Reflow
					progressBar.style.animation = null;
					progressBar.style.animationPlayState = "paused"; // Optional
				});

				// Pause Carousel/Progress Bar On Hover

				document.querySelectorAll(".swiper, .carousel-progress").forEach((item) => {
					item.addEventListener("mouseenter", function () {
						progressBar.style.animationPlayState = "paused";
					});
				});

				document.querySelectorAll(".swiper, .carousel-progress").forEach((item) => {
					item.addEventListener("mouseleave", function () {
						progressBar.style.animationPlayState = "running";
					});
				});

			});
		}

	],
	initAll = function() {

		initEvt(document, window);
	},
	initEvt = function(document, window) {

		evt.forEach(function(e) {
			
			e(document, window);
		});
	};
	
	return { init: initAll };

})(document, window);

ui_slider.init();