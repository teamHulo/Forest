class FSlider extends HTMLElement {
    constructor() {
        super();
        console.log('F_SLIDER')
    }

    connectedCallback() {
        this.slider = new Flickity(this, {
            cellAlign: 'center',
            contain: false,
            wrapAround: true,
            pageDots: false,
            groupCells: 5
            // prevNextButtons: false
        })
    }

}

if (!customElements.get('f-slider')) {
    customElements.define('f-slider', FSlider)
  }
  