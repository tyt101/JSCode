const arr = [40,2,5,94,2,0,55]

for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let j = i-1
    while(j >= 0 && arr[j] >temp){
        arr[j + 1] = arr[j]
        j--
    }
    arr[j + 1] = temp
}
console.log(arr)