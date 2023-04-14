const formEl = document.getElementsByClassName('login-form')[0];

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (!email.value || !password.value) {
    alert('All fields must be filled!');
    return;
  }

  const userData = { email: email.value, password: password.value };
  console.log('🚀 ~ file: task-08.js:19 ~ onFormSubmit ~ userData:', userData);

  evt.currentTarget.reset();
}
