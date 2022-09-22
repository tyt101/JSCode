function newObj(){
    let obj = null
    // 相当于把数组的shift方法追加到arguments上，并进行调用。所以会获取到参数arguments的第一个参数(即构造函数)
    const constructorFn = Array.prototype.shift.call(arguments)
    // 判断constructorFn是否是一个函数
    if(typeof constructorFn !== 'function'){
        throw new Error("not a function")
    }
    // 创建一个空对象,并将对象的原型设置成函数的prototype
    obj = Object.create(constructorFn.prototype)
    // 让函数的this指向这个对象，并调用函数 
    const res = constructorFn.apply(obj,arguments)
    //判断返回值res，如果有返回值，且返回值的类型是一个object，就回根据object生产,如果没有返回值，就会根据构造函数内部this绑定的值生成对象
    const flag = res && (typeof res === 'object' || typeof res === 'function')
    return flag?res:obj
}
function myArray(){
    this.arr = []
    myArray.prototype.push = function(val){
        this.arr.push(val)
    }
}
const obj = newObj(myArray,123)
obj.push(1)
console.log(obj)