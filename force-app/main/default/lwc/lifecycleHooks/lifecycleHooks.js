import { LightningElement, track,api } from 'lwc';

export default class LifecycleHooks extends LightningElement {
    ShowComponent = false
    constructor(){
        super();
        console.log('constructor called');
    }
    connectedCallback(){
        console.log('Connected call back called');
    }
    renderedCallback(){
        console.log('rendered call back');
    }
    errorCallback(){
        console.log('Render callback called');
    }
}