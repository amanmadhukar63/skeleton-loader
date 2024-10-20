import React from 'react';
import './SkeletonLoader.css';

export interface Props {
    height : string;
    width : string;
    borderRadius : string;
}

function SkeletonLoader(props: Props){
    const {height='100%', width='100%', borderRadius='5px'} = props;
    return (
        <div 
            className='loader-box'
            style={{
                height,
                width,
                borderRadius,
            }}
        >
        </div>
    );
}

export default SkeletonLoader;