import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovie:[],
        trailerVideo:[]
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovie= action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer;