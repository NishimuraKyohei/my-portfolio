import $ from 'jquery'

export default function animateSplash() {
  $(window).on('load',function() {
    $("#p-splash").delay(1500).fadeOut('show');
    $("#p-splash__logo").delay(1200).fadeOut('show');
  });
}