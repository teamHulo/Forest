/*class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector('details');
    this.content = this.mainDetailsToggle.querySelector('summary').nextElementSibling;
    this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));
    this.mainDetailsToggle.addEventListener('toggle', this.onToggle.bind(this));
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    });
  }

  onToggle() {
    if (!this.animations) this.animations = this.content.getAnimations();

    if (this.mainDetailsToggle.hasAttribute('open')) {
      this.animations.forEach((animation) => animation.play());
    } else {
      this.animations.forEach((animation) => animation.cancel());
    }
  }

  close() {
    this.mainDetailsToggle.removeAttribute('open');
    this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
  }
}*/
class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector('details');
    this.content = this.mainDetailsToggle.querySelector('summary').nextElementSibling;
    this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));
    this.mainDetailsToggle.addEventListener('toggle', this.onToggle.bind(this));
    this.header = this.mainDetailsToggle.querySelector('summary');
 
  }
  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    });
  }

  onToggle() {
    if (!this.animations) this.animations = this.content.getAnimations();

    if (this.mainDetailsToggle.hasAttribute('open')) {
      this.animations.forEach((animation) => animation.play());
    } else {
      this.animations.forEach((animation) => animation.cancel());
    }
  }
  
  close() {
    this.mainDetailsToggle.removeAttribute('open');
    this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
  }
}
customElements.define('details-disclosure', DetailsDisclosure);

class HeaderMenu extends DetailsDisclosure {
  constructor() {
    super();
    this.header = document.querySelector('.header-wrapper');
    this.mainDetails = this.querySelector('details');
    document.querySelector('.header__inline-menu').addEventListener('mouseleave',this.closeAll);
    this.mainDetails.addEventListener('mouseenter', this.onHeaderMouseEnter.bind(this));
  }

  onToggle() {
    if (!this.header) return;
    this.header.preventHide = this.mainDetailsToggle.open;

    if (document.documentElement.style.getPropertyValue('--header-bottom-position-desktop') !== '') return;
    document.documentElement.style.setProperty(
      '--header-bottom-position-desktop',
      `${Math.floor(this.header.getBoundingClientRect().bottom)}px`
    );
  }
  closeAll() {
    let detailsElements = document.querySelectorAll('details');
    detailsElements.forEach(function (details) {
      details.removeAttribute('open');
    });
  }
  open() {
    this.closeAll();
    this.mainDetailsToggle.setAttribute('open', '');
    this.header.setAttribute('aria-expanded', true);
  }
  onHeaderMouseEnter() {
    this.open();
  }
  onHeaderMouseLeave() {
    this.close();
  }
}

customElements.define('header-menu', HeaderMenu);


class ChildrenMenuHover  {
  constructor() {
    this.header = document.querySelector('header');
    this.megaMenuChilds =  this.header.querySelectorAll('.link-level-2');
    this.megaMenuGrandChilds =  this.header.querySelectorAll('.menu-level3 .links-items[data-item]');
    this.megaMenuChilds.forEach((el)=>{
      el.addEventListener('mouseenter', this.open.bind(this, el));
    })

  }
  open(el) {
    let spanElement = el.querySelector('span');

    if (spanElement) {
      this.close(this.megaMenuChilds, this.megaMenuGrandChilds );

      let vendor = spanElement.getAttribute('data-title');
      el.classList.add('active');
      this.megaMenuGrandChilds.forEach((el) => {
        el.getAttribute('data-item') == vendor ? el.classList.add('active') : null;
      });
    }
  }

  close(child, grandChild) {
    this.removeActive(child);
    this.removeActive(grandChild);
  }

  removeActive(arr){
    arr.forEach((el) => el.classList.remove('active'))
  }
}

const childrenMenu = new ChildrenMenuHover();
