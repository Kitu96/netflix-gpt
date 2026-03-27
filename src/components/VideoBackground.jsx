//import {  useSelector } from "react-redux";
import { useGetMovieVideo } from "../hooks/useGetMovieVideo"
//import { addTrailerVideo } from "../utils/moviesSlice";

export default function VideoBackground({ movieId }) {
    
    // const trailerVideo=useSelector(store=>store.movie?.trailerVideo);
    useGetMovieVideo(movieId);
//     if (!trailerVideo) return null;
//    console.log("Trailer Video Key:", trailerVideo);
    return (
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
            <iframe className="w-full h-full object-cover"
            // src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=1`}
            src="https://www.youtube.com/embed/lcvUGs3xaDM?autoplay=1&mute=1"
             title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe>
           
        </div>
    )
}