import './restaurant-item';

class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id= "content" class="restaurants">
            <div class="restaurants__content">
                <h1 class="restaurants__content__label">Explore Restaurant</h1>
                <restaurant-item></restaurant-item>
            </div>
        </section>
        `;
  }
}

customElements.define('restaurant-list', RestaurantList);
