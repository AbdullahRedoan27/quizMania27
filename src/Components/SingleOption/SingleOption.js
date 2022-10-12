import React from 'react';
import './SingleOption.css'

const SingleOption = ({option, AnswerCompare}) => {
    return (
        <div>
            <button onClick={(selectedOption)=>  AnswerCompare(option)} id='option-button'>{option}</button>
        </div>
    );
};

export default SingleOption;