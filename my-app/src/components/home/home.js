import './home.css'
import CustomButton from '../button/button';
import React  from 'react';

let second = 0
let timer
let Minute = '00'
let Second = '00'
let MiliSecond = "00"
let miliTimer
let secondIntervalID

export default function Home() {
    return(
        <div className="Grid">
            <div className="backbox">

                <div className="time">
                    <h1 id="count">{Minute}:{Second}</h1>
                    <p id="smallCount">{MiliSecond}</p>
                </div>

                <div className="buttons">
                    <CustomButton text={"Split"} onClick={stop} backgroundColor="lightblue"></CustomButton>
                    <CustomButton id="colorchange" id2="startandpause" text={"Start"} onClick={start} backgroundColor="lightgreen"></CustomButton>
                    <CustomButton text={"Reset"} onClick={reset} backgroundColor="orange"></CustomButton>
                </div>

            </div>
        </div>
    )
}

function start() {
    if (!secondIntervalID) {
        document.getElementById("startandpause").innerHTML="Pause"
        document.getElementById("colorchange").style.backgroundColor="orange"
        secondIntervalID = setInterval(() => {
            if (miliTimer < 99){
                miliTimer++
                MiliSecond = miliSecSwitch(miliTimer)
                document.getElementById("smallCount").innerHTML=MiliSecond
            }
            else {
                miliTimer = 0
                second++
                timer = Time(second)
                document.getElementById("count").innerHTML=[timer[0] + ':' + timer[1]]
            }
        }, 10)
    }


    else {
        document.getElementById("startandpause").innerHTML="Start"
        document.getElementById("colorchange").style.backgroundColor="lightgreen"
        stop()
    }
}
function stop() {
    clearInterval(secondIntervalID)
    secondIntervalID = undefined
}

function reset() {
    second = 0
    MiliSecond = '00'
    Second = '00'
    Minute = '00'
    document.getElementById("count").innerHTML=[Minute + ':' + Second]
    document.getElementById("smallCount").innerHTML=MiliSecond
    document.getElementById("startandpause").innerHTML="Start"
    document.getElementById("colorchange").style.backgroundColor="lightgreen"
    stop()
}

function miliSecSwitch(miliTime) {
    switch (true) {
        case miliTime === 0: {miliTime = '00'; break}    
        case miliTime < 10: {miliTime = '0' + miliTime; break} 
    }
    return miliTime
}

function secMinSwitch(sec, min) {
    switch (true) {
        case sec === 0: {sec = '00'; break}    
        case sec < 10: {sec = '0' + sec; break} 
    }
    switch (true) {  
        case min === 0: {min = '00'; break}
        case min < 10: {min = '0' + min; break}
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