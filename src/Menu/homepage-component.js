import React from 'react';
import './menu-item.styles.scss';
export const HomepageCard=({title,picture})=>
( <div className="menu-item" style={{backgroundImage: `url(${picture})`}}>
    <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
    </div>
  </div>
    
)