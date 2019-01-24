/*global $*/
// carousel
$(document).ready(function () {
	"use strict";
	$('.carousel').carousel({
		interval: 3500
	});
	// option btn
	let optionButton = $("#option-btn");
	optionButton.mouseenter(function () {
		if ($(this).hasClass("fa-spin")) {
			$(this).removeClass("fa-spin");
		}
	});
	optionButton.mouseout(function () {
		if ($(this).hasClass("fa fa-cog") === true) {
			$(this).addClass("fa-spin");
		}
	});

	optionButton.click(function () {
		if ($(this).hasClass("fa fa-cog") === true) {
			$(this).fadeToggle(300, function () {
				$(this).attr("class", "fa fa-times").fadeToggle(100);
				$(this).parent().parent().css("transform", "translate(0, -50%)");
			});
		} else {
			$(this).fadeToggle(300, function () {
				$(this).attr("class", "fa fa-cog fa-spin").fadeToggle(100);
				$(this).parent().parent().css("transform", "translate(-100%, -50%)");
			});
		}
	});

	//change theme color
	let themeColors = $(".color-box ul li");
	themeColors.click(function () {
		$("link[href*='theme']").attr("href", $(this).attr("data-target"));
	});

	//scroll top icon
	let scrollIcon = $(".scroll-icon");
	$(window).scroll(function () {
		if ($(this).scrollTop() >= $(".about-us").offset().top - $(".about-us").outerHeight(true)) {
			//strat of about-us sec
			scrollIcon.show();
		} else {
			scrollIcon.hide();
		}
	});
	scrollIcon.click(function () {
		$("html").animate({
			scrollTop: 0
		}, 500);
	});

	//nice scroll
	$("body").niceScroll({
		cursorwidth: "15px",
		cursorborder: "none",
		railpadding: { top: 0, right: 0, left: 0, bottom: -70 }
	});

	// count to plugin
	$(window).scroll(function () {
		//from the start of statistics section
		if ($(".timer").html() == "") {
			if ($(this).scrollTop() >= ($(".our-statistics").offset().top) - $(".our-statistics").outerHeight(true)) {
				$('.timer').countTo();
			}
		}
	});
});


//loading screen
window.onload = () => {
	"use strict";
	$(".sk-folding-cube").fadeOut(2000, function () {
		// $("body").css("overflow-y", "auto");
		$(this).parent().fadeOut(500);
	});
};
//smooth scroll
var scroll = new SmoothScroll(".data-scroll", {
	speed: 500,
	offset: 50
});