import { LightningElement,api } from 'lwc';

export default class LifeCycleHookChildComp extends LightningElement {
    @api name;
    @api cardHeading;
    constructor() {
        super(); // This calls the constructor of the parent class.
        console.log('Child component created.');
    }
    connectedCallback(){
        console.log('Child component connectedCallback called.');
    }
    renderedCallback(){
        console.log('Child component renderedCallback called.');
    }
    errorCallback(){
        console.log('Child component errorCallback called.');
    }
}