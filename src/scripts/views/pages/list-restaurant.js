import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate, createErrorTemplate, createLoadingTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
    <restaurant-hero></restaurant-hero>
    <restaurant-list></restaurant-list>
    `;
  },

  async afterRender() {
    let view = createLoadingTemplate();
    let item = '';
    const restaurantContainer = document.querySelector('#restaurants__list');
    restaurantContainer.innerHTML = view;
    try {
      const restaurants = await RestaurantDbSource.listRestaurant();
      restaurants.forEach((restaurant) => {
        item += createRestaurantItemTemplate(restaurant);
      });
      view = `<div id="restaurants" class="restaurants__list__item">${item}</div>`;
      restaurantContainer.innerHTML = view;
    } catch (error) {
      view = createErrorTemplate();
      restaurantContainer.innerHTML = view;
    }
  },
};

export default ListRestaurant;
