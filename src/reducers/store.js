import { createStore } from 'redux';
import teamReducer from './reducer';

const store = createStore(teamReducer);

export default store;

