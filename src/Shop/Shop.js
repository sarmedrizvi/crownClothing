import React from 'react';
import './Shop.scss';
import CollectionOverview from '../ShopCollectionOverview/CollectionOverview';
import { Route } from 'react-router-dom'
import  Collection  from './Collection/Collection.component';

const Shop = ({ match }) => (
    <div>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={Collection} />
    </div>
)


export default (Shop);