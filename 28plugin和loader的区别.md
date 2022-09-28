<!--  loader   加载器  -->
作用 : webpack将一切文件都视为模块，但是webpack只能解析js文件，如果要将其他文件也打包，就需要用到loader。
      所以loader使webpack拥有了加载和解析非js文件的能力

常用的 : style loader, css loader, less loader, sass-loader, file-loader, url-loader

扩展 : loader 解析样式的过程 ， loader解析js的过程

<!-- plugin   插件 -->
作用 : 目的在于解决loader中无法解决的问题，可以扩展webpack的功能，让webpack具有更多的灵活性。
无法解决的问题 : 比如打包优化，文件压缩，重新定义变量，功能强大到可以处理各种各样的业务

常用的 :
HtmlWebpackPlugin（生成一个 HTML 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle）
MiniCssExtractPlugin（抽离 css 样式,防止将样式打包在 js 中引起页面样式加载错乱的现象）
CompressionPlugin （启用 gzip 压缩）


<!-- loader解析js的过程 -->
js代码首先会解析成抽象语法树(AST),然后对抽象语法树进行变换操作，然后通过解释器或编译器转化成ByteCode或Machine Code

<!-- loader解析css的过程 -->
1.转换css中的url和@import为require/import
2.按commonjs模块的形式生成css文件模块内容
3.css-loader还处理css module，也是通过遍历css的ast来完成转换

