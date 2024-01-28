import React from 'react';
import { FaGoogle, FaGithub, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div className=''>
            <div>
                <h2 className='text-3xl text-start mb-2 font-popience font-semibold'>Login With</h2>
            </div>
            <div className='px-3'>
                <button className="btn btn-outline w-full mb-2">
                    <FaGoogle />Login with google
                </button>
                <button className="btn btn-outline w-full mb-2">
                    <FaGithub />Login with Github
                </button>
            </div>
            <div className=''>
                <h2 className='text-3xl text-start m-3 font-popience font-semibold'>Find Us On</h2>

                <div className='mx-3 border-2 rounded-t-md'>
                    <a className='flex items-center border-b-2 py-2' href=""><FaFacebook className='mx-3 font-popience font-medium'></FaFacebook>Facebook</a>
                    <a className='flex items-center border-b-2 py-2' href=""><FaTwitter className='mx-3 font-popience font-medium'></FaTwitter> Twitter</a>
                    <a className='flex items-center py-2' href=""><FaInstagram className='mx-3 font-popience font-medium'></FaInstagram> <span>Instragram</span></a>
                </div>

            </div>
            <div className=''>
                <h2 className='text-3xl text-start m-3 font-popience font-semibold'>Q-Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;