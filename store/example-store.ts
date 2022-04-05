import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from ".";

export interface ExampleStore {
    count: number;
}

const initState: ExampleStore = {
    count: 0,
};

const slice = createSlice({
    name: "example",
    initialState: initState,
    reducers: {
        increment(state: ExampleStore, action: PayloadAction<number>) {
            const newValue = action.payload;
            state.count += newValue;
        },
        reset(state: ExampleStore) {
            // simply sets to 0
            state.count = 0;
        },
    },
});

export const incrementBy = (count: number): AppThunk => async (dispatch) => {
    dispatch(slice.actions.increment(count));
};

export const resetCounter = (): AppThunk => async (dispatch) => {
    dispatch(slice.actions.reset());
};

export const { reducer } = slice;