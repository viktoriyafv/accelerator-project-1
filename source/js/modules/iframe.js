const buttonVideo = document.querySelector('.about__button');
const wrapperVideo = document.querySelector('.about__wrapper-video');
const aboutVideo = document.querySelector('.about__video');
const isEscapeKey = (evt) => evt.key === 'Escape';

const videoCreate = () => {

  const iframe = document.createElement('iframe');

  buttonVideo.addEventListener('click', () => {
    iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?si=1fb4CYxLTVY_iqBF';
    iframe.loading = 'lazy';
    iframe.style.display = 'block';
    iframe.style.frameborder = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.inset = '0';
    iframe.style.margin = 'auto';
    iframe.style.zIndex = '200';
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('allowfullscreen', 'true');

    aboutVideo.style.display = 'none';
    buttonVideo.style.display = 'none';
    return wrapperVideo.appendChild(iframe);
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      iframe.remove();
      aboutVideo.style.display = 'block';
      buttonVideo.style.display = 'block';
    }
  });
};

export { videoCreate };
