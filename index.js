const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error-message');
const errorIcon = document.getElementById('error-icon');

form.addEventListener('submit', (e) => {
  const isValid = email.validity.valid;

  if(isValid) email.value = '';

  if (!isValid) e.preventDefault();

  error.style.display = isValid ? 'none' : 'block';
  errorIcon.style.display = isValid ? 'none' : 'block';
});
