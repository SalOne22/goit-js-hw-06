const categoriesItemEls = document.querySelectorAll('#categories > .item');

console.log('Number of categories:', categoriesItemEls.length);

categoriesItemEls.forEach((categoryEl) => {
  const categoryTitleEl = categoryEl.querySelector('h2');
  const categoryItemEls = categoryEl.getElementsByTagName('li');

  console.log('Category:', categoryTitleEl.textContent);
  console.log('Elements:', categoryItemEls.length);
});
