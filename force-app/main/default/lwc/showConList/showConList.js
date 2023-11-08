import { LightningElement,track, wire } from 'lwc';
import getContacts from '@salesforce/apex/FetchContacts.getContacts';


export default class ShowConList extends LightningElement {
    @track columns = [
        {label:'FirstName',fieldName:'FirstName'},
        {label:'LastName',fieldName:'LastName'}
    ];
    @track contacts;

    @wire(getContacts) wiredcontacts({ error , data }){
    if (data) {
        this.contacts = data;
    } else if(error) {
        console.error('asuvidha k leye sorry',error);
    }
}
}