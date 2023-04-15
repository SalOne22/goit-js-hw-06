function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.getElementById('boxes');
const controlsEl = document.getElementById('controls');

const numberOfBoxesEl = controlsEl.querySelector('input');
const createBoxesButtonEl = controlsEl.querySelector('button[data-create]');
const destroyBoxesButtonEl = controlsEl.querySelector('button[data-destroy]');

createBoxesButtonEl.addEventListener('click', onCreateBoxes);
destroyBoxesButtonEl.addEventListener('click', destroyBoxes);

function onCreateBoxes() {
  const numberOfBoxes = Number.parseInt(numberOfBoxesEl.value);
  createBoxes(numberOfBoxes);
}

let size = 30;
function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');

    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;

    fragment.appendChild(boxEl);
    size += 10;
  }

  boxesEl.appendChild(fragment);
}

function destroyBoxes() {
  boxesEl.textContent = '';
  size = 30;
}
