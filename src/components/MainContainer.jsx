import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

export default function MainContainer(){
    const movies=useSelector(store=>store.movies.nowPlayingMovie);
    if(movies===null) return;
   const mainMovies=movies[0];
    if (!mainMovies) return null; 
    const {id,original_title,overview}=mainMovies;
  
   console.log(mainMovies);
    return(
        <div className="relative w-screen h-screen">
            <VideoBackground movieId={id}/>
            <VideoTitle title={original_title} overview={overview}/>
        </div>
    )
}