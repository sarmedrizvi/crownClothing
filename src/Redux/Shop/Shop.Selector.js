import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.shopData
)

export const selectCollection = collectionName => createSelector(
    [selectShopData],
    shopData => shopData[collectionName]
)

export const collectionToArray = createSelector(
    [selectShopData],
    CollectionObject => Object.keys(CollectionObject).map(col => CollectionObject[col])
)