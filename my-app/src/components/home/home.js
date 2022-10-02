import './home.css'
import CustomButton from '../button/button';
import React  from 'react';


let second = 0
let timer
let Minute
let Second
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
            timer = Time(second)
            second++
            Minute = timer[0]
            Second = timer[1]
            document.getElementById("count").innerHTML=[Minute, Second]
        }, 1000)
    }
}

function stop() {
    clearInterval(intervalID)
    intervalID = undefined
}

function reset() {
    second = 0
    document.getElementById("count").innerHTML=second
    clearInterval(intervalID)
    intervalID = undefined
}

function secMinSwitch(sec, min) {
    switch (true) {
        case sec === 0: {sec = '00'; break}    
        case sec < 10: {sec = '0' + sec; break}
        default: return false     
    }  
    switch (true) {  
        case min === 0: {min = '00'; break}
        case min < 10: {min = '0' + min; break}
        default: return false
    }
    
    return [min, sec] 
}

function Time(time) {
    let minutes = 0

    if (time > 59) {
        while (time > 59) {
            minutes++
            time -= 60
        }
    }

    return secMinSwitch(time, minutes)
}