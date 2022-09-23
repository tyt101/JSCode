const arr = [1,2,3,4,5,6,7,8]

for(let i = 0; i <arr.length; i++){
    let current = arr[i]
    let j = Math.floor(Math.random()*arr.length)
    arr[i] = arr[j]
    arr[j] = current
}
for(let key of arr){
    console.log(key)
}