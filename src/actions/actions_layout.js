import * as types from './types';

export function openLeftDrawer() {
    return function(dispatch) {
        return dispatch({
            type: types.OPEN_LEFT_DRAWER
        })
    }
}
