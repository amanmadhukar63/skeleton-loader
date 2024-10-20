import React from 'react';
import './SkeletonLoader.css';

function SkeletonLoader(){
    return (
        <div className='outer-box'>
            <div className='loader-box'></div>
        </div>
    );
}

export default SkeletonLoader;