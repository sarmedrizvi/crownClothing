import { ShopTypes } from "./Shop.Types";

const INITIAL_STATE = {
    shopData: {}
}

export const ShopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopTypes.Add_SHOP_DATA:
            return {
                ...state,
                shopData: action.payload
            }
        default:
            return state;
    }
}