// 1.通过递归实现
function flap(arr){
    const res = []
    for(let key of arr){
        if(typeof key !== 'object'){
            res.push(key)
        }else{
            res.push(...flap(key))
        }
    }
    return res
}
let arr = [1,2,[2,3,4],[44,4,[1,2,60,[0,0,0]]],5,6,[3,7,8]]
const res = flap(arr)
console.log('通过递归实现',res)


// 2.通过reduce实现
function flapReduce(arr){
    return arr.reduce((pre,next)=>{
        return pre.concat(Array.isArray(next)?flapReduce(next):next)
    },[])
}

const res1 = flapReduce(arr)
console.log('通过reduce实现',res1)

// 3.toString和split
const res2 = arr.toString().split(",").map(item=>parseInt(item))
console.log('toString和split',res2)

// 4.ES6的flat方法
console.log('ES5的flat方法',arr.flat(Infinity))