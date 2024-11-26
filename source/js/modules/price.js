const tabsButtons = document.querySelectorAll('.price__button');

const priceTabs = () => {

  tabsButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const prevActiveItem = document.querySelector('.content.content--active');
      const prevActiveButton = document.querySelector('.price__button.price__button--active');

      if (prevActiveButton) {
        prevActiveButton.classList.remove('price__button--active');
      }

      if (prevActiveItem) {

        prevActiveItem.classList.remove('content--active');
      }
      const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
      const nextActiveItem = document.querySelector(nextActiveItemId);

      btn.classList.add('price__button--active');
      nextActiveItem.classList.add('content--active');
    });
  });
};

export { priceTabs };
