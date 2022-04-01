import { combineReducers } from '@reduxjs/toolkit';
import { reducer as walletReducer } from './wallet-store';

export const rootReducer = combineReducers({
    wallet: walletReducer,
});
