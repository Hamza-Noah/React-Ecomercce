import React from 'react';

function StarRating({ rating }) {
    return (
        <div>
            {[...Array(5)].map((_, index) => (
                <i
                    key={index}
                    className={index < rating ? "fas fa-star" : "far fa-star"} // Filled star for rating or less, empty otherwise
                    style={{ color: "#ffd700" }}
                ></i>
            ))}
        </div>
    );
}

export default StarRating;
