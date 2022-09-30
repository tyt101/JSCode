// myCall和myApply的区别：参数的处理
// 因为call传入的是序列化的参数，而apply传入的第二个参数是一个数组
Function.prototype.myCall = function(context){
    if(typeof this !== 'function')
        console.log('type error')
    else{
        let context = context || window
        let args = [...arguments].slice(1)
        context.fn = this
        let res = context.fn(...args)
        delete context.fn
        return res
    }
}


Function.prototype.myApply = function(context){
    if(typeof this !== 'function')
        console.log('type error')
    else{
        let context = context || window
        let args = arguments[1]
        context.fn = this
        let res = null
        if(args)
            res = context.fn(...args)
        else 
            res = context.fn()
        delete context.fn
        return res
    }
}


Function.prototype.myBind = function(context){
    if(typeof this !== 'function')
        console.log('type error')
    else{
        let args = [...arguments].slice(1)
        let fn = this
        // 因为调用bind会返回一个函数，并且bind有一个特点是：可以进行无限bind，即fn.bind().bind().bind()....但是无论bind了多少次，this始终是第一次bind改变了的this，所以在这里需要判断一次，this instanceof Fn,来看是否是第一次进行的bind,如果不是，则不改变this指针，如果是，则改变this指针为context
        return function Fn(){
            return fn.apply(this instanceof Fn ? this : context,args.concat(...arguments))
        }
    }
}

function fn(){
    console.log(this)
}
console.log(this)
fn.bind({name:11})()
