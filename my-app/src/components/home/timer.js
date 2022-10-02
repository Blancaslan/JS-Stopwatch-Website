function secondTime(time, minute) {
    if (time === 0) {
        return time
    }
    if (time < 10) {
        time = '0' + time
        return [time, minute, time]
    }
    else if (time >= 60) {
        minute = minuteTime(time, minute)
        time = 0
        return [minute[0], minute[1], time]
    }
    return [time, minute, time]
}

function minuteTime(seconds, minutes) {
    seconds -= 60
    minutes++
    if (seconds <= 0 && minutes < 10) {
        let newMin = '0' + minutes
        return ['00', newMin]
    }
    else if (seconds <= 0) {return ['00', minutes]}
    if (seconds < 10) {
        minutes = '0' + minutes
    }
    return [seconds, minutes]
}

let counter = 58
let int = 58
let minute = 0
while (int < 64) {
    counter++
    int++
    value = secondTime(counter, minute)
    counter = value[2]
    let sec = value[0]
    minute = value[1]
    console.log(sec, min)
}
