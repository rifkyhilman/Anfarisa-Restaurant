/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('Add Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

const assert = require('assert');

Scenario('Add review the restaurant. ', async ({ I }) => {
  pause();

  I.seeElement('.restaurant-item__content__name a');

  const firstRestaurant = locate('.restaurant-item__content__name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('.restaurant__reviews__button');
  I.click('.restaurant__reviews__button');

  I.fillField('#fname', 'Guru Gembul');
  const newRestaurantReview = await I.grabTextFrom('.restaurant__reviews__form__col-75');
  I.pressKey('Enter');
  I.fillField('#freview', 'Mantap Sekali Tempatnya');
  I.click('.restaurant__reviews__form__button');

  I.seeElement('.restaurant__reviews__card h3', newRestaurantReview);

  assert.strictEqual(firstRestaurantTitl, newRestaurantReview);
});
