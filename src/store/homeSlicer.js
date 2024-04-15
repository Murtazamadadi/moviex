import {createSlice} from '@reduxjs/toolkit'
// import { combineReducers } from '@reduxjs/toolkit';

export const homeSlice=createSlice({
    name:"home",
    initialState:{
        url:{},
        genres:{},
    },
    reducers:{
        getApiConfiguretion:(state,action)=>{
            state.url = action.payload;
        },
        getGenres:(state,action)=>{
            state.genres=action.payload;
        }
    },
})



export const {getApiConfiguretion,getGenres}=homeSlice.actions;
export default homeSlice.reducer;