const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const form = document.getElementById('loginForm');

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
  }
};

const toggleTheme = () => {
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

loadTheme();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email');
  const password = document.getElementById('password');

  if (!email.value.trim() || !password.value.trim()) {
    alert('Por favor, preencha e-mail e senha.');
    return;
  }

  if (!email.checkValidity()) {
    alert('Informe um e-mail válido.');
    email.focus();
    return;
  }

  alert('Login realizado com sucesso!');
  form.reset();
});
