import React from 'react';
import HeaderImg from '../../images/HeaderImg.jpg';

const Header = () => {
    return (
        <div className='grid grid-cols-3 w-11/12 mx-auto mt-3'>
            <div className='col-span-2 text-justify font-semibold'>
                <p>Hello our respected visitor, wellcome to our website. This site will help you to practice and revise your web development knowledge. By practicing these quizes you can easily take a quick survay of your knowledge in this field. Wish you best of luck.</p>
            </div>
            <div>
                <img className='w-1/2' src={HeaderImg} alt="" />
            </div>
        </div>
    );
};

export default Header;