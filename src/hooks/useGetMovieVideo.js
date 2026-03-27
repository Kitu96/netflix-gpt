import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"

export const useGetMovieVideo=()=>{
const getMovieVideo= async()=>{
    const movies= await fetch("https://api.themoviedb.org/3/movie/875828/videos" , API_OPTIONS);
    const data= await movies.json();
    console.log(data.results);
    const filterData=data.results.filter(video=>video.type === "Trailer");
    console.log(filterData);
}
useEffect(()=>{
getMovieVideo();
},[])
}