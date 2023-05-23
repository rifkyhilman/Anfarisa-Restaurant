import { createFormTemplate } from '../views/templates/template-creator';
import RestaurantDbSource from '../data/restaurantdb-source';

const postDataReview = {
  async renderForm(id) {
    const addButton = document.querySelector('#addButton');
    const formPost = document.querySelector('.addForm');

    if (navigator.onLine) {
      console.log('online');

      addButton.addEventListener('click', () => {
        formPost.innerHTML = createFormTemplate();
        this.afterRenderForm(id);
      });
    } else {
      console.log('offline');

      addButton.addEventListener('click', () => {
        alert('Unable to add review in offline mode !');
      });
    }
  },

  async afterRenderForm(id) {
    const submits = document.querySelector('#submit');
    const renderCard = document.querySelector('#restaurant__reviews__content');
    submits.addEventListener('click', async (event) => {
      event.preventDefault();
      const nama = document.getElementById('fname').value;
      const review = document.getElementById('freview').value;
      const data = {
        id: `${id}`,
        name: `${nama}`,
        review: `${review}`,
      };
      const dataReview = await RestaurantDbSource.addReviewRestaurant(data);
      this.resetValue();
      const cardReview = dataReview.map((dataob) => {
        const templateCard = `
        <div class="restaurant__reviews__card">
        <h3>${dataob.name}</h3>
          <div class="restaurant__reviews__card__content">
            <p>${dataob.review}</p>
          </div>
          <div class="restaurant__reviews__card__date">
            <p> Date of riview : ${dataob.date}</p>
          </div>
        </div>
        `;
        return templateCard;
      });
      renderCard.innerHTML = cardReview;
    });
  },

  resetValue() {
    alert('The review has been successfully added !!');
    document.getElementById('fname').value = '';
    document.getElementById('freview').value = '';
  },

};

export default postDataReview;
