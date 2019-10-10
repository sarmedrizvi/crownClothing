import React from 'react';
import './menu-item.styles.scss';
export const HomepageCard = ({ title, picture, size }) =>
  (<div className={`${size} menu-item`} >
    <div style={{ backgroundImage: `url(${picture})` }}  className="Background-image"/>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>

  )