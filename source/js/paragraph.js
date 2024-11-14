const paragraphWrapper = document.querySelector('.about__wrapper');
const textParagraph = 'В зале расположены отдельная зона для Crossfit и кардио-зона с 40 тренажёрами. Также в фитнес центре есть несколько оборудованных залов для различных видов групповых занятий.';
const paragraph = document.createElement('p');

function createParagraph() {
  paragraph.style.display = 'block';
  paragraph.textContent = textParagraph;
  paragraphWrapper.appendChild(paragraph);
}


if (window.innerWidth >= 1366) {
  createParagraph(); // при изменении размеров браузера
} else {
  paragraphWrapper.removeChild(paragraph);
}

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const debouncedResize = debounce(() => {
  if (window.innerWidth >= 1366) {
    createParagraph();
  } else {
    paragraphWrapper.removeChild(paragraph);
  }
}, 20);

window.addEventListener('resize', debouncedResize);
