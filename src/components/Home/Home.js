import React from 'react';
import { useNavigate } from 'react-router-dom';
import product from '../../product.jpg'
import useReviews from '../Hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';

const Home = () => {
    const [reviews,] = useReviews()
    const slicedReviews = reviews.slice(0, 3)
    const navigate = useNavigate()
    const handleSeeAllBtn = () => {
        navigate('/reviews')
    }
    return (
        <>
            <div className="flex title justify-between w-full flex-col-reverse md:flex-row items-center">
                <div className="md:w-1/2 w-full">
                    <div>
                        <h1 className="text-center text-5xl font-semibold text-title mb-2">BENGOO <br /> <span className="text-title2">Gaming Headset</span></h1>
                        <p className="text-center text-gray-400 text-xl">Compared to other gaming headsets, Bengoo headset thickened the ear cushions to take more consideration to your ears and provide passive noise isolation. Superior comfortable over-ear pads reduce hearing impairment and heat sweat. Your extreme comfort could be ensured even a whole-day wearing.</p>
                        <div className="flex justify-center">
                            <button className="p-4 bg-blue-300 mt-2 hover:bg-transparent border-blue-300 border-2 duration-500">Live Demo</button>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 md:w-1/2 mx-auto p-2">
                    <div className="relative left-6">
                        <img src={product} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-4/5 mx-auto">
                <h1 className="text-4xl text-center font-semibold mb-2">Customer Reviews (3)</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 w-full p-2 gap-2">
                    {
                        slicedReviews.map(review => <SingleReview key={slicedReviews.indexOf(review)} review={review}></SingleReview>)
                    }
                </div>
                <div className="flex justify-center">
                    <button className="px-8 py-1 bg-blue-700 text-white rounded-lg border border-blue-700 hover:bg-transparent hover:text-black duration-500" onClick={handleSeeAllBtn}>See All Reviews</button>
                </div>
            </div>
        </>
    );
};

export default Home;