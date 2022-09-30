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

<!-- webpack基本作用 -->
webpack是基于模块化打包的工具，自动化处理模块，webpack把一切都当做模块，当使用webpack来处理程序的时候，它会递归的构建一个依赖关系图，其中包括应用程序需要的每个模块，然后将这些所有模块打包成一个或多个bundle

<!-- webpack中的一些名称区别 -->    
      ####   bundle,chunk,module

      bundle : 是webpack打包出来的文件
      chunk : 是代码块。一个代码块由多个模块组成，用于代码的合并和分割
      module : 是开发中的一个单独模块，在webpack中，一切皆模块，webpack会从入口entry中递归的寻找所依赖的所有模块


<!-- webpack构建的流程 -->
      ####   初始化，编译，输出
      初始化 : 启动构建，读取，合并配置参数，加载plugin，实例化compiler(这个过程中会执行配置文件中的插件实例化语句 new Plugin()),
      
      如何写一个简单的plugin？
            ###
            1.plugin是一个具名函数
            2.会在webpack的某一个生命周期执行
            3.它原型上有一个apply方法(类似于vue的插件中install函数)
      如何写一个简单的loader?

      编译 : 从Entry出发，递归对所有依赖的模块进行编译处理(针对每个module串调用对应的loader去翻译处理，再找到该module依赖的module，递归进行编译处理)

      输出 : 对编译后的module组合成Chunk,把Chunk转换成文件，输出到文件系统