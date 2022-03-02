/* eslint-disable complexity */
const buttonLogin = document.getElementById('login');
const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const sbtButton = document.getElementById('submit-btn');
const agreeCheck = document.getElementById('agreement');
const contador = document.getElementById('counter');
const textArea = document.getElementById('textarea');

function emailValidation(event) {
  event.preventDefault();
  /* referencia: https://desenvolvimentoparaweb.com/javascript/every-some-find-includes-javascript/ */
  if (email.value.includes('tryber@teste.com') && senha.value.includes('123456')) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

function validationButton() {
  if (agreeCheck.checked === true) {
    sbtButton.disabled = false;
  } else {
    sbtButton.disabled = true;
  }
}

function cont() {
  const resultado = 500 - textArea.value.length;
  contador.innerText = resultado;
}

textArea.addEventListener('keyup', cont);

buttonLogin.addEventListener('click', emailValidation);

agreeCheck.addEventListener('click', validationButton);
