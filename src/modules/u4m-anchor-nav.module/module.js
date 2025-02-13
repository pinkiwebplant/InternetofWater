function heightUpdate() {
  var getOuterHeight = $(".anchor_nav_inner").outerHeight(); // Correct method name
  $(".anchor_nav_outer.sticky_navbar").css({
    "min-height": getOuterHeight + "px",
  }); // Correct syntax
}

heightUpdate();

$(window).scroll(function () {
  var getTop = $(".anchor_nav_outer.sticky_navbar").offset().top;
  var getOffset = getTop - 90;
  if ($(this).scrollTop() > getOffset) {
    $(".anchor_nav_outer.sticky_navbar").addClass("fixedNav");
  } else {
    $(".anchor_nav_outer.sticky_navbar").removeClass("fixedNav");
  }
});
