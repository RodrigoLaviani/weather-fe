import React from 'react';
import '../../assets/stylesheets/selector/selector.scss';
import Place from './Place.js';

const SelectorContainer = () => {
    return (
        <div className="selector-container">
            <Place></Place>
            <Place></Place>
            <Place></Place>
            <Place></Place>
            <Place></Place>
        </div>
    )
}

export default SelectorContainer;