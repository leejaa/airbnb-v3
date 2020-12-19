import { combineReducers } from 'redux';
import homeReducer, { homeReducerType } from './homeSlice';

export interface rootState {
  homeReducer: homeReducerType,
}

export default combineReducers({
  homeReducer,
});
