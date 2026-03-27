import { useEffect } from "react";
import { API_OPTIONS, url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice"; 

export const useNowPlayingMovie=()=>{
    const dispatch=useDispatch();
    const fetchMovie=async()=>{
    const movie = await fetch(url, API_OPTIONS);
    const result= await movie.json();
    console.log(result);  
    dispatch(addNowPlayingMovies(result.results));
    }

useEffect(()=>{
 fetchMovie();
},[])
}