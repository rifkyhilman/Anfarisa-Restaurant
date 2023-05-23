import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createLoadingTemplate,
  createErrorTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import postDataReview from '../../utils/add-button-initiator';

const Detail = {
  async render() {
    return `
    <restaurant-hero></restaurant-hero>
    <restaurant-detail></restaurant-detail>
    `;
  },

  async afterRender() {
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    const restaurantContainer = document.querySelector('#restaurant');
    let view = createLoadingTemplate();
    restaurantContainer.innerHTML = view;
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurants = await RestaurantDbSource.detailRestaurant(url.id);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurants.id,
          name: restaurants.name,
          city: restaurants.city,
          pictureId: restaurants.pictureId,
          rating: restaurants.rating,
          description: restaurants.description,
        },
      });
      view = createRestaurantDetailTemplate(restaurants);
      likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();
      restaurantContainer.innerHTML = view;
      postDataReview.renderForm(url.id);
    } catch (error) {
      view = createErrorTemplate();
      restaurantContainer.innerHTML = view;
    }
  },
};

export default Detail;
