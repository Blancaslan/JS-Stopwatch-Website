import './home.css'
import CustomButton from '../button/button';
import React  from 'react';


let counter = 0
let increment
let Second = '00'
let Minute = '00'
let intervalID

export default function Home() {
    return(
        <div className="Grid">
            <div className="backbox">
                <div className="buttons">
                    <h1 id="count">{Minute} : {Second}</h1>
                    <CustomButton text={"Stop"} onClick={stop} backgroundColor="red"></CustomButton>
                    <CustomButton text={"Start"} onClick={start} backgroundColor="lightgreen"></CustomButton>
                    <CustomButton text={"Reset"} onClick={reset} backgroundColor="orange"></CustomButton>
                </div>
            </div>
        </div>
    )
}

function start() {
    if (!intervalID) {
        intervalID = setInterval(() => {
            counter++
            increment = secondTime(counter, Minute)
            Second = increment[0]
            Minute = increment[1]
            document.getElementById("count").innerHTML=[Minute, Second]
        }, 1000)
    }
}

function stop() {
    clearInterval(intervalID)
    intervalID = undefined
}

function reset() {
    counter = 0
    document.getElementById("count").innerHTML=counter
    clearInterval(intervalID)
    intervalID = undefined
}

function secondTime(time, minute) {
    if (time === 0) {
        return time
    }
    if (time < 10) {
        time = '0' + time
        return [time, minute]
    }
    else if (time >= 60) {
        minute = minuteTime(time, minute)
        return [minute[1], minute[0]]
    }
    return [time, minute]
}

function minuteTime(seconds, minutes) {
    seconds -= 60
    minutes++
    if (seconds <= 0) {return ['00', minutes]}
    if (seconds < 10) {
        minutes = '0' + minutes
    }
    seconds = 0
    return [seconds, minutes]
}