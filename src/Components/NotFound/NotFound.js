import React from 'react';
import Navbar from '../Navbar/Navbar';
import img from '../../images/1_qdFdhbR00beEaIKDI_WDCw.gif'

const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img className='mx-auto w-1/3 border-none' src={img} alt=''></img>
            <h2 className='font-bold text-xl mt-2 text-center'>MAYBE YOU'RE ON A WRONG ROUTE.<br />PLEASE CHECK YOUR URL.</h2>
        </div>
    );
};

export default NotFound;