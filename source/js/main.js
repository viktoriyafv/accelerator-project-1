import {swiper } from './modules/slider';
import {validForm} from './modules/form';


window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    validForm();
    swiper();
  });
});
