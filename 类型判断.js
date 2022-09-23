function getType(value){
    if(value === null){
        return value + ""
    }
    if(typeof value === 'object'){
        let type = Object.prototype.toString.call(value)
        // return type.split(" ")[1]
        let str = type.split(" ")[1]
        return str.substring(0,str.lastIndexOf(']')).toLowerCase()
    }
    return typeof value
}

// console.log(Object.prototype.toString.call(getType))
// let str = '[object Function]'.split(" ")[1]
// console.log(str.substring(0,str.lastIndexOf(']')).toLowerCase())
console.log(getType(Date.now()))
console.log(getType("123"))
console.log(getType(undefined))
console.log(getType(true))
console.log(getType(null))

console.log(getType(getType))
console.log(getType(['1','3']))
console.log(getType({
    name:'tyt',
    age:18
}))
console.log(getType(/12/g))
console.log(getType(new Date()))

