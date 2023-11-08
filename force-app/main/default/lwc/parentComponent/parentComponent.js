// parentComponent.js
import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    @track receivedData = '';

    handleData(event) {
        this.receivedData = event.detail;
    }
}
