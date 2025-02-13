

$("#primary_slider .splide__list").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	infinite: true,
	speed: 1000,
	asNavFor: "#thumbnail_slider",
	arrows: true,
	prevArrow:
	'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
	nextArrow:
	'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
});
$("#thumbnail_slider").slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	infinite: true,
	asNavFor: "#primary_slider .splide__list",
	dots: false,
	centerMode: false,
	focusOnSelect: true,
	arrows: true,
	prevArrow:
	'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
	nextArrow:
	'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
});





var mainSlider = document.querySelector("#primary_slider");

var thumbnailSlider = document.querySelector("#thumbnail_slider");

$("#thumbnail_slider, .innerVideoGallery .slick-arrow").on("click", ".slick-slide", function () {
	$('#primary_slider .item-slick').each(function () {
		var $this = $(this); 
		var getIframeSrc = $this.attr('data-src');
		var getVideoSrc = $this.attr('data-video-src');

		if (getIframeSrc) {
			$this.find('iframe').attr('src', getIframeSrc);
		}
		if (getVideoSrc) {
			$this.find('video').attr('src', getVideoSrc);
		}
	});
});


$("#primary_slider").on("afterChange", function (event) {
	$('#primary_slider .item-slick').each(function () {
		// 		if ($(this).hasClass('slick-current')) { // ✅ Remove dot from hasClass

		// 			var getPrev = $(this).prev(); 
		// 			if (getPrev.length) { // ✅ Check if previous exists
		// 				var prevgetIframeSrc = getPrev.attr('data-src');
		// 				var prevgetVideoSrc = getPrev.attr('data-video-src');

		// 				if (prevgetIframeSrc) {
		// 					getPrev.find('iframe').attr('src', prevgetIframeSrc);
		// 				}
		// 				if (prevgetVideoSrc) {
		// 					getPrev.find('video').attr('src', prevgetVideoSrc);
		// 				}
		// 			}

		// 			var getNext = $(this).next();
		// 			if (getNext.length) { // ✅ Check if next exists
		// 				var nextgetIframeSrc = getNext.attr('data-src');
		// 				var nextgetVideoSrc = getNext.attr('data-video-src');

		// 				if (nextgetIframeSrc) {
		// 					getNext.find('iframe').attr('src', nextgetIframeSrc);
		// 				}
		// 				if (nextgetVideoSrc) {
		// 					getNext.find('video').attr('src', nextgetVideoSrc);
		// 				}
		// 			}
		// 		}
		var $this = $(this); 
		var getIframeSrc = $this.attr('data-src');
		var getVideoSrc = $this.attr('data-video-src');

		if (getIframeSrc) {
			$this.find('iframe').attr('src', getIframeSrc);
		}
		if (getVideoSrc) {
			$this.find('video').attr('src', getVideoSrc);
		}
	});
});
