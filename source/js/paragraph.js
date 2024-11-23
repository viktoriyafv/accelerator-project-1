const paragraphWrapper = document.querySelector('.about__wrapper');
const textParagraph = 'В зале расположены отдельная зона для Crossfit и кардио-зона с 40 тренажёрами. Также в фитнес центре есть несколько оборудованных залов для различных видов групповых занятий.';
const paragraph = document.createElement('p');

function createParagraph() {
  paragraph.style.display = 'block';
  paragraph.textContent = textParagraph;
  paragraphWrapper.appendChild(paragraph);
}

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const debouncedResize = debounce((evt) => {

  if (window.innerWidth >= 1366) {
    createParagraph();
  } else {
    evt.preventDefault();

    if (paragraphWrapper.contains(paragraph)) {
      paragraphWrapper.removeChild(paragraph);
    }
  }
}, 2);

window.addEventListener('resize', debouncedResize);
window.addEventListener('loading', debouncedResize);
