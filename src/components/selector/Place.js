import React from 'react';
import '../../assets/stylesheets/selector/selector.scss';

const Place = () => {
  return (
        <div className='place-container'>
            <h3 className='place-title'>Avellaneda</h3>
            <div className='temp-container'>
                <span className='max-temp'>Max: 34º</span>
                <span className='min-temp'>Min: 12º</span>
            </div>
            {/* icon */}
        </div>
  );
}

export default Place;