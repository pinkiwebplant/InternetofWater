// Smooth
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    if (document.querySelector(this.getAttribute("href"))) {
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  });
});
// Load
window.addEventListener("load", function () {
  document.body.classList.add("window-loaded");
  //
  AOS.init({
    duration: 1000,
    once: true,
    disable: "mobile",
  });
});
// Scroll
window.addEventListener("scroll", function () {
  const html = document.documentElement;
  const top = html.scrollTop;
  if (top > 100) {
    document.body.classList.add("page-scrolled");
  } else {
    document.body.classList.remove("page-scrolled");
  }
});

var images = document.querySelectorAll("img.hs-image-widget");
Array.prototype.slice.call(images).forEach(function (img, index) {
  if (images[index].hasAttribute("src")) {
    images[index].setAttribute(
      "src",
      images[index].getAttribute("src").split("?")[0]
    );
  }
  var logoSrcSet = img.getAttribute("srcset");
  if (logoSrcSet) {
    var srcsetArr = logoSrcSet.split(", ");
    var updatedSrcSetArr = [];
    srcsetArr.forEach(function (src) {
      updatedSrcSetArr.push(src.split("?")[0]);
    });
    img.setAttribute("srcset", updatedSrcSetArr.join(", "));
  }
});

$(".body_wrapper").attr("id", "top");
var getHeightNavbar = $(".anchor_nav_outer.sticky_navbar .anchor_nav_inner");

$(function () {
  $(".anchor_nav_outer a[href*='#']:not([href='#'])").click(function () {
    var windowWidth = window.innerWidth;
    // 		console.log('Window width:', windowWidth);

    var getHeightNavbarHeight = $(
      ".anchor_nav_outer.sticky_navbar .anchor_nav_inner"
    ).outerHeight();
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      var targetOffset = target.offset().top;

      if (windowWidth > 991) {
        if (getHeightNavbar) {
          var newoffset = targetOffset - getHeightNavbarHeight - 90;
          // 					console.log('newoffset getHeightNavbarHeight',newoffset, getHeightNavbarHeight, getHeightNavbar)
        } else {
          var newoffset = targetOffset - 90;
          // 					console.log('newoffset',newoffset)
        }
        // 				console.log('windowWidth',windowWidth)
      } else {
        var newoffset = targetOffset;
        // 						console.log('windowWidth else',windowWidth)
      }

      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: newoffset,
          },
          1000
        );
        return false;
      }
    }
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 41) {
    document.body.classList.add("fixed-header");
  } else {
    document.body.classList.remove("fixed-header");
  }
});

const searchInput = document.querySelector(
  ".et_search_outer form input[type=text]"
);
const searchButton = document.getElementById("et_top_search");

if (searchInput && searchButton) {
  searchButton.addEventListener("click", function (b) {
    document.body.classList.toggle("search-open");
    setTimeout(function () {
      searchInput.focus();
    }, 400);
    b.stopPropagation();
  });
}

// Handle click on body and .et_search_outer form button to remove 'search-open' class
document.body.addEventListener("click", function () {
  document.body.classList.remove("search-open");
});
document
  .querySelector(".et_search_outer form button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.remove("search-open");
  });

// Prevent click propagation on #main-header
document.getElementById("main-header").addEventListener("click", function (b) {
  b.stopPropagation();
});

document
  .querySelector(".mobile_menu_bar_toggle")
  .addEventListener("click", function () {
    document.documentElement.classList.toggle("menu-open");
  });

document.querySelector("#et_top_search").addEventListener("click", function () {
  document.documentElement.classList.remove("menu-open");
});

$(".modal_trigger").click(function () {
  var getId = $(this).attr("data-modal");
  $("[data-modal-id='" + getId + "']").addClass("activeModal");
});

$(".close_content_modal").click(function () {
  $(this).parents().removeClass("activeModal");
});
