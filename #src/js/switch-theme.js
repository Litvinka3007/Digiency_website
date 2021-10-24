if (!localStorage.theme) localStorage.theme = 'light';
document.body.className = localStorage.theme;

if (document.body.classList.contains('dark')) {
  document.getElementById('logo').src = './img/logo_white.svg';
  document.getElementById('theme-icon').src = './img/icons/light-theme.svg';
  document.getElementById('insta-main-icon').src = './img/icons/socials/dark-mode/instagram.svg';
  document.getElementById('twitter-main-icon').src = './img/icons/socials/dark-mode/twitter.svg';
  document.getElementById('skype-main-icon').src = './img/icons/socials/dark-mode/skype.svg';
} else {
  document.getElementById('logo').src = './img/logo.svg';
  document.getElementById('theme-icon').src = './img/icons/dark-theme.svg';
  document.getElementById('insta-main-icon').src = './img/icons/socials/instagram.png';
  document.getElementById('twitter-main-icon').src = './img/icons/socials/twitter.png';
  document.getElementById('skype-main-icon').src = './img/icons/socials/skype.png';
}

toggleThemeBtn.onclick = () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    document.getElementById('logo').src = './img/logo_white.svg';
    document.getElementById('theme-icon').src = './img/icons/light-theme.svg';
    document.getElementById('insta-main-icon').src = './img/icons/socials/dark-mode/instagram.svg';
    document.getElementById('twitter-main-icon').src = './img/icons/socials/dark-mode/twitter.svg';
    document.getElementById('skype-main-icon').src = './img/icons/socials/dark-mode/skype.svg';
  } else {
    document.getElementById('logo').src = './img/logo.svg';
    document.getElementById('theme-icon').src = './img/icons/dark-theme.svg';
    document.getElementById('insta-main-icon').src = './img/icons/socials/instagram.png';
    document.getElementById('twitter-main-icon').src = './img/icons/socials/twitter.png';
    document.getElementById('skype-main-icon').src = './img/icons/socials/skype.png';
  }

  localStorage.theme = document.body.className || 'light';
}