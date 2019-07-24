import { createStore } from 'redux';
import AppReducer from '../reducer/AppReducer'

const store = createStore(AppReducer)

export default store;