import React from 'react';
import './Preview-component.scss';
import {CardComponent} from '../CardComponent/CardComponent';

export const PreviewComponent =({title,items})=>(
    <div className='PreviewComponent'>
        <h1 className='Title'>{title.toUpperCase()}</h1>
        <div className='Preview' >
        {items
        .filter((title,idx)=>idx<4)
        .map(({id, ...otherCollectionProps})=>(
            <CardComponent key={id} {...otherCollectionProps} />
        ))}
        </div>
    </div>

)
