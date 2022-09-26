function colorHexToRgb(hex) {
  let sColor = hex.toLowerCase()
  // 十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    // 三位的颜色
    if (sColor.length === 4) {
      let sColorNew = '#'
      for (var i = 1; i < 4; i += 1) {
        // 把三位的颜色变成六位的颜色再进行处理
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    // 处理六位的颜色值
    const sColorChange = []
    for (let i = 1; i < 7; i += 2) {
        // slice的左闭右开  ,  使用"0x"+"数字"，可以将数字从16进制转换成10进制
      sColorChange.push(parseInt(sColor.slice(i, i + 2),16))
    }
    return sColorChange.join(',')
  }
  return sColor
}
console.log(colorHexToRgb("#111222"))
console.log(colorHexToRgb("#111"))
console.log(colorHexToRgb("#FA2"))
console.log(parseInt("0x"+22))//2*16+2 = 34                 ，可以将数字从16进制转换成10进制
console.log(parseInt(22,16))  //2*16+2 = 34                 ，可以将数字从16进制转换成10进制
console.log(parseInt(77,8)) //7*8 + 7 = 63                  ，可以将数字从8进制转换成10进制
console.log(parseInt(101001,2))//1+8*1+32*1 = 41            ，可以将数字从2进制转换成10进制


// 八进制转2进制，八进制转16进制
console.log(parseInt(77,8).toString(2)) // 八进制转2进制
console.log(parseInt(77,8).toString(16))// 八进制转16进制
