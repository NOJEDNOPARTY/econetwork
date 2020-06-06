var common = {
	init: function() {
		// common.fixNavigation();
		common.main();
		common.carousel();
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
		$('.item-trigger').click(function(){
			$(this).toggleClass('active');
		});

		$('.tabs-section a').click(function(e){
			e.preventDefault();
			if($(this).hasClass('.active') == false) {
				var tabCnt = '.' + $(this).attr('data-cnt');
				$(this).closest('.tabs-wrapper').find('.tabs-section a.active, .tab-cnt').removeClass('active')
				$(tabCnt).addClass('active')
				$(this).addClass('active');
				var bLazy = new Blazy({});
			}
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

		$('.banner-slider').owlCarousel({
			loop:true,
			nav: false,
			dots: true,
			items: 1,
			margin:0,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			animateOut: 'fadeIn',
			animateIn: 'fadeIn',
		});
						
	},
};

(function() {
	common.init();
}());


