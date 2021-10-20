if (!localStorage.theme) localStorage.theme = 'light';
document.body.className = localStorage.theme;

if (document.body.classList.contains('dark')) {
  document.getElementById('logo').src = './img/logo_white.svg';
  document.getElementById('theme-icon').src = './img/icons/light-theme.svg';
} else {
  document.getElementById('logo').src = './img/logo.svg';
  document.getElementById('theme-icon').src = './img/icons/dark-theme.svg';
}

toggleThemeBtn.onclick = () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    document.getElementById('logo').src = './img/logo_white.svg';
    document.getElementById('theme-icon').src = './img/icons/light-theme.svg';
  } else {
    document.getElementById('logo').src = './img/logo.svg';
    document.getElementById('theme-icon').src = './img/icons/dark-theme.svg';
  }

  localStorage.theme = document.body.className || 'light';
}