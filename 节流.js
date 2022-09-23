// 规定了一个单位时间，在这个时间内，不管时间被触发多少次，只执行一次回掉函数。
// 应用场景：可以用到监听页面滚动的函数里，来降低时间调用频率
function throttle(fn,wait){
    let timer = null
    let self = this
    let args = arguments
    return function(){
        if(timer) return
        timer = setTimeout(()=>{
            fn.apply(self,args)
            clearTimeout(timer)
        },wait)
    }
}

function throttle(fn,wait){
    let flag
    let self = this
    let args = arguments
    return function(){
        if(flag)return
        flag = true
        setTimeout(()=>{
            fn.apply(self,args)
            flag = false
        },wait)
    }
}