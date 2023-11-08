import { LightningElement, track } from 'lwc';
import compareStrings from '@salesforce/apex/StringComparisonController.compareStrings';

export default class StringComparison extends LightningElement {
    @track string1 = '';
    @track string2 = '';
    @track areStringsEqual = false;

    handleInputChange(event) {
        const { name, value } = event.target;
        this[name] = value;
    }

    submitStrings() {
        compareStrings({ string1: this.string1, string2: this.string2 })
            .then(result => {
                this.areStringsEqual = result;
            })
            .catch(error => {
                console.error('Error comparing strings: ' + JSON.stringify(error));
            });
    }
}
