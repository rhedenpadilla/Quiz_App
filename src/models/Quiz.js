export default class Quiz {
    constructor({ id, title, description, subject_id, grade_level, difficulty, duration }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.subject_id = subject_id;
        this.grade_level = grade_level;
        this.difficulty = difficulty;
        this.duration = duration; // in minutes
    }
}
