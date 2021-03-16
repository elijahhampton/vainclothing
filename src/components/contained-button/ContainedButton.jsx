import React from 'react';
import './styles.scss';

const ContainedButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
)

export default ContainedButton;