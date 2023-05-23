import './restaurant-item';

class RestaurantFavorite extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <section id= "content" class="restaurants">
              <div class="restaurants__content">
                  <h1 class="restaurants__content__label">Favorite Restaurant</h1>
                  <restaurant-item></restaurant-item>
              </div>
          </section>
          `;
  }
}

customElements.define('restaurant-favorite', RestaurantFavorite);
