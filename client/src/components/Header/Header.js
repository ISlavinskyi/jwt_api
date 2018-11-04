import React from 'react';

import './Header.css';

const Header = () => {
    return(
        <div>
            <p className='HeaderTitle'>
                Sign, Verify or Decode JWTs
            </p>
            <span className='HeaderText'>
                Paste a JWT and decode its header, payload, and signature,
            or provide header, payload, and signature information to generate a JWT
            </span>

        </div>
    )
};

export default Header;