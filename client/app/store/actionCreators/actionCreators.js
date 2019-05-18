import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM } from '../constants';

export const addItem = item => {
    return {
        type: ADD_ITEM,
        item
    };
};

export const editItem = item => {
    return {
        type: EDIT_ITEM,
        item
    };
};

export const removeItem = item => {
    return {
        type: REMOVE_ITEM,
        item
    };
};