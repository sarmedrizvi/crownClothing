
const INTIAL_STATE = {
    currentUser: null
}

const UserReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.Payload
            }
        default:
            return state;
    }
}

export default UserReducer;