import { LightningElement } from 'lwc';

export default class C2pParent extends LightningElement {
    showmodel = false
    dhika(){
        this.showmodel = true
    }
    chalajabosadk(){
        this.showmodel = false
    }

}