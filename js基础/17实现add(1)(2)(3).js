// 暴力解

function add(m){
    return function(n){
        return function(d){
            return m + n + d
        }
    }
}
console.log(add(1)(2)(3))



// 返回temp

function add1(m){
    var temp = function(n){
        return add1(m + n)
    }
    temp.toString = function(){
        return m
    }
    return temp
}

console.log(add1(1)(2)(3)()()a)