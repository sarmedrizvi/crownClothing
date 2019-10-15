import React from 'react';
import './Input.scss';



export const Input=({handleChange,label,length, ...otherProps})=>(
    <div className='group'>
    
    
        <input className='form-input' onChange={handleChange}  {...otherProps} />
        {label ?
        (<label 
        
            className={`${otherProps ? 'shirnk' : ''} form-input-label`}
        >
            {label}
        </label>)
        : null

        }
    </div>
);