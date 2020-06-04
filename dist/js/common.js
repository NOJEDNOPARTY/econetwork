var common = {
	init: function() {
		// common.fixNavigation();
		common.main();
		// common.carousel();
	},
	fixNavigation: function(){
		function fixPanel() {
			if ($('.header-top').offset().top + $('.header-top').height() <= $(window).scrollTop()) {
				$('header nav').addClass('fixed-nav');
				$('.header-top').css({'margin-bottom':$('header nav').height()})
			}else {
					$('header nav').removeClass('fixed-nav')
					$('.header-top').css({'margin-bottom':0})
			}
		};
		fixPanel();
		$(window).scroll(function() {
			if($(window).width() > 993) {
				fixPanel();
			}
		});
	},
	main: function(){

		$('.menu-hidden-trigger').hover(function(){
			$(this).find('.menu-hidden-wrapper').fadeToggle('fast');
		});

		// var bLazy = new Blazy({});

		// if($(window).width() < 1025) {
		// 	$('.nav-link-trigger').click(function(){
		// 		if($(this).closest('.nav-link').hasClass('active')) {
		// 			$('.nav-link').removeClass('active');
		// 		}else{
		// 			$('.nav-link').removeClass('active');
		// 			$(this).closest('.nav-link').addClass('active');
		// 		}
		// 	});
		// }
		// $('.menu-trigger').click(function(){
		// 	$('.header').addClass('open');
		// });
		// $('.menu-mob-close').click(function(){
		// 	$('.header').removeClass('open');
		// });
	},
	carousel: function(){

		$('.news-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				fade: true,
				asNavFor: '.news-slider-nav',
				adaptiveHeight: true
			});
			
		$('.news-slider-nav').slick({
		dots: false,
		vertical: true,
		slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
		slidesToScroll: 1,
				verticalSwiping: false,
				focusOnSelect: true,
				asNavFor: '.news-slider',
			});
			
	},
};

(function() {
	common.init();
}());


