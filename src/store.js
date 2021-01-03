import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import TodosReducer from './reducer';

const composedEnhacer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(TodosReducer, composedEnhacer);

export default store;