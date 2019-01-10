import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import initialState from './initial';

const store = createStore( reducer, initialState,);

export default store;