var ui_menu = (function(document) {

	var evt = [

		// accordion - function to control an accordion menu

		function(document) {

			var toggle = document.querySelectorAll('[data-toggle=menu]');

			toggle.forEach(function(menu) {

        var panel = document.querySelector('#' + menu.getAttribute('aria-controls'));
				var backdrop = document.querySelector('.layout-backdrop');

				menu.addEventListener('click', function (event) {

					panel.classList.add('open');
					panel.classList.add('easing');
					backdrop.setAttribute('aria-hidden', false);
          document.querySelector('html').classList.add('overflow-panel');

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

ui_menu.init();