import React from 'react'
import './Collection.style.scss'
import { selectCollection } from '../../Redux/Shop/Shop.Selector';
import { connect } from 'react-redux';
import CardComponent from '../CardComponent/CardComponent';

class Collection extends React.Component {

    render() {
        const { Collection } = this.props;
        console.log(Collection)
        const { categoryname, items } = Collection
        return (
            <div className='collection-page'>
                <h1 className='title'>{categoryname}</h1>
                <div className='items'>
                    {
                        items.map(item => <CardComponent key={item.productid} item={item} />)

                    }
                </div>
            </div>
        )
    }
}


const mapStateToProp = (state, ownProps) => ({
    Collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProp)(Collection)
