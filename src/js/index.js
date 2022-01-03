import $ from 'jquery'
import './modules/slick.min'
import router from './modules/Router'
import animateSplash from './modules/splash'
import animateHeader from './modules/header'
import animateHamburgerNav from './modules/HamburgerNav'
import animateSlider from './modules/slider'
import animatePageLink from './modules/pageLink'
import '../scss/app.scss'

$(() => {
  new router()
  const hoge = 'hoge'
  console.log(hoge)
})


animateSplash();
animateHeader();
animatePageLink();
animateHamburgerNav();
animateSlider();








