import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    recommendReducer,
    exploreReducer,
    waitingReducer,
    followReducer,
    hotReducer
} from './reducers';

const rootReducer = combineReducers({
    recommends: recommendReducer,
    explores: exploreReducer,
    waitings: waitingReducer,
    follows: followReducer,
    hots: hotReducer
});

const middleware = getDefaultMiddleware();

const store = configureStore({
    reducer: rootReducer,
    preloadedState: {},
    middleware: middleware
});

export default store;