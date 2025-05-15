$(document).ready(function () {
	'use strict';
	// navbar js start ---
	$(window).on('load scroll', function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 10) {
			$('.navbar-color').addClass('color-black')
		} else {
			$('.navbar-color').removeClass('color-black')
		}
	})

	$(".ham-menu").click(function (event) {
		event.stopPropagation();
		$(".nav-link-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".nav-link-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".mobile-menu-close-window-btn").click(function (event) {
		event.stopPropagation();
		$(".nav-link-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".nav-link-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	// megamenu js start...
	if (window.matchMedia("(min-width: 993px)").matches) {
		$(".megamenu-btn").click(function (event) {
			event.stopPropagation();
			$(this).toggleClass('active');
			$(".megamenu-wrapper").toggleClass('active');
		});
	}
	// megamenu js end...

	// mobile-dropdown responsive accordion js start--
	$(function () {
		let isMobile = window.matchMedia("only screen and (max-width: 992px)").matches;

		if (isMobile) {
			// **..mobile-dropdown-accordion js start..**
			$('.dropdown-btn').on('click', function () {
				$(this).next(".sub-menu").slideToggle();
				$(this).toggleClass('active');
			});
			// **..mobile-dropdown-accordion js end..**
		}
	});
	// mobile-dropdown responsive accordion js end--
	// navbar js end ---

	// filter sidebar js start--
	$(".filter-open-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").addClass('active');
		$("body").toggleClass('active');
	});

	$(".filter-window-close-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").removeClass('active');
		$("body").toggleClass('active');
	});

	$(".filter-close-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").removeClass('active');
		$("body").toggleClass('active');
	});
	// filter sidebar js end--

})

// btn js ---
// primary btn---
$(function () {
	$('.primary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});

// secondary btn--
$(function () {
	$('.secondary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});
// btn js ---

// product-slider js start---
var swiper = new Swiper(".product-slider-thumb", {
	direction: 'vertical',
	loop: true,
	spaceBetween: 20,
	slidesPerView: 5,
	freeMode: true,
	mousewheel: true,
	breakpoints: {
		// when window width is >= 320px
		1: {
			direction: 'horizontal',
			spaceBetween: 10,
			slidesPerView: 4,
		},
		// when window width is >= 576px
		576: {
			direction: 'horizontal',
			spaceBetween: 20,
			slidesPerView: 5,
		},
		// when window width is >= 767px
		768: {
			direction: 'vertical',
			spaceBetween: 20,
			slidesPerView: 5,
		}
	}
});
var swiper2 = new Swiper(".product-slider", {
	loop: true,
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: swiper,
	},
});
// product-slider js end---

// img-slider js start--
var swiper = new Swiper(".img-slider", {
	slidesPerView: 3.5,
	spaceBetween: 16,
	grabCursor: true,
	loop: true,
	pagination: {
		el: ".img-slider-pagination",
		clickable: true,
	},
	breakpoints: {
		// when window width is >= 320px
		1: {
			spaceBetween: 10,
			slidesPerView: 1.5,
		},
		// when window width is >= 576px
		576: {
			spaceBetween: 10,
			slidesPerView: 2.2,
		},
		// when window width is >= 767px
		768: {
			spaceBetween: 10,
			slidesPerView: 3,
		},
		// when window width is >= 767px
		993: {
			spaceBetween: 16,
			slidesPerView: 3.5,
		}
	}
});
// img-slider js end--