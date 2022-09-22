// arr instanceof Array
function myInstanceOf(left,right){
    let proto = left.__proto__
    while(true){
        if(!proto)return false
        if(proto === right.prototype)return true
        proto = proto.__proto__
    }
}
const arr = new Array(2)
console.log(myInstanceOf(arr,String))   //false
console.log(myInstanceOf(arr,Array))    //true
console.log(myInstanceOf(arr,Object))   //true


function myInstanceOf1(left,right){
    let proto = left.__proto__
    if(!proto) return false
    if(proto === right.prototype) return true
    return myInstanceOf1(proto,right)
}
console.log(myInstanceOf1(arr,String))   //false
console.log(myInstanceOf1(arr,Array))    //true
console.log(myInstanceOf1(arr,Object))   //true
