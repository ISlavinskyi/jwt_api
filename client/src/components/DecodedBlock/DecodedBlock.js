import React from 'react';

import './DecodedBlock.css';

const DecodedBlock = (props) => {
    return(
        <div className='DecodedHeader'>
            <div className='TokenHeader'>
                <span>{props.title}</span>
            </div>
            <textarea className='HeaderString'/>
        </div>
    );
};

export default DecodedBlock;