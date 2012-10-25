(function($) {
	$.pixelperfect = function(options) {

		var defaults = {
			imageurl: ''
		};
		var options = $.extend(defaults, options);

		var imageOpacity = 0.5,
			isDisplayed  = true;

		function changeOpacity(direction){
			console.log(imageOpacity+direction);

			if(imageOpacity+direction < -0.1 || imageOpacity+direction > 1) return;

			imageOpacity = imageOpacity+direction;

			$("#imageover").css(
				{
					"opacity" : imageOpacity,

				}
			);

		}

		function toggleDisplay(){
			if(isDisplayed === true){
				$("#imageover").css(
					{
						"display" : "none",

					}
				);
				isDisplayed = false;
			}else{
				$("#imageover").css(
					{
						"display" : "block",

					}
				);
				isDisplayed = true;
			}
		}

		function listenKeyEvents() {
			$(window).bind("keypress", function(e) {
				var code = (e.keyCode ? e.keyCode : e.which);
				//115 : down \\ 122 : UP
				console.log(code);
				if(code == 115) {
					changeOpacity(-0.1);
				}
				if(code == 122) {
					changeOpacity(0.1);
				}

				//X
				if(code == 120) {
					toggleDisplay();
				}

			});
		}

		function init() {
			$("body").append('<img src="' + options.imageurl + '" id="imageover" />');
			$("#imageover").css({
				"position": "absolute",
				"top": 0,
				"z-index" : 100
			});

			listenKeyEvents();
		}

		init();

	};
})(jQuery);