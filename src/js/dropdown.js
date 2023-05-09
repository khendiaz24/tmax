var ui_dropdown = (function(document, window) {

	var evt = [

		function(document, window) {

			var toggle = document.querySelectorAll('.header [data-toggle=dropdown], .bottom-menu [data-toggle=dropdown]');


			toggle.forEach(function(dropdown){

				var target = dropdown.querySelector('.dropdown');

				// mouse over
				dropdown.addEventListener('mouseenter', function(){

					dropdown.classList.add('open');
					target.setAttribute('aria-hidden', false);

				}, false);

				// mouse leave
				dropdown.addEventListener('mouseleave', function(e){

					dropdown.classList.remove('open');
					target.setAttribute('aria-hidden', true);

				}, false);

			});

			var toggle = document.querySelectorAll('.mobile-menu [data-toggle=dropdown] i');


			toggle.forEach(function(dropdown){

				var target = dropdown.closest('li').querySelector('.dropdown');
				

				// click
				dropdown.addEventListener('click', function(e){

					e.stopPropagation();
          e.preventDefault();

					if(dropdown.classList.contains('open')) {

						dropdown.classList.remove('open');
						target.setAttribute('aria-hidden', true);
					} else {

						dropdown.classList.add('open');
						target.setAttribute('aria-hidden', false);
					}


				}, false);

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

ui_dropdown.init();
