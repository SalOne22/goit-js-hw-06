const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const fragment = document.createDocumentFragment();

const ingredientsItemEls = ingredients.map((ingredient) => {
  const ingredientNode = document.createElement('li');

  ingredientNode.textContent = ingredient;
  ingredientNode.classList.add('item');

  return ingredientNode;
});

const ingredientsEl = document.getElementById('ingredients');

ingredientsEl.append(...ingredientsItemEls);
