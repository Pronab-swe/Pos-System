import { combineReducers } from "redux"
import { cartReducer } from "./productReducers"


export default combineReducers({
    products: cartReducer
})