import React from 'react';

import './MainContent.css';

import DecodedBlock from '../../DecodedBlock/DecodedBlock';
import Button from '../../Button/Button';

const MainContent = () => {
    return (
        <div className='MainContent'>
            <div className='EncodedBlock'>
                <div className='TokenHeader'>
                    <span>JWT string</span>
                </div>
                <textarea className='TokenString'/>
            </div>
            <div className='DecodedBlock'>
                <DecodedBlock
                    title='Algorithm & Token Type'
                />
                <DecodedBlock
                    title='Payload Data'
                />
                <DecodedBlock
                    title='Signature Key'
                />
            </div>
            <div className='CheckBlock'>
                <div></div>
                <Button/>
            </div>

        </div>
    );

};

export default MainContent;