import '../scss/main.scss';

const main = document.querySelector('[data-js="main"]');

main.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();
  validateEmail(evt.target);
}

function validateEmail(form) {
  const inputEmail = form.querySelector('[data-js="input-email"]');
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!regex.test(inputEmail.value.trim())) {
    inputEmail.classList.add('invalid');
    inputEmail.setAttribute('aria-invalid', 'true');
    inputEmail.setAttribute('aria-errormessage', 'Please check your email');
    return;
  }

  inputEmail.classList.remove('invalid');
  inputEmail.removeAttribute('aria-invalid');
  inputEmail.removeAttribute('aria-errormessage');
}
