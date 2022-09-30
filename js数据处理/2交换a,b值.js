// 法一
function swap(a,b){
    let temp = a
    a = b
    b = temp
}

//法二
function swap(a,b){
    a = a + b
    b = a - b
    a = a - b
}