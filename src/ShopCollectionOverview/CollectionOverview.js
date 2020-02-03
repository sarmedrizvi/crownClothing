import React from 'react';
import { PreviewComponent } from '../Shop/preview-component/Preview-component';
import { createStructuredSelector } from 'reselect';
import { collectionToArray } from '../Redux/Shop/Shop.Selector'
import { connect } from 'react-redux';
import { ShopAction } from '../Redux/Shop/Shop.Action';

class CollectionOverview extends React.Component {
    render() {
        const { data } = this.props
        return (
            <div className="Collection">
                <h1 className='Title' id='Top'>Collection</h1>
                {
                    data.length ?
                    data.map(({ categoryid, ...otherCollectionProps }) => (
                        <PreviewComponent key={categoryid} {...otherCollectionProps} />
                    )):
                    <span>Loading...</span>
                }
            </div>

        )
    }
}

const mapStateToProp = () => createStructuredSelector({
    data: collectionToArray
})

export default connect(mapStateToProp)(CollectionOverview);