// ES5用Array.prototype.forEach.call(arguments,()=>{})的方法
// ES6用解构


function ES5Way(){
    let sum = 0;
    Array.prototype.forEach.call(arguments,item=>{
        sum+=item
    })
    return sum
}
console.log(ES5Way(1,2,3,4,5))



function ES6Way(...nums){
    let sum = 0
    nums.forEach(item=>{
        sum+=item
    })
    return sum
}
console.log(ES6Way(1,2,3,4,5,6))