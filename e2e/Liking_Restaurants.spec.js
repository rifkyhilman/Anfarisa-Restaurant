/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

const assert = require('assert');

Scenario('Liking one restaurant and cancel liked the restaurant. ', async ({ I }) => {
  I.seeElement('.restaurant-item__content__name a');

  const firstRestaurant = locate('.restaurant-item__content__name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('.like');
  I.click('.like');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content__name a');
  I.click(likedRestaurantTitle);

  // Unlike the restaurant
  I.seeElement('.like');
  I.click('.like');

  I.amOnPage('/#/favorite');
  I.see('There is no favorite restaurant yet', '.restaurants__list__not-found');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
