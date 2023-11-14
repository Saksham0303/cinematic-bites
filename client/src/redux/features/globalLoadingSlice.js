import { createSlice } from "@reduxjs/toolkit";

export const globalLoadingSlice = createSlice({
    name: "AuthModal",
    initialState: {
        globalLoading: false 
    },
    reducers: {
        setAuthModalOpen: (state, action) => {
            state.appState = action.payload
        }
    }
});

export const {
    setGlobalLoading
} = globalLoadingSlice.actions;

export default globalLoadingSlice.reducer;