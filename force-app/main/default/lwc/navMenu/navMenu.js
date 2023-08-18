import { LightningElement } from 'lwc';
import ICONS from '@salesforce/resourceUrl/icons';
import {loadStyle} from 'lightning/platformResourceLoader';
export default class NavMenu extends LightningElement {
    
  renderedCallback(){
    loadStyle(this, ICONS + '/style.css');
  }
  handleHamburgerClicked() {
        const navMenu=this.template.querySelector('.topnav');

        navMenu.classList.toggle('responsive');
       
      }
}