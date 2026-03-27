import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovie:[]
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovie= action.payload;
        }
    }
})

export const {addNowPlayingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;