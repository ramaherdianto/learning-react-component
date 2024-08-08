import React, { useState } from 'react';
import PropType from 'prop-types';
import Star from './Star';

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
};

const containerStarStyle = {
    display: 'flex',
};

const textStyle = {
    lineHeight: '1',
    margin: '0',
};

const StarRating = ({ max, color, size }) => {
    StarRating.propTypes = {
        max: PropType.number,
        color: PropType.string,
        size: PropType.number,
    };

    const [rating, setRating] = useState(0);
    const [tempRating, setTempRating] = useState(0);

    const handleRating = (rating) => {
        setRating(rating);
    };

    return (
        <>
            <div style={containerStyle}>
                <div style={containerStarStyle}>
                    {Array.from({ length: max }, (_, i) => (
                        <Star
                            key={i}
                            onRating={() => handleRating(i + 1)}
                            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                            onHoverIn={() => setTempRating(i + 1)}
                            onHoverOut={() => setTempRating(0)}
                            color={color}
                            size={size}
                        />
                    ))}
                </div>
                <p style={textStyle}>
                    {tempRating ? `${tempRating} Star` : rating ? `${rating} Star` : '0 Star'}
                </p>
            </div>
        </>
    );
};

export default StarRating;
