import React from 'react';
import PropTypes from 'prop-types';


function Logo() {
    return (
        <div className='flex items-center justify-around py-[4rem]'>
            <a href="google.com"><img src="./src/assets/images/google.svg" alt="logo de google" /></a>
            <a href="facebook.com"><img src="./src/assets/images/facebook.svg" alt="logo de facebook" /></a>
           <a href="github.com"> <img src="./src/assets/images/github.svg" alt="logo de github" /></a>
        </div>
    );
}

export default Logo;