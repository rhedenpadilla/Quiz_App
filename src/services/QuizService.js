import { supabase } from './SupabaseClient.js';
import Quiz from '../models/Quiz.js';
import Question from '../models/Question.js';

export default class QuizService {
    static async getQuizzes() {
        const { data, error } = await supabase
            .from('quizzes')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching quizzes:', error);
            // Return some mock quizzes for now if DB fails/is empty
            return [
                new Quiz({ id: '1', title: 'Mathematics: Algebra Fundamentals', subject_id: 'math', difficulty: 'Medium', duration: 10 }),
                new Quiz({ id: '2', title: 'Science: Biology Basics', subject_id: 'science', difficulty: 'Easy', duration: 15 }),
                new Quiz({ id: '3', title: 'Programming: Python Intro', subject_id: 'tech', difficulty: 'Medium', duration: 12 }),
            ];
        }

        return data.map(q => new Quiz(q));
    }

    static async getQuizDetails(quizId) {
        const { data: quiz, error: quizError } = await supabase
            .from('quizzes')
            .select('*')
            .eq('id', quizId)
            .single();

        if (quizError) throw quizError;

        const { data: questions, error: qError } = await supabase
            .from('questions')
            .select('*, choices(*)')
            .eq('quiz_id', quizId);

        if (qError) throw qError;

        return {
            quiz: new Quiz(quiz),
            questions: questions.map(q => new Question(q))
        };
    }

    static async submitAttempt(userId, quizId, score, totalQuestions, correctAnswers, incorrectAnswers, timeTaken) {
        const { data, error } = await supabase
            .from('quiz_attempts')
            .insert([{
                user_id: userId,
                quiz_id: quizId,
                score,
                total_questions: totalQuestions,
                correct_answers: correctAnswers,
                incorrect_answers: incorrectAnswers,
                time_taken: timeTaken
            }]);

        if (error) throw error;
        return data;
    }
}
