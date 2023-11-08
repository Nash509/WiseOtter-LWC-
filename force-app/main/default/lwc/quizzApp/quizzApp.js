import { LightningElement } from 'lwc';

export default class  QuizzApp extends LightningElement {
    selected={} //selected answers
    correctAnswers = 0 // to show the correct answes
    isSubmited = false // use to show result no
    myQuestions=[
        {
            id:"Question1",
            question: "which one of the f is not a templet loop here?",
            answers:{
                a: "for:ecah",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question: "invalid comp in LWC?",
            answers:{
                a: ".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question: "following is not directorive?",
            answers:{
                a: "for:ecah",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        },
    ]
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ?
        `slds-text-color_success`:`slds-text-color_error`}`
    }
    changeHandler(event){
        
        const {name, value} = event.target
        
        this.selected={...this.selected,[name]:value}
    }
    submitHandler(event){
        console.log("submit here")
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmited = true
        console.log("correct answers",this.correctAnswers)
    }
    resetHandlet(){
        this.selected = {}
        this.correctAnswers=0

    }
}