class CPriceRange extends HTMLElement {
    constructor() {
        super();

        this.minValue = this.querySelector("#min-value");
        this.maxValue = this.querySelector("#max-value");
        this.rangeFill = this.querySelector(".range-fill");
        this.inputElements = this.querySelectorAll("input");
        this.maxRange = parseInt(this.querySelector(".price-content").dataset.max);
    }

    connectedCallback() {
        // Add an event listener to each input element
        this.inputElements.forEach((element) => {
            element.addEventListener("input", this.validateRange.bind(this));
        });

        // Initial call to validateRange
        this.validateRange();
    }


    validateRange() {
        let minPrice = parseInt(this.inputElements[0].value);
        let maxPrice = parseInt(this.inputElements[1].value);

        // Swap the values if minPrice is greater than maxPrice
        if (minPrice > maxPrice) {
            let tempValue = maxPrice;
            maxPrice = minPrice;
            minPrice = tempValue;
            this.inputElements[0].value = minPrice;
            this.inputElements[1].value = maxPrice;
        }
    
        // Calculate the percentage position for min and max values
        const minPercentage = ((minPrice) / this.maxRange) * 100;
        const maxPercentage = ((maxPrice) / this.maxRange) * 100;
    
        // Set the position and width of the fill color element to represent the selected range
        this.rangeFill.style.left = minPercentage + "%";
        this.rangeFill.style.width = maxPercentage - minPercentage + "%";
    
        // Update the displayed min and max values
        this.minValue.innerHTML = "CHF" + ' ' + minPrice;
        this.maxValue.innerHTML = "CHF" + ' ' + maxPrice;
    }

}

if (!customElements.get('c-price-range')) {
    customElements.define('c-price-range', CPriceRange)
  }
  