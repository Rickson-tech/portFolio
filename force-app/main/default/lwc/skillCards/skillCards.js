import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images'
export default class SkillCards extends LightningElement {
    adminImageURL=IMAGES+'/front.jpg';
    trainImageURL=IMAGES+'/sales.jpg';
    serviceImageURL=IMAGES+'/backend.jpg';
}