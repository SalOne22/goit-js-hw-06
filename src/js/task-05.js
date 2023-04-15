const nameInputEl = document.getElementById('name-input');
const nameOutputEl = document.getElementById('name-output');

nameInputEl.addEventListener('input', onNameChange);

const defaultValue = nameOutputEl.textContent;

function onNameChange(evt) {
  const currentValue = evt.target.value.trim();
  if (!currentValue) {
    nameOutputEl.textContent = defaultValue;
    return;
  }

  nameOutputEl.textContent = currentValue;
}
