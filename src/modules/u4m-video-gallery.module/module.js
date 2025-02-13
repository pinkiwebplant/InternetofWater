$("#primary_slider .splide__list").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
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
  slidesToShow: 4,
  slidesToScroll: 4,
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

// // // Primary slider.
// // var primarySlider = new Splide("#primary_slider", {
// //   type: "fade",
// //   heightRatio: 0.5,
// //   pagination: false,
// //   arrows: true,
// //   cover: true,
// //   perPage: 1,
// //   perMove: 1,
// // });

// // // Thumbnails slider.
// // var thumbnailSlider = new Splide("#thumbnail_slider", {
// //   rewind: true,
// //   type: "loop",
// //   isNavigation: true,
// //   gap: 10,
// //   pagination: false,
// //   perPage: 3,
// //   perMove: 3,
// //   breakpoints: {
// //     479: {
// //       perPage: 3,
// //       perMove: 3,
// //       perPage: 2,
// //       perMove: 1,
// //     },
// //   },
// // }).mount();

// // // sync the thumbnails slider as a target of primary slider.
// // primarySlider.sync(thumbnailSlider).mount();

// // Primary slider
// // var primarySlider = new Splide("#primary_slider", {
// // 	heightRatio: 0.5,
// // 	type: "loop",
// // 	// 	pagination: false,
// // 	// 	arrows: true,
// // 	perPage: 1,
// // 	perMove: 1
// // });
// // // primarySlider.mount();
// // // Thumbnails slider
// // var thumbnailSlider = new Splide("#thumbnail_slider", {
// // 	gap: 10,
// // 	type: "loop",
// // 	focus: "center",
// // 	perPage: 3,
// // 	pagination: false,
// // 	arrows: true,
// // 	isNavigation: true,

// // 	breakpoints: {
// // 		479: {
// // 			perPage: 2, // Fixed duplicate perPage
// // 			perMove: 1, // Fixed duplicate perMove
// // 		},
// // 	},
// // });
// // // thumbnailSlider.mount();

// // // primarySlider.sync(thumbnailSlider);

// // primarySlider.sync(thumbnailSlider);
// // primarySlider.mount();
// // thumbnailSlider.mount();

// // // Primary slider.
// // var primarySlider = new Splide('#primary_slider', {
// //      type: "fade",
// //     heightRatio: 0.5,
// //     pagination: false,
// //     arrows: true,
// //    perPage: 1,
// //    perPage: 1,
// //   perMove: 1,
// // });

// // // Thumbnails slider.
// // var thumbnailSlider = new Splide('#thumbnail_slider', {
// //     rewind: true,
// //     fixedHeight: 64,
// //     isNavigation: true,
// //     gap: 10,
// //    type: 'loop',
// //       rewind: true,
// //     pagination: false,
// //    perPage: 3,
// //   perMove: 1
// // }).mount();

// // // sync the thumbnails slider as a target of primary slider.
// // primarySlider.sync(thumbnailSlider).mount();

// // var main = new Splide("#primary_slider", {
// // 	type: "fade",
// // 	perPage: 1,
// // 	pagination: false,
// // 	arrows: true,
// // });

// var main = new Splide('#primary_slider', {
// 	type: "fade",
// 	heightRatio: 0.5,
// 	pagination: false,
// 	arrows: false,
// });

// var thumbnails = new Splide("#thumbnail_slider", {
// 	type: "loop",
// 	focus: "center",
// 	perPage: 3,
// 	pagination: false,
// 	arrows: true,
// 	isNavigation: true,
// 	breakpoints: {
// 		640: {
// 			perPage: 2,
// 		}
// 	}
// });

// main.sync(thumbnails);
// main.mount();
// thumbnails.mount();
