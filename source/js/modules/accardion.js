const accordeonPanelHeading = document.querySelectorAll('.faq__item');

const accordionCLicked = () => {
  for (let i = 0; i < accordeonPanelHeading.length; i++) {
    accordeonPanelHeading[i].addEventListener('click', () => {
      accordeonPanelHeading[i].classList.toggle('faq__item--active');
    });
  }
};

export { accordionCLicked };
