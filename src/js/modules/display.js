import scrollreveal  from "scrollreveal";

export default function animateDisplay() {
  scrollreveal().reveal('.p-concept__item');
  scrollreveal().reveal('.p-service__item');
  scrollreveal().reveal('.p-slider__list');
  scrollreveal().reveal('.p-contact__snsItem');

  scrollreveal().reveal('.p-concept__item', {
  duration: 1000,
  scale: 0.1,
  reset: true
  });
  scrollreveal().reveal('.p-service__item', {
  duration: 1000,
  scale: 0.1,
  reset: true
  });
  scrollreveal().reveal('.p-slider__list', {
  duration: 1000,
  scale: 0.1,
  reset: true
  });
  scrollreveal().reveal('.p-contact__snsItem', {
  duration: 1000,
  scale: 0.1,
  reset: true
  });
}
