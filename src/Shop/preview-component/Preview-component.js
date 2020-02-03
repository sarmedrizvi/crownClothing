import React from 'react';
import './Preview-component.scss';
import CardComponent from '../CardComponent/CardComponent';

export const PreviewComponent =({categoryname,items})=>(
    <div className='PreviewComponent'>
        <h1 className='Title'>{categoryname.toUpperCase()}</h1>
        <div className='Preview' >
        {items
        .filter((item,idx)=>idx<4)
        .map((item)=>(
            <CardComponent key={item.ProductID} item={item} />
        ))}
        </div>
    </div>

)
