const docEl = document.documentElement;
const svgIcon: HTMLLinkElement = document.querySelector('.favicon');
const media = window.matchMedia('(prefers-color-scheme: dark)');
const button = document.querySelector('.theme-toggle');

type Theme = 'light' | 'dark';
let theme: Theme = media.matches ? 'dark' : 'light';

if (
  typeof window.localStorage !== 'undefined'
  && window.localStorage.getItem('theme')
) {
  theme = window.localStorage.getItem('theme') as Theme;
}

const toggleTheme = (theme: 'light' | 'dark') => {
  const method = theme === 'light' ? 'remove' : 'add';

  docEl.classList[method]('dark');
  svgIcon.href = theme === 'light' ? '/icon-light.svg' : '/icon-dark.svg';
  button.classList[method]('theme-toggle--toggled');
  window.localStorage.setItem('theme', theme);
};

if (theme === 'dark') {
  button.classList.add('theme-toggle--toggled');
}

button.addEventListener('click', () => {
  const theme = docEl.classList.contains('dark') ? 'light' : 'dark';
  toggleTheme(theme);
});

window.addEventListener('storage', () => {
  const theme = window.localStorage.getItem('theme') as Theme;
  toggleTheme(theme);
});

media.addEventListener('change', () => {
  const theme = media.matches ? 'dark' : 'light';
  toggleTheme(theme);
});

toggleTheme(theme);
