import React from 'react';

const Footer = () => {
    return (
      <div>
          <p className='text-center relative-bottom'>copyright @{(new Date().getFullYear())} </p>
      </div>
    );
};
export default Footer;