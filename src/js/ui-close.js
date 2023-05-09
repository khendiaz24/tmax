var ui_close = (function(document) {

	var evt = [

		// accordion - function to control an accordion menu

		function(document) {

			var toggle = document.querySelectorAll('[data-toggle=close]');

			toggle.forEach(function(close) {

        var panel = document.querySelector('#' + close.getAttribute('aria-controls'));
				var backdrop = document.querySelector('.layout-backdrop');

				close.addEventListener('click', function (event) {

					panel.classList.remove('open');
					backdrop.setAttribute('aria-hidden', true);
          document.querySelector('html').classList.remove('overflow-panel');

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

ui_close.init();