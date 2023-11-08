import { LightningElement, wire } from 'lwc';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import SAMPLE_MESSAGE_CHANNEL from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class SubscriberComponent extends LightningElement {
    message = '';

    @wire(MessageContext)
    messageContext;

    subscription;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            SAMPLE_MESSAGE_CHANNEL,
            (message) => {
                this.handleMessage(message);
            }
        );
    }

    handleMessage(message) {
        this.message = message.message;
        // You can also access the optional data: message.recordId
    }

    // Clean up the subscription when component is destroyed
    disconnectedCallback() {
        unsubscribe(this.subscription);
    }
}
