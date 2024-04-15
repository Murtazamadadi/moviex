import { configureStore } from "@reduxjs/toolkit";
import { homeSlice } from "./homeSlicer";


export const store = configureStore({
    reducer: {
        home:homeSlice.reducer,
    },
});


