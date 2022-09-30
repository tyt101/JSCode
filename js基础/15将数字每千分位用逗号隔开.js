// 1 这是无小数的分割逗号
function splitNumber(num){
    let numStr = String(num).split("") 
    let len = numStr.length
    for(let i = len-3-1;i >=0;i-=3){
        numStr[i] = numStr[i].concat(",")
    }
    return numStr.join("")
}
console.log(splitNumber(1000000000000000000))
console.log(splitNumber(1232323))

// 2 有小数
function splitNumber1(num){
    let numStr = String(num).split(".")[0].split("")
    let littleStr = String(num).split(".")[1] 
    let len = numStr.length
    for(let i = len-3-1;i >=0;i-=3){
        numStr[i] = numStr[i].concat(",")
    }
    return numStr.join("")+"."+littleStr
}
console.log(splitNumber1(10000002111.222))
console.log(splitNumber1(123323.123))