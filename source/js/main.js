import { VideoCreate } from './modules/iframe';
import { debouncedResize } from './modules/paragraph';
import { priceTabs } from './modules/price';
import { faqTabs } from './modules/tabs';
import { validForm } from './modules/form';
import Swiper from '../vendor/swiper/swiper-bundle';
import '../sass/vendor/swiper-bundle.css';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.juri__swiper', {
  loop: true,
  modules: [Navigation],
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
  slideClass: 'juri__item',
  wrapperClass: 'swiper__wrapper',
  breakpoints: {
    768: {
      spaceBetween: 40,
    },
  }
});

const swiperReview = new Swiper('.reviews__slider', {
  loop: false,
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
  slideClass: 'reviews__item',
  wrapperClass: 'reviews__list',
  breakpoints: {
    768: {
      spaceBetween: 100,
    },
    1366: {
      spaceBetween: 120,
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    VideoCreate();
    window.addEventListener('resize', debouncedResize);
    window.addEventListener('loading', debouncedResize);
    priceTabs();
    faqTabs();
    swiper.init();
    swiperReview.init();
    validForm();
  });
});
