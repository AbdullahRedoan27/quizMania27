import React from 'react';

const Topic = ({topic}) => {
    const {name, logo, total } = topic;

    return (
        <div className='w-1/2 m-20 border-2 rounded-md p-2'>
            <div>
            <img className='flex bg-slate-500 rounded-lg' src={logo} alt=''></img>
            <p className='font-semibold text-slate-500 text-xl'>{name}</p>
            <small>Total Questions: {total}</small>
            <button className='bg-slate-700 text-white p-1 rounded-md mt-1 text-sm'>Start Practice</button>
            </div>
        </div>
    );
};

export default Topic;