// 1.Object.assign
const obj = {
    name:'tyt',
    age:17,
    hobbies:[
        {name:'羽毛',time:2},
        {name:'乒乓',time:1},
        {name:'足球',time:4},
    ]
}
const copyObj = {}

Object.assign(copyObj,obj)
copyObj.hobbies[0].name = '小---羽毛1'
console.log(copyObj,obj)

// 2.slice concat
// 3.扩展运算符

// 手写浅拷贝
function shallowClone(obj){
    if(typeof obj !=='object') return obj
    let newObject = Array.isArray(obj) ? [] : {};
    for(let key in obj){
        newObject[key] = obj[key]
    }
    return newObject
}
const obj1 = shallowClone(obj)
obj1.hobbies[0].name = '小---羽毛2'
console.log("obj:",obj)
console.log("obj1:",obj1)