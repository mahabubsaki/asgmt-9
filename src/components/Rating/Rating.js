import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = () => {
    return (
        <FontAwesomeIcon icon={faStar} className="w-4 h-4"></FontAwesomeIcon>
    );
};

export default Rating;