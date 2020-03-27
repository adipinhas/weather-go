import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import counterReducer from './store/reducer/counter'
import resultReducer from './store/reducer/result'
import weatheReducer from './store/reducer/weather'
import favoritesReducer from './store/reducer/favorites'
import thunk from 'redux-thunk'

const rootStore = combineReducers({
    ctr:counterReducer,
    res:resultReducer,
    weth:weatheReducer,
    fav:favoritesReducer
})

const logger = store =>{
    return next =>{
        return action => {
            console.log('[MIDDLE] DISPATCH : ',action);
            const result  = next(action);
            console.log('[MIDDLE] NEXT STATE ' ,store.getState());
            return result
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootStore,composeEnhancers(applyMiddleware(logger,thunk)))
ReactDOM.render(<Provider store={store}><HashRouter><App /></HashRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
