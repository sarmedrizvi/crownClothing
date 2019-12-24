import {UserTypes} from './User.type'


export const SetCurrentUser =user=>({
    type: UserTypes.setCurrentUser,
    Payload:user
})
