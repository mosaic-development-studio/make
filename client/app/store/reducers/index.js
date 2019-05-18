import {
    ADD_ITEM,
    EDIT_ITEM,
    REMOVE_ITEM
} from '../constants';

export const items = (state = [], action) => {
    switch(action.type) {
        case ADD_ITEM:
            return state;
        case EDIT_ITEM:
            return state;
        case REMOVE_ITEM:
            return state;
        default:
            return state;
    }
};