function generateReview(arr) {
  let res = '';
  for (let i = 0; i < arr.length; i += 1) {
    res += `
    <div class="restaurant__reviews__card">
    <h3>${arr[i].name}</h3>
      <div class="restaurant__reviews__card__content">
        <p>${arr[i].review}</p>
      </div>
      <div class="restaurant__reviews__card__date">
        <p> Date of riview : ${arr[i].date}</p>
      </div>
    </div>`;
  }
  return res;
}

function generateFoodAndDrink(arr) {
  let res = '';
  for (let i = 0; i < arr.length; i += 1) {
    res += `<li>${arr[i].name}</li>`;
  }
  return `<ul>${res}</ul>`;
}

function generateCategories(arr) {
  let res = '';
  for (let i = 0; i < arr.length; i += 1) {
    res += `<p>${arr[i].name}</p>`;
  }
  return `<div class="restaurant__title__categorie_"><p>(</p>${res}<p>)</p></div>`;
}

export {
  generateReview, generateFoodAndDrink, generateCategories,
};
