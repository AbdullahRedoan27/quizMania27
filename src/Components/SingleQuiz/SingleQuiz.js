import React from 'react';
import { Toast } from 'react-bootstrap';
import SingleOption from '../SingleOption/SingleOption';

const SingleQuiz = ({ quiz }) => {
    const { options, correctAnswer, question } = quiz;

    const FirstTagRemoved = question.replace('<p>', '');
    
    const TagRemovedQn = FirstTagRemoved.replace('</p>', '');

    const CorrectAnswerChecker = (selectedOption) => {
        if (selectedOption === correctAnswer) {
            alert ('right')
        }
        else {
            alert ('wrong')
        }
    }
    
    return (
        <div  className='bg-slate-800 p-4 rounded-xl w-2/3 mx-auto text-center m-4 text-white' >
            <p className='text-xl'>{TagRemovedQn}</p>
            <div className='grid grid-cols-2'>
                {
                    options.map(option => <SingleOption
                        option={option}
                        AnswerCompare = {CorrectAnswerChecker}
                ></SingleOption>)
            }
            </div>
        </div>
    );
};

export default SingleQuiz;