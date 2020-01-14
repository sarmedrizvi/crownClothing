import { combineReducers } from 'redux'
import UserReducer from './User/User.Reducer'
import CartReducer from './Cart/Cart.Reducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { DirectoryReducer } from './Directory/Directory.Reducer'
import { ShopReducer } from './Shop/Shop.Reducer'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']

}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: ShopReducer,
})
export default persistReducer(persistConfig, rootReducer)