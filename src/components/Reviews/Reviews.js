import React from 'react';
import useReviews from '../Hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews,] = useReviews()
    return (
        <div className="mt-8">
            <h1 className="text-4xl text-semibold text-center mb-2">What Our Customers Say</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full p-2 gap-2">
                {
                    reviews.map((review) => <SingleReview review={review} key={reviews.indexOf(review)}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;