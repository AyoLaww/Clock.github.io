function Time(){
    var dateTime = new Date()
    var hrs = dateTime.getHours()
    var min = dateTime.getMinutes()

    if(min < 10){
        document.getElementById('minute').innerHTML = `0${min}`
    }else{
        document.getElementById('minute').innerHTML = min
    }

    document.getElementById('hour').innerHTML = hrs
}

setInterval(Time, 10)