import React from 'react';
import HeaderImg from '../../images/HeaderImg.png';

const Header = () => {
    return (
        <div className='lg:grid lg:grid-cols-3 lg:w-11/12 md:grid md:grid-cols-2 md:w-11/12 grid grid-cols-1 w-11/12 mx-auto mt-3 align-middle'>
            <div className='col-span-2 text-justify font-semibold my-auto'>
                <p><span className='text-3xl'>H</span>ello our respected visitor, wellcome to our website. This site will help you to practice and revise your web development knowledge. By practicing these quizes you can easily take a quick survay of your knowledge in this field. Wish you best of luck.</p>
            </div>
            <div>
                <img className='w-3/2 mx-auto lg:flex md:flex hidden' src={HeaderImg} alt="" />
            </div>
        </div>
    );
};

export default Header;