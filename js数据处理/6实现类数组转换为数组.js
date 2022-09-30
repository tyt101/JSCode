// const fakeArray=[]  ,假定这个值为一个类数组



// 调用Array的方式，改变this指向
// from
Array.prototype.from.call(fakeArray)
// slice
Array.prototype.slice.call(fakeArray)
// splice
Array.prototype.splice.call(fakeArray,0)
// concat
Array.prototype.concat.call([],fakeArray)
// 手写
function fakeArrayRevertToRealArray() {
    let res = []
    for (let i = 0; i < arguments.length; i++) {
        const ele = arguments[i];
        res.push(ele)
    }
    return res
}

console.log(fakeArrayRevertToRealArray(1,2,3,4,5,6,7,8))




// 数组和类数组的区别：
// 1.虽然数组和类数组都能够通过数组下标进行访问，但是数组可以用for...in,for循环,forEach进行遍历，而类数组只能用for循环进行遍历
// 2.类数组的类型是Object,而数组的类型为Array

// 常见类数组
// 1.arguments
// 2.document.querySelectAll(),document.getElementByClassName()等操作获取的值