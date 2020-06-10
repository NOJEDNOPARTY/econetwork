var common = {
	init: function() {
		common.scrollTop();
		common.fixNavigation();
		common.main();
		common.carousel();
		common.submitForm();
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
		var header = $('header'),
		scrollPrev = 0;
		function fixNav(){
			var scrolled = $(window).scrollTop();
			if(scrolled == 0) {
				header.removeClass('out');
				header.removeClass('fixed');
				$('body').css('margin-top', 0);
			}else if(scrolled > header.outerHeight() && scrolled > scrollPrev){
				header.addClass('out');
				header.addClass('fixed');
				if($(window).width() < 993) {
					$('body').css('margin-top', header.outerHeight());
				}else {
					$('body').css('margin-top', $('.header-navigation').outerHeight());
				}
				
			}else {
				header.removeClass('out');
			}
			scrollPrev = scrolled;
		};
		

		$(window).scroll(function() {	
			fixNav();
		});
	},
	main: function(){


		$('.row-hidden-trigger').click(function(e){
			e.preventDefault();
			var rowHidden = $(this).closest('.row-hidden');
			if(rowHidden.hasClass('row-hidden-cnt') == false) {
				rowHidden.toggleClass('open');
				rowHidden.find('.row-hidden-cnt').removeClass('open-double');
			}else {
				rowHidden.toggleClass('open-double');
			}
		});

		if($(window).width() < 993) {
			$('.menu-hidden-title').click(function(){
				$(this).closest('ul').toggleClass('open');
			});
			$('.nav-trigger').click(function(e){
				e.preventDefault()
				$(this).toggleClass('open');
				$('header').toggleClass('open');
				$('body').toggleClass('hidden');
			});
		}
		if($(window).width() > 992) {
			$('.menu-hidden-trigger').hover(function(){
				$(this).find('.menu-hidden-wrapper').fadeToggle('fast');
			});
			$('.caller').hover(function(){
				$(this).toggleClass('open')
			});
		}else {
			$('.caller').click(function(){
				$(this).toggleClass('open')
			});
			$('.more-btn').click(function(e){
				e.preventDefault()
				if($(this).hasClass('active') == false) {
					$(this).addClass('active');
					$(this).closest('.more-cnt').addClass('more-active');
					$(this).find('span').text('скрыть');
				}else {
					$(this).removeClass('active');
					$(this).closest('.more-cnt').removeClass('more-active');
					$(this).find('span').text('Показать еще');
				}
			});
		}


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

		jQuery(function($){
			$(document).mouseup(function (e){ 
				var popup = $(".popup");
				if (!popup.is(e.target) 
					&& popup.has(e.target).length === 0) { 
						if($('.popup-wrapper').hasClass('active') == true){
							$('.popup-wrapper').fadeOut('fast');
							$('body').removeClass('hidden');
						}
				}
			});
		});

		$('.call-popup').click(function(event){
			event.preventDefault();
			var popup  = '#' + $(this).attr('data-popup');
			$('.popup-wrapper').addClass('active');
			$('.popup-wrapper').fadeOut('fast');
			$('header').removeClass('open');
			$('body').addClass('hidden');
			$(popup).fadeIn('fast');
		});

		
		$('.popup-close').click(function(){
			$(this).closest('.popup-wrapper').fadeOut('fast');
			$('.popup-wrapper').removeClass('active');
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

		$('.phone-mask').mask("+380(99) 999-99-99");
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
		});
						
	},
	submitForm: function() {
		$("form").submit(function(event){
			event.preventDefault();
			formField = $(this).find(".field")
			
			formField.each(function(){
				var thisEl = $(this);
				if (! thisEl.val().length) {
					thisEl.addClass('error')
					setTimeout(function(){
						thisEl.removeClass('error')
					}, 3000)
					thisEl.addClass('form-error')
				}else { thisEl.removeClass('form-error')}
			});	
			if(formField.hasClass('form-error') == false){
				document.location.href = "./thanks.html";
			}
		});
	}
};

(function() {
	common.init();
}());


