const ticketSeasons = Array.from(document.querySelectorAll('.ticketSeason__list'));
const priceButtons = Array.from(document.querySelectorAll('.price__button'));
let priceIndex = 0;


priceButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    priceIndex = index;
    for (let i = 0; i < priceButtons.length; i++) {
      if (i === priceIndex) {
        priceButtons[i].classList.add('price__button--active');
        ticketSeasons[i].classList.remove('visually-hidden');
      } else {
        priceButtons[i].classList.remove('price__button--active');
        ticketSeasons[i].classList.add('visually-hidden');
      }
    }
  });
});
