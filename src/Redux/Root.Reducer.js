import {combineReducers} from 'redux'
import UserReducer from './User/User.Reducer'
import CartReducer from './Cart/Cart.Reducer'
export default combineReducers({
    user: UserReducer,
    cart: CartReducer
})