import React from 'react';
import Rating from '../Rating/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SingleReview.css'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';

const SingleReview = ({ review }) => {
    const { img, name, rating, feedback } = review;
    const ratingArray = []
    for (let i = 1; i <= Math.floor(rating); i++) {
        ratingArray.push(i);
    }
    return (
        <div className="w-2/3 mx-auto md:w-full border border-gray-600 shadow-2xl mb-2  rounded-t-lg py-4 px-2 bg-cardbg">
            <div className="flex items-center name-and-image">
                <img src={img} alt="" className="w-20 h-20 rounded-full" />
                <h1 className="ml-2 text-xl">{name}</h1>
            </div>
            <div className="flex items-center justify-between w-3/4 mx-auto my-2 rating-container">
                <p className="text-xl">Rating : {rating}</p>
                <div className="flex text-yellow-500">
                    {
                        ratingArray.map(rating => <Rating key={rating}></Rating>)
                    }
                    {
                        parseInt(rating) !== Number(rating) && <FontAwesomeIcon icon={faStarHalf} className="w-4 h-4"></FontAwesomeIcon>
                    }
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-3xl">Review</h1>
                <p className="text-lg">{feedback}</p>
            </div>
        </div>
    );
};

export default SingleReview;