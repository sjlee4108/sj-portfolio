// With ES6 if you have a directory with multiple files
// and an index.js file you can import it by the
// directory name: import ./reducers.

// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import LangReducer from './language-reducer';
import ThemeReducer from './theme-reducer';

// Root reducer (top level) uses combineReducers
// to combine multiple reducers together into our redux state.
const rootReducer = combineReducers({
    language: LangReducer,
    theme: ThemeReducer,
});

export default rootReducer;
