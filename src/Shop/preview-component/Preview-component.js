import React from 'react';
import './Preview-component.scss';
import CardComponent from '../CardComponent/CardComponent';

export const PreviewComponent =({title,items})=>(
    <div className='PreviewComponent'>
        <h1 className='Title'>{title.toUpperCase()}</h1>
        <div className='Preview' >
        {items
        .filter((item,idx)=>idx<4)
        .map((item)=>(
            <CardComponent key={item.id} item={item} />
        ))}
        </div>
    </div>

)
