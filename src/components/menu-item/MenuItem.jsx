import React from 'react';
import './styles.scss';

const MenuItem = ({ title, coverImage, size }) => (
    <div className={`${size} menu-item`}>
    <div className='background-image' style={{backgroundImage: `url(${coverImage})`}} />
    <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div>
)

export default MenuItem;