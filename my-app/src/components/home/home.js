import './home.css'
import CustomButton from '../button/button';
import React  from 'react';


let counter = 0
let seconds = '00'
let minute = '00'
let intervalID

export default function Home() {
    return(
        <div className="Grid">
            <div className="backbox">
                <div className="buttons">
                    <h1 id="count">{minute}:{seconds}</h1>
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
            seconds = secondTime(counter)
            minute = minuteTime(seconds)
            document.getElementById("count").innerHTML=[minute, seconds]
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

function secondTime(time) {
    let seconds = 0
    if (time < 60) {
        seconds = time
        if (seconds < 10) {
            seconds = '0' + seconds
        }
    }
    else {
        seconds = time - 60
    }
    return seconds
}

function minuteTime(remainingSeconds) {
    remainingSeconds -= 60
    let minute = 0
    
    if (remainingSeconds <= 0) {return '00'}
    while (remainingSeconds >= 60) {
        remainingSeconds -= 60 
        minute++
    }
    if (remainingSeconds < 10) {
        minute = '0' + remainingSeconds
    }

    return minute
}