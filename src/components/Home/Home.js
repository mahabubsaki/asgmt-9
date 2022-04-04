import React from 'react';
import product from '../../product.jpg'

const Home = () => {
    return (
        <div>
            <div className="h-screen flex title justify-between w-full flex-col-reverse md:flex-row items-center">
                <div className="md:w-1/2 w-full">
                    <div>
                        <h1 className="text-center text-5xl font-semibold text-title">BENGOO <br /> <span className="text-title2">Gaming Headset</span></h1>
                        <p className="text-center text-gray-400 text-xl">Compared to other gaming headsets, Bengoo headset thickened the ear cushions to take more consideration to your ears and provide passive noise isolation. Superior comfortable over-ear pads reduce hearing impairment and heat sweat. Your extreme comfort could be ensured even a whole-day wearing.</p>
                        <div className="flex justify-center">
                            <button className="p-4 bg-blue-300 mt-2 hover:bg-transparent border-blue-300 border-2 duration-500">Live Demo</button>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 md:w-1/2 mx-auto ml-6 md:ml-0 p-2">
                    <img src={product} alt="" className="w-full" />
                </div>
            </div>
            <div>
                <h1 className="text-4xl text-center font-semibold">Customer Reviews (3)</h1>
            </div>
        </div>
    );
};

export default Home;