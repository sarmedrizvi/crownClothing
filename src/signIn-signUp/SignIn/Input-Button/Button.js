import React from 'react';
import './Button.scss'


export const InputButton = ({ onClick, children, inverted, isGoogleButton, ...otherProps }) => (

    <button
        onClick={onClick}
        className={`${inverted ? 'inverted' : ''} ${isGoogleButton ? 'GoogleButton' : ''} inputButton`}
        {...otherProps}
    >
        {children}
    </button>
)