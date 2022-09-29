import './home.css'
import CustomButton from '../button/button';

let counter = 0
let intervalID

export default function Home() {
    return(
        <div className="Grid">
            <CustomButton text={"Stop"} onClick={stop}></CustomButton>
            <CustomButton text={"Start"} onClick={start}></CustomButton>
            <CustomButton text={"Reset"} onClick={reset}></CustomButton>
            <h1 id="count">{counter}</h1>
        </div>
    )
}

function start() {
    if (!intervalID) {
        intervalID = setInterval(() => {
            counter++
            document.getElementById("count").innerHTML=counter
        }, 1000)
    }
}

function stop() {
    clearInterval(intervalID)
}


function reset() {
    counter = 0
    document.getElementById("count").innerHTML=counter
    clearInterval(intervalID)
}