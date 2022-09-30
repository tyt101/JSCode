function isGoInView(el){
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    // offsetHeight 当前元素el的顶部距离父元素顶部高度
    // scrollHeight 滚动条滚动的高度
    const top = el.offsetHeight - el.scrollHeight
    return top <= viewPortHeight + 100  //这里有个100 的距离，即将进入可视区就开始加载
}