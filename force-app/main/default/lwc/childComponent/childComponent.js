import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    sendData() {
        const dataToPass = 'Hello from child component!';
        
        // Create a custom event with a payload (data)
        const event = new CustomEvent('passdata', { detail: dataToPass });
        
        // Dispatch the event to the parent component
        this.dispatchEvent(event);
    }
}