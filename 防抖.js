// 事件被触发后wait秒后再执行回掉，如果在wait秒之内再一次被触发，会重新开始计时。
// 应用场景：可以用在一些点击请求的事件上，避免因为用户的多次点击而重复多次向后端发送请求
function debounce(fn,wait){
    let timer = null 
    let self = this
    let args = arguments
    return function(){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(self,args)
        },wait)
    }
}