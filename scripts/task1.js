function task1(input){
    function counting(arr, elem){
        let count = 0;
        for(var i = 0; i < arr.length; ++i){
            if(arr[i] == elem)
                count++;
        }
        return count
    }
    for(let i = 0; i < input.length; i++){
        if(counting(input, input[i]) == 1){
            return input[i];
        }
    }
}

function task2(input){
    const res = []
    for(let i = 1; i < input.length; i++){
        res.push(input.slice(0, i))
    }
    for(let i = 0; i < input.length; i++){
        res.push(input.slice(i, input.length))
    }
    return res
}

function task3(input){
    let check = 'euioa'
    let counter = 0
    for(let i = 0; i < input.length; i++){
        let element = input[i]
        if (check.includes(element)) {
            counter++
        }
    }
    return counter
}

function task4(){
    const now = new Date()
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const day = week[now.getDay()]
    let partOfDay = 'AM'
    let Hour = now.getHours()
    if (Hour > 12){
        partOfDay = 'PM'
        Hour -= 12
    }
    const Minute = now.getMinutes()
    const Second = now.getSeconds()
    return `today is : ${day}.\nCurrent time is : ${Hour} ${partOfDay} : ${Minute} : ${Second}`
}

window.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById("input");
    const btn = document.getElementById("play");

    element.addEventListener("keydown", function(e) {
        if(e.key == "Enter"){
            alert('enter is pressed')
        }
    });
    btn.addEventListener("click", function() {
        document.getElementById("audio").play()
    })
});


