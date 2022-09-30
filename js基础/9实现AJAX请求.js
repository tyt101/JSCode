const serverURL = '/server'
const requestMethod = 'get'
const isAsync = true
let xhr = new XMLHttpRequest()
xhr.open(requestMethod,serverURL,isAsync)
// 可以设置一些请求头信息
xhr.responseType = "json";
xhr.setRequestHeader("Accept", "application/json");

// 发送
xhr.send()
// 监听
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            handleError(xhr.response)
        }
    }
}

console.log("===========================================================")


// 使用promise封装AJAX请求

function ajaxRequest(serverURL){
    const promise = new Promise((resolve,reject)=>{
        const requestMethod = 'get'
        const isAsync = true
        let xhr = new XMLHttpRequest()
        xhr.open(requestMethod,serverURL,isAsync)
        // 可以设置一些请求头信息
        xhr.responseType = "json";
        xhr.setRequestHeader("Accept", "application/json");

        // 发送
        xhr.send()
        // 监听
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    handleError(xhr.response)
                }
            }
        }
    })
    return promise
}