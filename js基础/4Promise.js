const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'
function MyPromise(executor){
  const self = this
  this.status = PENDING
  this.value = null
  this.resolvedCallBacks = []
  this.rejectedCallBacks = []

  function resolve(value){
    if(value instanceof MyPromise){
      return value.then(resolve,reject)
    }
    setTimeout(()=>{
        if(self.status === PENDING){
          self.status = RESOLVED
          self.value = value
          self.resolvedCallBacks.forEach(callBack=>{
          callBack(value)
        })
      }
    },0)
  }

  function reject(value){
    setTimeout(() => {
      if(self.status === PENDING){
        self.status = REJECTED
        self.value = value
        self.rejectedCallBacks.forEach(callBack=>{
          callBack(value)
        })
      }
    }, 0);
  }
  // 代码执行
  try {
    executor(resolve,reject)
  } catch (error) {
    reject(error)
  }
}
MyPromise.prototype.then = function(onResolved,onRejected){
  if(onResolved)
  onResolved = typeof onResolved === 'function' ? onResolved : function(value){return value}
  if(onRejected)
  onRejected = typeof onRejected === 'function' ? onRejected : function(value){return value}
  // if(this.status === PENDING){
  //   this.resolvedCallBacks.push(onResolved)
  //   this.rejectedCallBacks.push(onRejected)
  // }
  // if(this.status === RESOLVED){
  //   onResolved(this.value)
  // }
  // if(this.status === REJECTED){
  //   onRejected(this.value)
  // }

  return new MyPromise((resolve,reject) => {
    this.resolvedCallBacks.push((val) => {
      try {
        const res = onResolved(val)
        res instanceof MyPromise ? res.then(resolve,reject):resolve(val)
      } catch (error) {
        reject(error)
      }
    })
    this.rejectedCallBacks.push((val) => {
      try {
        const res = onRejected(val)
        res instanceof MyPromise ? res.then(resolve,reject):reject(val)
      } catch (error) {
        reject(error)
      }
    })
  })
}

const pro = new MyPromise((resolve,reject)=>{
  resolve(3)
})
pro.then(value=>{
  console.log(value) 
  return new MyPromise((resolve,reject)=>{
    resolve(2)
  })
}).then(val=>{console.log(val)
  return new MyPromise((resolve,reject)=>{
    resolve(1)
  })
}).then(va=>console.log(va))