
export default function VideoTitle({title,overview}){
    return(
       <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-12 text-white bg-gradient-to-r from-black/80 via-black/40 to-transparent">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="w-1/3 text-lg mt-4">{overview}</p>
            <div>
            <button className="text-black bg-white mx-3 px-7 py-1 rounded hover:bg-opacity-50">⏩Play</button>
             <button className="text-white bg-gray-500 px-7 py-1 rounded bg-opacity-50">❕More Info</button>
             </div>
        </div>
    )
}