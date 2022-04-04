import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [click, setClick] = useState(false)
    return (
        <div className="relative bg-gray-300 py-1 navbar">
            <div className="md:hidden text-center bg-gray-300">
                {
                    click ? <FontAwesomeIcon icon={faBars} onClick={() => setClick(!click)} className="h-8 w-8 mx-auto cursor-pointer"></FontAwesomeIcon> : <FontAwesomeIcon icon={faXmark} onClick={() => setClick(!click)} className="h-8 w-8 mx-auto cursor-pointer"></FontAwesomeIcon>
                }
            </div>
            <nav className={`w-full flex justify-center flex-col md:flex-row absolute md:static bg-gray-300 ${click ? "-top-96" : "top-8"} z-10 duration-1000 pb-1`}>
                <CustomLink to='/' className="text-xl ml-0 md:ml-5 p-3 rounded-md text-center">Home</CustomLink>
                <CustomLink to='reviews' className="text-xl ml-0 md:ml-5 p-3 rounded-md text-center">Reviews</CustomLink>
                <CustomLink to='dashboard' className="text-xl ml-0 md:ml-5 p-3 rounded-md text-center">Dashboard</CustomLink>
                <CustomLink to='blogs' className="text-xl ml-0 md:ml-5 p-3 rounded-md text-center">Blogs</CustomLink>
                <CustomLink to='about' className="text-xl ml-0 md:ml-5 p-3 rounded-md text-center">About</CustomLink>
                <CustomLink to='contact' className="text-xl ml-0 md:ml-5 p-3 rounded-md text-center">Contact</CustomLink>
            </nav>
        </div>
    );
};

export default Navbar;