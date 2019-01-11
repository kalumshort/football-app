// creating a global store to be used by redux

import { createStore } from 'redux';
import reducer from './reducer';
import initialState from './initial';

const store = createStore( reducer, initialState,);

export default store;