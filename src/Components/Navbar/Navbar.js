import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/logo.png'
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [rise , setrise] = useState(false)
    return (
        <div className='flex justify-between bg-slate-700 text-white'>
            <div className="flex items-center m-4">
                <img className='w-10' src={img} alt="" />
                <h1 className='text-2xl'>Quiz Mania</h1>
            </div>

            <div className='relative'>
                <div className={`lg:static text-xl flex items-center m-4 justify-between absolute ${rise ? 'right-30' : 'top-[120px]'}`}>
                    <Link to='/'>Topics</Link>
                    <Link className='ml-12' to='statistics'>Statistics</Link>
                    <Link className='ml-12' to='blog'>Blog</Link>
                </div>
            </div>
            {
                rise ? <Bars3Icon onClick={()=> setrise(!rise)} className="h-6 w-6 lg:hidden"/> : <XMarkIcon onClick={() => setrise(!rise)} className='h-6 w-6 lg:hidden'/>
            }
        </div>
    );
};

export default Navbar;