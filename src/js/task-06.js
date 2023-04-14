const validationInputEl = document.getElementById('validation-input');

validationInputEl.addEventListener('blur', onInputBlur);

function onInputBlur(evt) {
  const currentTarget = evt.currentTarget;

  const validationLength = Number.parseInt(currentTarget.dataset.length);
  const currentValueLength = currentTarget.value.length;

  currentTarget.classList.remove('valid', 'invalid');
  currentTarget.classList.add(
    currentValueLength === validationLength ? 'valid' : 'invalid'
  );
}
