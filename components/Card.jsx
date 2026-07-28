import picture from "../src/assets/rain.jpg"
function Card({title = "card"}){
    return(
        <div className = "bg-white shadow-md md:max-w-sm p-4 mt-2 border-2 border-indigo-400 flex flex-wrap justify-center gap-4 mt-4">
            <img src = {picture} className = ""/>
            <button className = "bg-cyan-300 hover:bg-fuchsia-300 w-40 text-lg text-black">{title}</button>
            <p>wonderful weather with beautiful nature {title}</p>
        </div>
    )
}

export default Card