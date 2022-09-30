const arr = [1,2,3,4,5,6,7,8,9,20,30]


function shuffleArray(arr){
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random()* (arr.length))
        let temp = arr[0]
        arr[0] = arr[index]
        arr[index] = temp  
    }
    return arr
}
console.log(shuffleArray(arr))

