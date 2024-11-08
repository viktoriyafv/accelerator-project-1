const ButtonVideo = document.querySelector('.about__button');
const isEscapeKey = (evt) => evt.key === 'Escape';
const iframe = document.createElement('iframe');

ButtonVideo.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/watch?v=9TZXsZItgdw';
  iframe.loading = 'lazy';
  iframe.style.display = 'block';
  iframe.style.width = '320';
  iframe.style.height = '70%';
  iframe.style.position = 'fixed';
  iframe.style.inset = '0';
  iframe.style.margin = 'auto';
  iframe.style.zIndex = '200';

  return document.body.appendChild(iframe);
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    iframe.remove();
  }
});
