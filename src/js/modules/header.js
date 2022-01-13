import $ from 'jquery'

export default function animateHeader() {
  function FixedAnime() {
    const headerH = $('#header').outerHeight(true);
    const scroll = $(window).scrollTop();
    if(scroll >= headerH){
      $('#header').addClass('fixed');
    }else{
      $('#header').removeClass('fixed');
    }
  }

  $(window).on('scroll', () => {
    FixedAnime();
  });

  $(window).on('load',() => {
    FixedAnime();
  });
}