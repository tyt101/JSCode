// 原型继承
// 缺点 : 对象实例共享所有继承的属性和方法。传教子类型实例的时候，不能传递参数，因为这个对象是一次性创建的（没办法定制化）。
function Parent(a){}

function Child(){}
Child.prototype = new Parent()

// 构造函数继承
// 缺点 : 不能够访问到父类定义在原型上的方法
function Child1(a){
    Parent.call(this,a)
}

// 组合继承
// 缺点 : 无论什么时候，都会调用两次构造函数
function Child2(a){
    Parent.call(this,a)
}
Child2.prototype = new Parent()


// 原型式继承
// 借用构造函数，在构造函数内部再创建一个临时的构造函数，将传入对象作为构造函数的原型，然后返回一个这个临时构造函数的实例
// 实际上相当于createExtends对obj实现了一次浅拷贝   
// Object.create()的原理和createExtends相似，Object.create也是将传入对象挂载在新对象的原型上。
function createExtends(obj){    
    function tempFn(){}
    tempFn.prototype = obj
    return new tempFn()
}

const obj = {
    name:'tyt',
    age:17,
    hobbies:[
        {name:'羽毛',time:2},
        {name:'乒乓',time:1},
        {name:'足球',time:4},
    ]
}

const ChildObj1 = createExtends(obj)
ChildObj1.hobbies.push({name:'篮球',time:5})
console.log(createExtends(obj).hobbies)

// 寄生式继承
// 结合原型式继承 和 工厂模式

function createExtends(obj){    
    function tempFn(){}
    tempFn.prototype = obj
    return new tempFn()
}

function createAnother(obj){
    // 这里就是原型式继承
    let clone = createExtends(obj)
    // 对它进行扩展
    clone.getAge = function(){}
    clone.showName = function(){}
}
const anotherChildObj1 = new createAnother(obj)


// 寄生组合继承
function createExtends(obj){    
    function tempFn(){}
    tempFn.prototype = obj
    return new tempFn()
}

function createAnother(child,parent){
    // 这里就是原型式继承
    let clone = createExtends(parent.prototype)
    clone.constructor = child
    Child.prototype = clone
}
function Parent(name,age){
    this.name = name
    this.age = age
}
Parent.prototype.getName = function(){}
Parent.prototype.getAge = function(){}
function Child(){
    Parent.call(this)
}


