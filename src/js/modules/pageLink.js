import $ from 'jquery'

export default function animatePageLink() {
  $('#p-pageLink a[href*="#"]').on('click', () => {
    const elmHash = $(this).attr('href');
    const pos = $(elmHash).offset().top;
    $('body,html').animate({scrollTop:pos}, 500);
    return false;
  });
}