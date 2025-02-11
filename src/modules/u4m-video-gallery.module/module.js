// Primary slider.
var primarySlider = new Splide('#primary_slider', {
    type: 'fade',
    heightRatio: 0.5,
    pagination: false,
    arrows: false,
    cover: true,
});

// Thumbnails slider.
var thumbnailSlider = new Splide('#thumbnail_slider', {
    rewind: true,
      type: 'loop',
    isNavigation: true,
    gap: 10,
    focus: 'center',
    pagination: false,
     perPage: 3,
  perMove: 3,
    cover: true,
    breakpoints: {
        '991': {
            fixedWidth: 66,
            fixedHeight: 40,
        }
    }
}).mount();

// sync the thumbnails slider as a target of primary slider.
primarySlider.sync(thumbnailSlider).mount();

