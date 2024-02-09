import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userPic from '../../assets/user.png'
import { AuthContext } from '../../Firebase/Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            </div>
            <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <img className='h-12 mr-2' src={userPic} alt="" />
                {
                    user ? <button onClick={handleLogOut}>LogOut</button>
                        :
                        <NavLink to='/login' className='btn'>Login</NavLink>
                }

            </div>
        </div>
    );
};

export default Navbar;