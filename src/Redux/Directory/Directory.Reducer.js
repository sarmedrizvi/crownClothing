import { sections } from "./Section";


const INITIAL_STATE = {
    sections: sections
}

export const DirectoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
