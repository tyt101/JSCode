// 前面已经讲过很多次扁平化的方法了
function flap(arr){
    // 法一：
    // return arr.toString().split('').map(item=>Number(item))
    // 法二
    return arr.reduce((res,cur)=>{
        return Object.prototype.toString.call(cur) === '[object Array]' ? res.concat(...flap(cur)) : res.concat(cur)
    },[])
}
console.log(flap([1,2,[2,3,4],[44,4,[1,2,60,[0,0,0]]],5,6,[3,7,8]]))

function repeat(){
    let str = arguments[0]
    let count = arguments[1]
    // 法一
    // return (new Array(count).fill(str).join(""))
    // 法二
    return (new Array(count + 1)).join(str)
    
}

Array.prototype.push = function(){
    // push方法返回的是插入的元素且原数组被改变了。
    let argsLen = arguments.length
    let oldLen = this.length
    for(let i = oldLen; i < oldLen + argsLen; i++){
        this[i] = arguments[i-oldLen]
    }
    return this.length
}

Array.prototype.filter = function(){
    // filter方法返回的是符合条件的数组,原数组没有被改变
    let callBack = arguments[0]
    let res = []
    if(typeof callBack !== 'function'){
        throw new Error("不是函数")
    }
    for(let i = 0; i < this.length; i ++){
        callBack(this[i]) && res.push(this[i])
    }
    return res
}
Array.prototype.map = function(){
    // 和forEach相似，只是会返回一个被改变了值的数组，而forEach不会改变数组
    let res = []
    let callBack = arguments[0]
    if(typeof callBack !== 'function'){
        throw new Error("不是函数")
    }
    for(let i = 0; i < this.length; i++){
        res.push(callBack(this[i]))
    }
    return res
}
const reverse = function(str){
    let reverseStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        const ele = str[i]
        reverseStr += ele
    }
    return reverseStr
}


let arr = [1]
arr.push(1,2)
console.log(arr)
let resArr = arr.filter((item)=>{
    return item !== 1
})
console.log(resArr)

let mapArr = arr.map(item=>item = 1)
console.log(mapArr)


console.log(repeat('sss',3))
console.log(reverse("654321"))


