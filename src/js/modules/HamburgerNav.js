import $ from 'jquery'

export default function animateHamburgerNav() {
  $(".p-hamburger").click(function () {
    $(this).toggleClass('active');
      $("#p-nav").toggleClass('panelactive');
      $(".p-nav__bg").toggleClass('circleactive');
  });

  $("#p-nav a").click(function () {
    $(".p-hamburger").removeClass('active');
    $("#p-nav").removeClass('panelactive');
    $(".p-nav__bg").removeClass('circleactive');
  });
}