const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
    toggleBtn.textContent = ' Light Mode';
  } else {
    toggleBtn.textContent = 'Dark Mode';
  }
});
