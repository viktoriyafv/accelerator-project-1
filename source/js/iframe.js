const ButtonVideo = document.querySelector('.about__button');
const WrapperVideo = document.querySelector('.about__wrapper-video');
const aboutVideo = document.querySelector('.about__video');
const isEscapeKey = (evt) => evt.key === 'Escape';
const iframe = document.createElement('iframe');

ButtonVideo.addEventListener('click', () => {
  iframe.src = 'https://www.youtube.com/watch?v=9TZXsZItgdw';
  iframe.loading = 'lazy';
  iframe.style.display = 'block';
  iframe.style.frameborder = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.inset = '0';
  iframe.style.margin = 'auto';
  iframe.style.zIndex = '200';

  aboutVideo.style.display = 'none';
  ButtonVideo.style.display = 'none';
  return WrapperVideo.appendChild(iframe);
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    iframe.remove();
    aboutVideo.style.display = 'block';
    ButtonVideo.style.display = 'block';
  }
});
