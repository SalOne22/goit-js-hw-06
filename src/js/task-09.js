function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButtonEl = document.getElementsByClassName('change-color')[0];
const colorTextEl = document.getElementsByClassName('color')[0];

changeColorButtonEl.addEventListener('click', onChangeColor);

function onChangeColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorTextEl.textContent = randomColor;
}
