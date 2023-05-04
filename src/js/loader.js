/* JavaScript File                                                  */
/* event-hashtag.js                                                   */
/* Modified Jan 18, 2021                                           */


var event_loader = (function(document, window) {

	var evt = [

		function(document, window) {

			// preloader once done
			Pace.on('done', function() {

				setTimeout(() => {
					
					document.querySelector('.pace-inactive').style.display = 'none';
				}, 500);
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

event_loader.init();
