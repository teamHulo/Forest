class SSlider extends HTMLElement {
    constructor() {
        super();
        console.log('S_SLIDER');
        console.log(JSON.parse(this.querySelector('.config').textContent));
        this.config = JSON.parse(this.querySelector('.config').textContent);
    }

    connectedCallback() {
        this.slider = new Swiper(this, this.config);
    }

}

if (!customElements.get('s-slider')) {
    customElements.define('s-slider', SSlider)
  }
  