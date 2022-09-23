// 1.JSON.parse(JSON.stringify(str))

// 2.lodash库的 _deepClone

// 3.MessageChannel的port1,port2,

// 4.手写deepClone

function deepClone(obj){
    if(typeof obj !== 'object'){
        return obj
    }
    let newObj = Array.isArray(obj) ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] === 'object') {
                newObj[key] = deepClone(obj[key])
            }else{
                newObj[key] = obj[key]
            }
        }
    }
    return newObj
}
const obj = {
    name:'tyt',
    age:17,
    hobbies:[
        {name:'羽毛',time:2},
        {name:'乒乓',time:1},
        {name:'足球',time:4},
    ]
}
const copyObj = deepClone(obj)
copyObj.hobbies[0].name = '1234567'
console.log(copyObj,obj)