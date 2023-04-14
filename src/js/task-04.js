const counterEl = document.getElementById('counter');

const incrementButtonEl = counterEl.querySelector(
  'button[data-action="increment"]'
);
const decrementButtonEl = counterEl.querySelector(
  'button[data-action="decrement"]'
);

incrementButtonEl.addEventListener('click', onIncrementClick);
decrementButtonEl.addEventListener('click', onDecrementClick);

const valueEl = document.getElementById('value');
let counterValue = 0;

function onIncrementClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

function onDecrementClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
