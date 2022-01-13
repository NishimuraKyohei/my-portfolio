import $ from 'jquery'

export default function animateSplash() {
  $(window).on('load',() => {
    $("#p-splash").delay(1500).fadeOut('slow');
    $("#p-splash__logo").delay(1200).fadeOut('slow');
  });
}