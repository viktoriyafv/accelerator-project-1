import { VideoCreate } from './modules/iframe';
import { debouncedResize } from './modules/paragraph';
import { priceTabs } from './modules/price';
import { faqTabs } from './modules/tabs';
import { validForm } from './modules/form';
import Swiper from 'swiper';
import '../sass/vendor/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import { accordionCLicked } from './modules/accardion';

const swiper = new Swiper('.juri__swiper', {
  loop: true,
  modules: [Navigation],
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.juri__button--next',
    prevEl: '.juri__button--prev',
  },
  slideClass: 'juri__item',
  wrapperClass: 'juri__list',
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  }
});

const swiperReview = new Swiper('.reviews__swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  slideClass: 'reviews__item',
  wrapperClass: 'reviews__list',
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
    accordionCLicked();
  });
});
