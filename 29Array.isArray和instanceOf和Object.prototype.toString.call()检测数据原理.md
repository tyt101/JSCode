<!-- Array.isArray -->
其实就是通过判断Object.prototype.toString.call(arg) === '[object Array]'
<!-- instanceOf -->
原理：原型链
比如要判断arr instanceOf Object,首先会寻找arr自己的 __proto__ 是否为Object,如果不是，则寻找arr.__proto__.__proto__,即Array.prototype.__proto__,发现Array.prototype.__proto__ 为Object就返回true,直到找到Object.prototype.__proto__ 还没有找到就返回false
<!-- constructor -->
原理：原型链
实例对象的constructor指向它的构造函数，构造函数的prototype的constructor指向构造函数本身，这个构造函数的constructor又会指向这个构造函数的构造函数，且这个构造函数的prototype的constructor也指向这个构造函数的构造函数
<!-- Object.prototype.toString.call() -->
因为对象原型上的toString方法如果没有被重写会返回一个形如"[Object xxx]"的字符串，而我们平时写的例如'111'.toString()获得的结果是111是因为String继承了Object的toString()并且被重写了
Object.prototype.toString.call(obj)的意思是:用Object原型上的toString方法作用在传入的obj的上下文中

<!-- 需要注意的是 -->
Function.prototype === Function.__proto__
Object.__proto__ === Function.prototype
Function.prototype.__proto__ === Object.prototype
Object.prototype === Object.__proto__.__proto__