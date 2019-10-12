import React,{Component} from 'react';
import {SHOP_DATA} from './ShopData.js';
import './Shop.scss';
import {PreviewComponent} from './preview-component/Preview-component.js';


class Shop extends Component
{
    constructor()
    {
        super();
        this.state={
            data: SHOP_DATA
        }
        
    }
    render()
    {
        return(
            
            <div className="Collection">
            <h1 className='Title' id='Top'>Collection</h1>
            {
                this.state.data.map(({id, ...otherCollectionProps})=>(
                    <PreviewComponent key={id} {...otherCollectionProps} />
                ))
            }
            </div>
        )
    }
}
export default Shop;