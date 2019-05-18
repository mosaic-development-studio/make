import { ACTION_PREFIX } from './constants';

const ADD_ITEM = 'make.ADD_ITEM';
const EDIT_ITEM = 'make.EDIT_ITEM';
const REMOVE_ITEM = 'make.REMOVE_ITEM';

export const ACTIONS = [
    ADD_ITEM,
    EDIT_ITEM,
    REMOVE_ITEM
].reduce((actionMap, action) => {
    actionMap[action] = ACTION_PREFIX + action;

    return actionMap;
}, {});