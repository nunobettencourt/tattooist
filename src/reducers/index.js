import { combineReducers } from 'redux';

/* import Reducers */
import layoutReducer from './reducer_layout';

export default combineReducers({
    layout: layoutReducer,
});