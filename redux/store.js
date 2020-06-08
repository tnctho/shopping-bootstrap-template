import reducer from './reducer'
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
const middleware = [thunk, logger]
const enhancer = compose(applyMiddleware(...middleware))
const store = createStore(reducer, enhancer)

export default store;