import React from 'react';
import './App.css';

const Dise = ({dice}) => {
    return (
        <>
            <img className="shake"
            src={`https:img.icons8.com/windows/96/000000/dice-${dice}.png`} alt="dice" />
        </>
    );
};

export default Dise;