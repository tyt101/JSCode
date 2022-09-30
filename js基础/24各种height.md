<!-- clientHeight,offsetHeight,scrollHeight,offsetTop,scrollTop,innerHeight -->
clientHeight : content + padding
offsetHeight : content + padding + border
offsetTop : 当前元素顶部距离最近父元素顶部的距离，和有没有滚动条没有关系
innerHeight : 就是窗口的高度(不包含工具条和滚动条)  window.innerHeight

<!-- 在有滚动条的情况下 -->
scrollHeight : 代表当前不可见部分的元素的高度，其中可见部分就是clientHeight,所以scrollHeight >= clientHeight

scrollTop : 滚动条向下滚动的距离(元素顶部被遮挡部分的高度)