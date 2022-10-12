import React from 'react';
import SingleOption from '../SingleOption/SingleOption';
import { toast } from 'react-toastify'
import { EyeIcon } from '@heroicons/react/24/solid'

const SingleQuiz = ({ quiz }) => {
    const { options, correctAnswer, question } = quiz;

    const FirstTagRemoved = question.replace('<p>', '');

    const TagRemovedQn = FirstTagRemoved.replace('</p>', '');

    const CorrectAnswerChecker = (selectedOption) => {
        if (selectedOption === correctAnswer) {
            return toast.success('Well Done. Your Answer is right')
        }
        else {
            return toast.warning(`Your answer is wrong. Right answer is -${correctAnswer}`)
        }
    }

    const CorrectAnswerShow = () => {
        return toast.info(`${correctAnswer}`);
    }

    return (
        <div>
            <div className='bg-slate-800 p-4 rounded-xl w-2/3 mx-auto text-center m-4 text-white' >
                <p className='text-xl flex justify-between'>{TagRemovedQn} <EyeIcon onClick={CorrectAnswerShow} className='h-6 w-6' /></p>
                <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 grid grid-cols-1'>
                    {
                        options.map(option => <SingleOption
                            option={option}
                            AnswerCompare={CorrectAnswerChecker}
                        ></SingleOption>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleQuiz;