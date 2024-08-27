(function ($) {
	'use strict';

	// AOS ANIMATIONS
	AOS.init();

	// NAVBAR
	$('.navbar-nav .nav-link').click(function () {
		$('.navbar-collapse').collapse('hide');
	});

	// blog IMAGE RESIZE
	function blogImageResize() {
		$('.navbar').scrollspy({
			offset: -76,
		});

		var LargeImage = $('.large-blog-image').height();

		var MinusHeight = LargeImage - 6;

		$('.blog-two-column').css({
			height: MinusHeight - LargeImage / 2 + 'px',
		});
	}

	$(window).on('resize', blogImageResize);
	$(document).on('ready', blogImageResize);

	$('a[href*="#"]').click(function (event) {
		if (
			location.pathname.replace(/^\//, '') ==
				this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').animate(
					{
						scrollTop: target.offset().top - 66,
					},
					1000
				);
			}
		}
	});
})(window.jQuery);
