var common = {
	init: function() {
		common.scrollTop();
		// common.fixNavigation();
		common.main();
		common.carousel();
	},
	scrollTop: function(){
		var btnTop = $('#topBtn');

		function checkScrollPos(){
			if ($(window).scrollTop() > 250) {
				btnTop.show();
			  } else {
				btnTop.hide();
			  }
		};

		checkScrollPos();

		$(window).scroll(function() {
			checkScrollPos();
		});
		
		btnTop.on('click', function(e) {
		  e.preventDefault();
		  $('html, body').animate({scrollTop:0}, '500');
		});
		
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

		if($(window).width() < 993) {
			$('.menu-hidden-title').click(function(){
				$(this).closest('ul').toggleClass('open');
			});
			$('.nav-trigger').click(function(){
				$(this).toggleClass('open');
				$('header').toggleClass('open');
				$('body').toggleClass('hidden');
			});
		}
		if($(window).width() > 992) {
			$('.menu-hidden-trigger').hover(function(){
				$(this).find('.menu-hidden-wrapper').fadeToggle('fast');
			});
		}

		$('.caller').hover(function(){
			$(this).toggleClass('open')
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

		// jQuery(function($){
		// 	$(document).mouseup(function (e){ 
		// 		var popup = $(".popup");
		// 		if (!popup.is(e.target) 
		// 			&& popup.has(e.target).length === 0) { 
		// 			$('.popup-wrapper').fadeOut('fast');
		// 			$('body').removeClass('hidden');
		// 		}
		// 	});
		// });

		$('.call-popup').click(function(event){
			event.preventDefault();
			var popup  = '#' + $(this).attr('data-popup');
			$('.popup-wrapper').fadeOut('fast');
			$('header').removeClass('open');
			$('body').addClass('hidden');
			$(popup).fadeIn('fast');
		});

		
		$('.popup-close').click(function(){
			$(this).closest('.popup-wrapper').fadeOut('fast');
			$('body').removeClass('hidden');
		})

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
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			animateOut: 'fadeIn',
			animateIn: 'fadeIn',
		});
						
	},
};

(function() {
	common.init();
}());


