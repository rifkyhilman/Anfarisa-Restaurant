class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div id="restaurants__list"></div>
          `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
