import React from 'react'
import './Collection.style.scss'
import { selectCollection } from '../../Redux/Shop/Shop.Selector';
import { connect } from 'react-redux';
import CardComponent from '../CardComponent/CardComponent';


const Collection = ({ Collection }) => {
    const { categoryname, items } = Collection
    return (
        <div className='collection-page'>
            <h1 className='title'>{categoryname}</h1>
           
            <div className='items'>
                {
                    items.map(item => <CardComponent item={item} />)

                }
            </div>
        </div>
    )
}
const mapStateToProp = (state, ownProps) => ({
    Collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProp)(Collection)
