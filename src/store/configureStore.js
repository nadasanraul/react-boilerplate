import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    //Store creation
    const store = createStore(
        combineReducers({ // combinig multiple reducers into one object
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}

