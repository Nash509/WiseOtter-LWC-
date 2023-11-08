import { LightningElement } from 'lwc';
import { createMessageContext, releaseMessageContext, publish } from 'lightning/messageService';
import SAMPLE_MESSAGE_CHANNEL from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class PublisherComponent extends LightningElement {
    messageContext = createMessageContext();
    
    publishEvent() {
        const message = {
            recordId: '001xxxxxxxxxxxxxxx', // Optional data to send with the event
            message: 'Hello from Publisher Component!'
        };
        publish(this.messageContext, SAMPLE_MESSAGE_CHANNEL, message);
    }

    // Clean up message context when component is destroyed
    disconnectedCallback() {
        releaseMessageContext(this.messageContext);
    }
}
