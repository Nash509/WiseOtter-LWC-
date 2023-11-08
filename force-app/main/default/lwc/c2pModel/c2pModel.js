import { LightningElement } from 'lwc';

export default class C2pModel extends LightningElement {
    mui(){
        const myEvent = new CustomEvent('close')
        this.dispatchEvent(myEvent)
    }
}