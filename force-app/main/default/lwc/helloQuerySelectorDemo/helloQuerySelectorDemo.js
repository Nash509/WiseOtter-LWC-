import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
users = ["amar","akbar", "anthony"];
    HandleClickQuery(){
        const elm = this.template.querySelector('h1');
        const userelements = this.template.querySelectorAll('.name');

        Array.from(userelements).forEach(item =>{
            console.log(item.innerText);
        })
    }
}