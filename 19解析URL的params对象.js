function parseParam(url){
    const paramsArr= url.split("?")[1].split("&")
    const res = []
    paramsArr.forEach(arr => {
        let [key,val] = arr.split("=")
        val = decodeURIComponent(val)
        if(res.hasOwnProperty(key)){
            res[key] = [].concat(res[key],val)
        }else {
            if(val !== 'undefined')
            res[key] = val
            else{
                res[key] = true
            }
        }
    });
    console.log(res)
}




let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&id=232324&city=%E5%8C%97%E4%BA%AC&enabled';
parseParam(url)
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/