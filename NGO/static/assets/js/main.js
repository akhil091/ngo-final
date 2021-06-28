/*
Template name: Perits
Author: Micro Theme

JS table of index
:::::::::::::::::
00. Preloader
01. Mobile header
02. Search popup  
03. Home page slider 1
04. Testimonials slider 
05. Partners / branding carousel 
06. Gallery carousel 
07. Blog posts carousel 
08. Background data option 
09. Button hover animation
10. Line Progress Bar
11. Circle progress counter
12. Number counter 
13. Back to top scroll
*/
// 00. Preloader 
(function ($) {
	"use strict";
	function SitePreloader() {
	  if ($('.preloader-wrap').length) {
		$('body').addClass('page-loaded');
		$('.preloader-wrap').delay(1000).fadeOut(0);
	  }
	}
	$(window).on('load', function () {
	  SitePreloader();
	});
  })(window.jQuery),
(function ($) {
	"use strict";
	/*
	 **	01. Mobile header
	 */
	$(document).ready(function () {
		MicroMobileHeader.init();
	});
	var MicroMobileHeader = {
		init: function () {
			var $holder = $('#micro-mobile-header');
			if ($holder.length) {
				MicroMobileHeader.initMobileHeaderOpener($holder);
				MicroMobileHeader.initDropDownMobileMenu();
			}
		},
		initMobileHeaderOpener: function (holder) {
			var $opener = holder.find('.menu-trigger');
			if ($opener.length) {
				var $navigation = holder.find('.micro-mobile-header-navigation');
				$opener.on('tap click', function (e) {
					e.preventDefault();
					if ($navigation.is(':visible')) {
						$navigation.slideUp(450);
						$opener.removeClass('mobile-menu-opened');
					} else {
						$navigation.slideDown(450);
						$opener.addClass('mobile-menu-opened');
					}
				});
			}
		},
		initDropDownMobileMenu: function () {
			var $dropdownOpener = $('.micro-mobile-header-navigation .menu-item-has-children > a');
			if ($dropdownOpener.length) {
				$dropdownOpener.each(function () {
					var $thisItem = $(this);
					$thisItem.on('tap click', function (e) {
						e.preventDefault();
						var $thisItemParent = $thisItem.parent(),
							$thisItemParentSiblingsWithDrop = $thisItemParent.siblings('.menu-item-has-children');
						if ($thisItemParent.hasClass('menu-item-has-children')) {
							var $submenu = $thisItemParent.find('ul.sub-menu').first();
							if ($submenu.is(':visible')) {
								$submenu.slideUp(450);
								$thisItemParent.removeClass('mobile-menu-opened');
							} else {
								$thisItemParent.addClass('mobile-menu-opened');
								if ($thisItemParentSiblingsWithDrop.length === 0) {
									$thisItemParent.find('.sub-menu').slideUp(400, function () {
										$submenu.slideDown(400);
									});
								} else {
									$thisItemParent.siblings().removeClass('mobile-menu-opened').find('.sub-menu').slideUp(400, function () {
										$submenu.slideDown(400);
									});
								}
							}
						}
					});
				});
			}
		}
	};
	// 02. Search popup 
	jQuery(".search-trigger").on('click', function () {
		jQuery(".full-bar-search-wrap").addClass('search-show');
		jQuery("body").addClass('st-prevent-scroll');
		jQuery(".field.searchform-s").focus();
		return !1
	});
	jQuery(".close-search").on('click', function () {
		jQuery(".full-bar-search-wrap").removeClass('search-show');
		jQuery("body").removeClass('st-prevent-scroll');
		return !1
	});
	jQuery('.search-trigger').on('click', function (event) {
		event.stopPropagation()
	});
	// 03. Home page slider 1 
	var MicroSlider = new Swiper('.micro-slider', {
		pagination: {
			el: '.ms-pagination',
			clickable: true,
		},
	});
	// 04. Testimonials slider 
	var TestimonialsSlider = new Swiper('.testimonials-slider', {
		pagination: {
			el: '.ts-pagination',
			clickable: true,
		},
	});
	// 05. Partners / branding carousel 
	var PartnerCarousel = new Swiper('.partners-carousel', {
		slidesPerView: 2,
		spaceBetween: 30,
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 70,
			},
		}
	});
	//   06. Gallery carousel 
	var GalleryCarousel = new Swiper('.gallery-slider', {
		slidesPerView: 2,
		spaceBetween: 20,
		pagination: {
			el: '.gs-pagination',
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 4,
			},
			1024: {
				slidesPerView: 6,
			},
		}
	});
	var GalleryCarousel2 = new Swiper('.gallery-slider-2', {
		slidesPerView: 1,
		spaceBetween: 0,
		breakpoints: {
			640: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
		}
	});
	//   07. Blog posts carousel 
	var BlogCarousel = new Swiper('.blog-carousel', {
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '.bn-next',
			prevEl: '.bn-prev',
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
				initialSlide: 1,
				slidesOffsetBefore: 40,
				centeredSlides: true,
			},
		}
	});
	// 08. Background data option 
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});
	// 09. Button hover animation 
	$('.theme-btn, .menu-btn, .slide-btn, .wpcf7-submit').append('<span></span>');
	if ($('.theme-btn, .menu-btn, .slide-btn, .wpcf7-submit').length > 0) {
		$('.theme-btn, .menu-btn, .slide-btn, .wpcf7-submit').on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			if ($(this).find('span')) {
				$('.theme-btn span, .menu-btn span, .slide-btn span, .wpcf7-submit span').css({
					top: relY,
					left: relX,
				})
			}
		});
		$('.theme-btn, .menu-btn, .slide-btn, .wpcf7-submit').on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			if ($(this).find('span')) {
				$('.theme-btn span, .menu-btn span, .slide-btn span, .wpcf7-submit span').css({
					top: relY,
					left: relX,
				})
			}
		})
	}
	// 10. Line Progress Bar
	if ($('.bar-line-active').length) {
		$('.bar-line-active').appear(function () {
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width', percent).addClass('counted');
		}, {
			accY: -50
		});
	}
	// 11. Circle progress counter
	if ($(".circle-box").length) {
		$(".circle-box").appear(
			function () {
				var elm = $(this);
				var color = elm.attr("data-fgColor");
				var perc = elm.attr("value");
				var thickness = elm.attr("data-thickness");
				elm.knob({
					value: 0,
					min: 0,
					max: 100,
					skin: "tron",
					readOnly: true,
					thickness: thickness,
					dynamicDraw: true,
					displayInput: false
				});
				$({
					value: 0
				}).animate({
					value: perc
				}, {
					duration: 2000,
					easing: "swing",
					progress: function () {
						elm.val(Math.ceil(this.value)).trigger("change");
					}
				});
			}, {
				accY: 0
			}
		);
	}
	// 12. Number counter 
	if ($(".counter-box, .count-box").length) {
		$(".counter-box, .count-box").appear(
			function () {
				var $t = $(this),
					n = $t.find(".counter-text").attr("data-stop"),
					r = parseInt($t.find(".counter-text").attr("data-speed"), 10);
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".counter-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function () {
							$t.find(".counter-text").text(Math.floor(this.countNum));
						},
						complete: function () {
							$t.find(".counter-text").text(this.countNum);
						}
					});
				}
			}, {
				accY: 0
			}
		);
	}
	// 13. Back to top scroll
	var $backToTop = $('.back-to-top');
	if ($backToTop.length > 0) {
		$backToTop.on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: '0px'
			}, 700);
		});
		$(window).on('scroll', function () {
			var scrollPosition = $(window).scrollTop();
			var windowHeight = $(window).height() / 2;
			if (scrollPosition > windowHeight) {
				$backToTop.addClass('in');
			} else {
				$backToTop.removeClass('in');
			}
		});
	}
})(jQuery);