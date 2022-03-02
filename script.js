/* eslint-disable complexity */
const buttonLogin = document.getElementById('login');
const email = document.querySelector('#email');
const senha = document.querySelector('#password');
// const textarea = document.getElementById('textarea');
const theAmount = document.getElementById('theAmount');

function emailValidation(event) {
  event.preventDefault();
  /* referencia: https://desenvolvimentoparaweb.com/javascript/every-some-find-includes-javascript/ */
  if (email.value.includes('tryber@teste.com') && senha.value.includes('123456')) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', emailValidation);

theAmount.innerHTML = 500;

// function charCount() {
//   const maxLength = textarea.getAttribute('maxlength');
//   const currentLenght = textarea.value.length;
//   theAmount.innerHTML = maxLength - currentLenght;
// }
