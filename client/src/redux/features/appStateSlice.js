import { createSlice } from "@reduxjs/toolkit";

export const appStateSlice = createSlice({
    name: "AppState",
    initialState: {
        appState: ""
    },
    reducers: {
        setAppState: (state, action) => {
            state.appState = action.payload
        }
    }
});

export const {
    setAppState
} = themeModeSlice.actions;

export default themeModeSlice.reducer