/* eslint-disable complexity */
const buttonLogin = document.getElementById('login');
const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const sbtButton = document.getElementById('submit-btn');
const agreeCheck = document.getElementById('agreement');
const contador = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const form = document.getElementsByTagName('form')[1];

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

function makeElement(element, escrito) {
  const newElement = document.createElement(element);
  newElement.innerText = escrito;
  return newElement;
}

function makeSubjects() {
  const subjects = document.querySelectorAll('input[class="subject"]');
  let string = '';
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[5].checked) {
      string += `${subjects[index].value}`;
    } else if (subjects[index].checked) {
      string += `${subjects[index].value}, `;
    }
  }
  return string;
}

function informations() {
  const nome = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const email2 = document.getElementById('input-email');
  const house = document.getElementById('house').value;
  // referencia: https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
  const family = document.querySelector('input[name="family"]:checked').value;
  const textSub = makeSubjects();
  const rate = document.querySelector('input[name="rate"]:checked').value;
  form.innerHTML = '';
  form.appendChild(makeElement('p', `Nome: ${nome.value} ${lastName.value}`));
  form.appendChild(makeElement('p', `Email: ${email2.value}`));
  form.appendChild(makeElement('p', `Casa: ${house}`));
  form.appendChild(makeElement('p', `Família: ${family}`));
  form.appendChild(makeElement('p', `Matérias: ${textSub}`));
  form.appendChild(makeElement('p', `Avaliação: ${rate}`));
  form.appendChild(makeElement('p', `Observações: ${textArea.value}`));
}

textArea.addEventListener('keyup', cont);

buttonLogin.addEventListener('click', emailValidation);

agreeCheck.addEventListener('click', validationButton);

sbtButton.addEventListener('click', informations);
