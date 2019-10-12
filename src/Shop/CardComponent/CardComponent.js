import React from 'react';
import './CardComponent.scss';


export const CardComponent =({id,name,price,imageUrl})=>(
    <div className='CardPreview'>
        <div style={{backgroundImage:`url(${imageUrl})`}} className='Image'/>
    
    <div className='titles'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
    </div>
    </div>
    
)