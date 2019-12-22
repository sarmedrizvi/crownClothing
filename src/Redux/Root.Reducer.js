import {combineReducers} from 'redux'
import UserReducer from './User/User.Reducer'

export default combineReducers({
    user: UserReducer
})