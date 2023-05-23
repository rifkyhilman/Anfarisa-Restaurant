class RestaurantDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id= "content" class="restaurants">
            <div class="restaurants__content">
                <h1 class="restaurants__content__label">Detail of Restaurant</h1>
                <div id="likeButtonContainer" class="likeBtn"></div>
                <div id="restaurant" class="restaurant"></div>
            </div>
        </section>
      `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
