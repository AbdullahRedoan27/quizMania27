import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/logo.png'
import './Navbar.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [rise, setrise] = useState(false)
    return (
        <nav className='lg:flex lg:justify-around md:flex md:justify-around flex justify-between bg-slate-700 text-white md:p-16 lg:p-8 p-6'>
            <div className="flex items-center">
                <img className='w-8 md:w-10' src={img} alt="" />
                <h1 className='text-xl md:text-2xl lg:ml-2'>Quiz Mania</h1>
            </div>


            <div className='relative'>
                <div className={`flex flex-col md:flex md:flex-col lg:flex lg:flex-row absolute lg:static duration-500 ease-in ease-out ${rise ? 'top-[-20px] right-12' : 'top-[-150px]'}`} >
                    <NavLink className={({isActive}) => isActive ? 'active' : undefined} id='topics' to='topics'>Topics</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'active' : undefined} id='statistics' to='statistics'>Statistics</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'active' : undefined} id='blog' to='blog'>Blog</NavLink>
                </div>
                <div onClick={() => setrise(!rise)} className='h-6 w-6 lg:hidden'>
                    {rise ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;