import { LightningElement, api } from 'lwc';

export default class P2cSlider extends LightningElement {
    val = 20;
    
    changehandler(event){
        this.val= event.target.value
    }
    
    @api madheldaruvu(){
        this.val = 50
    }
}