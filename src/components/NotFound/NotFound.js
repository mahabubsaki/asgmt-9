import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-96">
            <h1 className="text-8xl text-center text-gray-700">404 Not Found</h1>
            <h1 className="text-6xl text-center text-gray-500">This Page does not exist</h1>
            <button className="p-6 text-3xl bg-green-400"><Link to="/">Go to Home</Link></button>
        </div>
    );
};

export default NotFound;