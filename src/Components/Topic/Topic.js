import React from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic;

    return (
        <div className='w-1/2 mx-auto mt-5 border-2 rounded-md p-2'>
            <div className='text-center'>
                <img className='flex bg-slate-500 rounded-lg' src={logo} alt=''></img>
                <p className='font-semibold text-slate-500 text-xl'>{name}</p>
                <small>Total Questions: {total}</small>
                <Link to={`/quizquestionno/${id}`} className='bg-slate-800 text-white p-1 rounded-md mt-1 text-sm flex items-center'>Start Practice <ChevronDoubleRightIcon className='h-4 w-4'></ChevronDoubleRightIcon></Link>
            </div>
        </div>
    );
};

export default Topic;