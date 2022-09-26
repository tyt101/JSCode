function isInView(){
    // vm.$el 获取实例关联的DOM元素
    const el = this.$el.getBoundingClientRect()
    // 判断四区是否超出范围，
    const notOverTop = el.top >= 0
    const notOverBottom = el.bottom < window.innerHeight
    const notOverLeft = el.left >= 0
    const notOverRight = el.right < window.innerWidth
    if(notOverTop && notOverBottom && notOverLeft && notOverRight) return true
    return false
}