import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reduser from './reducers/reducer'

const store = createStore(reduser, applyMiddleware(thunkMiddleware))

export default store