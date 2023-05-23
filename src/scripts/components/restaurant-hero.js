class RestaurantHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero">
      <picture>
          <source media="(max-width: 600px)" srcset="./jumbotron/hero-image-small.jpg">
          <img 
          src='./jumbotron/hero-image-large.jpg' 
          alt="hero-image"></img>
      </picture>
      <div class="hero__inner">
          <h1 class="hero__title">For the love of delicious food</h1>
          <p class="hero__tagline">Come with family & feel the joy of mouthwartering food</p>
      </div>
    </section>
    `;
  }
}

customElements.define('restaurant-hero', RestaurantHero);
