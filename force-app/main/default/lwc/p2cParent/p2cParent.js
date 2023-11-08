import { LightningElement,api } from 'lwc';

export default class P2cParent extends LightningElement {
   coresolData = [
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description : "First card description."       
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description : "Second card description." 
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "third Card",
            description : "third card description." 
        }
    ]
    progress = 30;
    handlePercentage(event){
        this.progress = event.target.value
    }
    seep(){
        this.template.querySelector('c-p2c-slider').madheldaruvu()
    }
    
}