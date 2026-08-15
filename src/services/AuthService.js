import User from '../models/User.js';

export default class AuthService {
    /**
     * Mock login for MVP
     */
    static async login(username, password) {
        const defaultUser = import.meta.env.VITE_DEFAULT_USERNAME || 'developer';
        const defaultPass = import.meta.env.VITE_DEFAULT_PASSWORD || 'password123';

        if (username === defaultUser && password === defaultPass) {
            const mockUser = new User({
                id: '1',
                name: 'Developer User',
                username: defaultUser,
                email: 'dev@example.com',
                role: 'student',
                points: 120
            });
            localStorage.setItem('user', JSON.stringify(mockUser));
            return mockUser;
        }
        throw new Error('Invalid credentials. Please use the developer credentials.');
    }

    static async register(userData) {
        // Mock registration
        const mockUser = new User({
            id: Date.now().toString(),
            ...userData,
            points: 0
        });
        localStorage.setItem('user', JSON.stringify(mockUser));
        return mockUser;
    }

    static logout() {
        localStorage.removeItem('user');
    }

    static getCurrentUser() {
        const userData = localStorage.getItem('user');
        return userData ? new User(JSON.parse(userData)) : null;
    }
}
