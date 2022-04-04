import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink2 from '../CustomLink/CustomLink2';

const Contact = () => {
    return (
        <div className="w-4/5 mx-auto mt-2">
            <div>
                <p className="text-3xl text-gray-600">We have 4 address you can contact through</p>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 my-8 text-xl flex-col md:flex-row">
                <button className="mb-8"><CustomLink2 to='/contact/dhaka' className="border border-red-400 py-2 px-5 text-gray-600 mb-2">Dhaka Address</CustomLink2 ></button>
                <button className="mb-8"><CustomLink2 to='/contact/gazipur' className="border border-red-400 py-2 px-4 text-gray-600">Gazipur Address</CustomLink2 ></button>
                <button className="mb-8"><CustomLink2 to='/contact/chandpur' className="border border-red-400 py-2 px-3 text-gray-600">Chandpur Address</CustomLink2 ></button>
                <button className="mb-8"><CustomLink2 to='/contact/chittagong' className="border border-red-400 p-2 text-gray-600">Chittagong Address</CustomLink2 ></button>
            </div>
            <div className="text-center text-gray-700 text-2xl">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Contact;