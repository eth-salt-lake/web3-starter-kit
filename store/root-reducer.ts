import { combineReducers } from '@reduxjs/toolkit';
import { reducer as exampleReducer } from './example-store';

export const rootReducer = combineReducers({
    example: exampleReducer,
});
