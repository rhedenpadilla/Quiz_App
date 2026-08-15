export default class User {
    constructor({ id, name, username, email, role, points = 0 }) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.role = role || 'student';
        this.points = points;
    }
}
