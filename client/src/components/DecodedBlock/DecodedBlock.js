import React from 'react';

import './DecodedBlock.css';

const DecodedBlock = (props) => {
    return (
        <div className='DecodedHeader'>
            <div className='TokenHeader'>
                <span>{props.title}</span>
            </div>
            <textarea
                className='HeaderString'
                value={JSON.stringify(props.payload, undefined, 4)}
                onChange={(event)=>props.onDecodeChange(event)}
            />
        </div>
    );
};

export default DecodedBlock;