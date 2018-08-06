import * as types from '../actions/types';

export default function (state = {}, action ) {
    switch(action.type) {
        case types.OPEN_LEFT_DRAWER:
            return {
                leftDrawer: action.payload.source,
            }
        case types.OPEN_RIGHT_DRAWER:
            return {
                leftDrawer: action.payload.source,
            }
        default:
            return state;
    }
}