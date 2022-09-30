// 思路
// 把数字转换成字符串
// 用temp保存当前相加结果，用res保存最后结果
// 当temp>9则进位
function bigNumAdd(a,b){
    let temp = 0
    let res = ''
    a = a.toString().split("")
    b = b.toString().split("")
    while(a.length || b.length || temp){
        temp = ~~a.pop() + ~~b.pop() + temp
        res = temp % 10 + res
        temp = temp > 9
    }   
    return res
}
console.log(bigNumAdd('900719925474099333','900719925474099199'))