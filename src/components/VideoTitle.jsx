
export default function VideoTitle({title,overview}){
    return(
        <div className="pt-24 px-12">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="w-1/4 text-lg">{overview}</p>
            <div>
            <button className="text-white bg-gray-500 mx-3 px-7 py-1 rounded bg-opacity-50">⏩Play</button>
             <button className="text-white bg-gray-500 px-7 py-1 rounded bg-opacity-50">❕More Info</button>
             </div>
        </div>
    )
}