// Smooth 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		if (document.querySelector(this.getAttribute('href'))) {
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				block: 'start',
				behavior: 'smooth'
			});
		}
	});
});
// Load
window.addEventListener('load', function () {
	document.body.classList.add('window-loaded');
	//
	AOS.init({
		duration: 1000,
		once: true,
		disable: 'mobile'
	});
});
// Scroll
window.addEventListener('scroll', function () {
	const html = document.documentElement;
	const top = html.scrollTop;
	if (top > 100) {
		document.body.classList.add('page-scrolled');
	}
	else {
		document.body.classList.remove('page-scrolled');
	}
});

const searchInput = document.querySelector('.et_search_outer form input[type=text]')
document.getElementById("et_top_search").addEventListener("click", function(b) {
	document.body.classList.toggle("search-open");
	setTimeout(function(){
		searchInput.focus()
	},400)
	b.stopPropagation();
});

// Handle click on body and .et_search_outer form button to remove 'search-open' class
document.body.addEventListener("click", function() {
	document.body.classList.remove("search-open");
});
document.querySelector(".et_search_outer form button").addEventListener("click", function(e) {
	e.preventDefault();
	document.body.classList.remove("search-open");
});

// Prevent click propagation on #main-header
document.getElementById("main-header").addEventListener("click", function(b) {
	b.stopPropagation();
});


document.querySelector(".mobile_menu_bar_toggle").addEventListener("click", function() {
	document.documentElement.classList.toggle("menu-open");
});

window.addEventListener('scroll', function() {
	if (window.scrollY >= 41) {
		document.body.classList.add('fixed-header');
	} else {
		document.body.classList.remove('fixed-header');
	}
});

var images = document.querySelectorAll('img.hs-image-widget');
Array.prototype.slice.call(images).forEach(function (img, index) {
	if (images[index].hasAttribute('src')) {
		images[index].setAttribute('src', images[index].getAttribute('src').split('?')[0]);
	}
	var logoSrcSet = img.getAttribute('srcset');
	if (logoSrcSet) {
		var srcsetArr = logoSrcSet.split(', ');
		var updatedSrcSetArr = [];
		srcsetArr.forEach(function (src) {
			updatedSrcSetArr.push(src.split('?')[0]);
		});
		img.setAttribute('srcset', updatedSrcSetArr.join(', '));
	}
});

$('.body_wrapper').attr('id','top');
$(function() {
	$("a[href*='#']:not([href='#'])").click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});