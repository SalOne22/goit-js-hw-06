const fontSizeControlEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

fontSizeControlEl.addEventListener('input', onFontSizeChange);

function onFontSizeChange(evt) {
  const currentValue = evt.target.value;
  textEl.style.fontSize = `${currentValue}px`;
}
