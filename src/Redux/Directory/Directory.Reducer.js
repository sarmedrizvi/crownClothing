// import { sections } from "./Section";
import { DirectoryType } from "./Directory.Types";
const INITIAL_STATE = {
    sections: []
};


export const DirectoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DirectoryType.categories:
            return {
                ...state,
                sections: action.payload
            }
        default:
            return state;
    }
}
