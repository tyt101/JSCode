// 方法：扁平化 + 求和


function getSum(arr){
    return arr.toString().split(",").map(item=>Number(item)).reduce((total,i)=>total += i,0)
}
function getSum(arr){
    let res = 0
    arr.forEach(ele => {
        const isArray = Object.prototype.toString.call(ele) === '[object Array]'
        isArray?res += getSum(ele) : res += ele
    });
    return res
}
let arr=[1,2,3,[[4,5],6],7,8,9]
console.log(getSum(arr))