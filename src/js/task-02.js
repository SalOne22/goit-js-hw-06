const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const fragment = document.createDocumentFragment();

const ingredientsItemEls = ingredients.forEach((ingredient) => {
  const ingredientNode = document.createElement('li');

  ingredientNode.textContent = ingredient;
  ingredientNode.classList.add('item');

  fragment.appendChild(ingredientNode);
});

const ingredientsEl = document.getElementById('ingredients');

ingredientsEl.appendChild(fragment);
