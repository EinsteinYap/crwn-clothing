import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares =[logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares));

//or
// const store = createStore(rootReducer, applyMiddleware(logger));
//also can , why use the above method, because want to modify the array [logger] to add in mother things

export default store;