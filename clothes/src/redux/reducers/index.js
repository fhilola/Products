import {combineReducers} from 'redux'
import { cartReducer } from './cartReducer'
import { likeReducer } from './likeReducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    like: likeReducer
})
export default rootReducer