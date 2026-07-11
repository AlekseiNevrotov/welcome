const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  const links = document.querySelectorAll('.link');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      if (link.classList.contains('loading')) return;
      e.preventDefault();
      sessionStorage.setItem('elazar-loading-href', link.href);
      links.forEach(l => l.classList.remove('loading'));
      link.classList.add('loading');
      setTimeout(() => {
        window.location.href = link.href;
      }, 400);
    });
  });
  const resetLoadingState = () => {
    sessionStorage.removeItem('elazar-loading-href');
    links.forEach(link => link.classList.remove('loading'));
  };
  window.addEventListener('pageshow', resetLoadingState);
  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') resetLoadingState();
  });
  window.addEventListener('load', resetLoadingState);
}
document.fonts.ready.then(function() {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('hide');
  document.getElementById('main-content').style.display = 'block';
  setTimeout(() => {
    preloader.style.display = 'none';
    const logo = document.querySelector('.logo-text');
    logo.classList.add('glitch');
    setTimeout(() => {
      logo.classList.remove('glitch');
    }, 600);
  }, 600);
});
window.addEventListener('DOMContentLoaded', () => {
      const h1 = document.getElementById('fullname');
      const text = h1.textContent;
      const words = text.split(' ');
      let surname = words[0];
      const letterIndex = surname.indexOf('е');
      if (letterIndex !== -1) {
        let letters = surname.split('');
        function updateSurname(withAccent) {
          letters[letterIndex] = withAccent ? 'é' : 'е';
          words[0] = letters.join('');
          h1.textContent = words.join(' ');
        }
        updateSurname(false);
        setTimeout(() => {
          updateSurname(true);
        }, 3000);
        setTimeout(() => {
          updateSurname(false);
        }, 6000);
      }
    });