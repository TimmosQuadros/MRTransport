import React from 'react';

const Fleet: React.FC = () => {
    return (
        <div className="fleet-container">
            <h1>Our Fleet</h1>
            <p>Explore our fleet of modern and efficient vehicles.</p>
            <div className="fleet-image-container">
                <img
                    src="/man-van-kwk-dk-4x3_width_800_height_450.jpg"
                    alt="Fleet of MR Transport"
                    className="fleet-image"
                />
            </div>
        </div>
    );
};

export default Fleet;
