import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
  createRestaurantItemTemplate,
  createErrorTemplate,
  createLoadingTemplate,
  createZeroRestaurantTemplate,
} from '../templates/template-creator';

const FavoriteRestaurant = {
  async render() {
    return `
    <restaurant-hero></restaurant-hero>
    <restaurant-favorite></restaurant-favorite>
    `;
  },

  async afterRender() {
    let view = createLoadingTemplate();
    let item = '';
    const restaurantContainer = document.querySelector('#restaurants__list');
    restaurantContainer.innerHTML = view;
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      restaurants.forEach((restaurant) => {
        item += createRestaurantItemTemplate(restaurant);
      });
      if (restaurants.length === 0) {
        view = createZeroRestaurantTemplate();
      } else {
        view = `<div id="restaurants" class="restaurants__list__item">${item}</div>`;
      }
      restaurantContainer.innerHTML = view;
    } catch (error) {
      view = createErrorTemplate();
      restaurantContainer.innerHTML = view;
    }
  },
};

export default FavoriteRestaurant;
