import React from 'react';
import { PreviewComponent } from '../Shop/preview-component/Preview-component';
import { createStructuredSelector } from 'reselect';
import { collectionToArray } from '../Redux/Shop/Shop.Selector'
import { connect } from 'react-redux';

const CollectionOverview = ({ data }) => {
    console.log(data)
    return (
        <div className="Collection">
            <h1 className='Title' id='Top'>Collection</h1>
            {
                data.map(({ id, ...otherCollectionProps }) => (
                    <PreviewComponent key={id} {...otherCollectionProps} />
                ))
            }
        </div>

    )
}

const mapStateToProp = () => createStructuredSelector({
    data: collectionToArray
})


export default connect(mapStateToProp)(CollectionOverview);