class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="app-bar">
      <div class="app-bar__brand">
        <h1>Anfarisa</h1>
      </div>
        <button id="hamburgerButton" class="app-bar__menu">
          <span id="hamburgerIcon" class="material-symbols-outlined">menu</span>
        </button>
      <nav id="navigationDrawer" class="nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="/">Home</a></li>
          <li class="nav__item"><a href="#/favorite">Favorite</a></li>
          <li class="nav__item"><a href="https://github.com/rifkyhilman">About Us</a></li>
        </ul>
      </nav>
    </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
