import {createStore } from 'redux'
import rootReducer from '../reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitelist: ['cart', 'like']
}

const presistReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(presistReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
persistStore()
export default store