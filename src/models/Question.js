export default class Question {
    constructor({ id, quiz_id, question_text, explanation, choices = [] }) {
        this.id = id;
        this.quiz_id = quiz_id;
        this.question_text = question_text;
        this.explanation = explanation;
        this.choices = choices; // array of { id, text, is_correct }
    }
}
