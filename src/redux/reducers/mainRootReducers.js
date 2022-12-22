import { combineReducers } from "redux";
import emplyeeData from './index'

const mainRootReducers = combineReducers({
    emplyeeData
})

export default (state,action ) => mainRootReducers(state, action)