import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment/moment';

const Header = () => {
    const date = moment().format("dddd,MMMM DD, YYYY");
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{date}</p>

        </div>
    );
};

export default Header;