import { SHOP_DATA } from "./ShopData";

const INITIAL_STATE = {
    shopData: SHOP_DATA
}

export const ShopReducer = (state = INITIAL_STATE, action) => {
    switch (action) {
        default:
            return state;
    }
}