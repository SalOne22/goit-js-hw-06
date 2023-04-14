const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItemEls = ingredients.map((ingredient) => {
  const ingredientNode = document.createElement('li');

  ingredientNode.textContent = ingredient;
  ingredientNode.classList.add('item');

  return ingredientNode;
});

const ingredientsEl = document.getElementById('ingredients');

// ingredientsEl.append(...ingredientsItemEls);

// Как оказалось этот метод быстрее на 37%
ingredientsItemEls.forEach((el) => ingredientsEl.appendChild(el));
