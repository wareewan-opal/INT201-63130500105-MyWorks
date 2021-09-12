let quest = { id: 1, quest: 'what is it' }; //implicit class => let quest= new Object()

// console.log(typeof quest);
class Question {
    constructor(id, question = 'unknown') {
        this._id = id;
        this._question = question;
    }
    get id() {
        return this._id;
    }
    set question(question) {
        console.log("This is setter Question")
        if (question === '') {
            this._question = 'unknown';
        }
    }
    get question() {
        console.log("This is getter Question")
        return this._question;
    }
}
let quest1 = new Question(1);
let quest2 = new Question(2, "What is your name?");
let quest3 = new Question(3, "");
quest2.question = '';

console.log(quest2);
console.log(quest2.question);