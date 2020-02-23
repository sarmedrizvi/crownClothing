import {UserTypes} from './User.type'
const INTIAL_STATE = {
    currentUser: {
        // id:null,
        // name:null,
        // mail:null,
        // homeaddress:null,
        // customercity:null,
        // customercountry:null,
        // customerphone:null,
        // hash:null,
    }
}

const UserReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case UserTypes.setCurrentUser:
            return {
                ...state,
                currentUser: action.Payload
            }
        default:
            return state;
    }
}

export default UserReducer;