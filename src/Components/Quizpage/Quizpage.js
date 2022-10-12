import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quizpage = () => {
    const AllQuizData = useLoaderData();
    const Quizes = AllQuizData.data.questions;
    return (
        <div>
            {
                Quizes.map(quiz => <SingleQuiz
                    key={quiz.id}
                    quiz={quiz}
                ></SingleQuiz>)
            }
        </div>
    );
};

export default Quizpage;