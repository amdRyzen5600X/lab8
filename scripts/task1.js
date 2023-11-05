function longestString(string){
    const arr = string.split(' ')
    let arr2 = []
    arr.forEach((element) => {
        arr2.push(element.length())
    })
    let max = arr2[0]
    for (let i = 0; i < arr2.length; i++) {
        if (max < arr2[i]){
            max = arr2[i]
        }
    }
    console.log(max)
}

function slsb(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(`${arr[2]}, ${arr[arr.length-2]}`)
}

function mySumm(arr){
    let res = 0
    for(let i = 0; i < arr.length; i++){
        res += arr[i]
    }
    console.log(res)
}

function oddEven(num){
    if(num % 2 == 0){
        console.log(`${num} is even`)
    }
    else{
        console.log(`${num} is odd`)
    }
}

function max(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr[0])
}

