import { createStore } from 'redux'
import { petReducer } from './reducers'

export default createStore(petReducer)