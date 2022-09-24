// 1.使用set包裹
function uniqueSetArray(arr){
    const mySet = new Set()
    for(let key of arr){
        mySet.add(key)
    }
    return mySet
}
console.log(uniqueSetArray([1,1,2,2,3,3,4,5]))

// 使用map包裹
function uniqueMapArray(arr){
    const map = new Map()
    for(let key of arr){
        map.set(key,0)
    }
   return [...map.keys()]
}
console.log(uniqueMapArray([1,1,2,2,3,3,4,5]))

// 使用数组的indexOf

function uniqueIndexOfArray(arr){
    const res = []
    for(let key of arr){
        if(res.indexOf(key) === -1){
            res.push(key)
        }
    }
    return res
}
console.log(uniqueIndexOfArray([1,1,2,2,3,3,4,5]))

// 使用数组的some

function uniqueSomeArray(arr){
    const res = []
    for(let key of arr){
        let flag = res.some(item=>item === key)
        if(!flag){
            res.push(key)
        }
    }
    return res
}
console.log(uniqueSomeArray([1,1,2,2,3,3,4,5]))
