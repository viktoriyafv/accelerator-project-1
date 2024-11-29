const faqWrapper = document.querySelector('.faq__wrapper');
const faqButtons = faqWrapper.querySelectorAll('.faq__button');


const faqTabs = () => {
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Получаем предыдущую активную кнопку
      const prevActiveButton = faqWrapper.querySelector('.faq__button--current');
      // Получаем предыдущую активную вкладку
      const prevActiveItem = faqWrapper.querySelector('.faq__list--active');

      // Проверяем есть или нет предыдущая активная кнопка
      if (prevActiveButton) {
        //Удаляем класс _active у предыдущей кнопки если она есть
        prevActiveButton.classList.remove('faq__button--current');
      }

      // Проверяем есть или нет предыдущая активная вкладка
      if (prevActiveItem) {
        // Удаляем класс _active у предыдущей вкладки если она есть
        prevActiveItem.classList.remove('faq__list--active');
      }

      const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
      const nextActiveItem = faqWrapper.querySelector(nextActiveItemId);

      btn.classList.add('faq__button--current');
      nextActiveItem.classList.add('faq__list--active');
    });
  });
};

export { faqTabs };
