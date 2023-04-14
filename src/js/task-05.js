const nameInputEl = document.getElementById('name-input');

nameInputEl.addEventListener('input', onNameChange);

const nameOutputEl = document.getElementById('name-output');

const defaultValue = nameOutputEl.textContent;

function onNameChange(evt) {
  const currentValue = evt.target.value;
  if (!currentValue) {
    nameOutputEl.textContent = defaultValue;
    return;
  }

  nameOutputEl.textContent = currentValue;
}
