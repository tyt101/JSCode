<!-- eslint -->
代码格式校验
<!-- prettier -->
格式化代码，在没有prettier之前，主要是通过高eslint --fix和编译器自带的代码格式来格式化
<!-- stylelint -->
css样式格式校验
<!-- commitizen -->
1.配置git commit 校验规范
yarn add  @commitlint/config-conventional @commitlint/cli -D
2.添加校验格式配置文件
module.exports = {extends: ['@commitlint/config-conventional']}
3.为了在 git commit时可以自动使用commitlint 来检查我们输入的message,需要安装一个husky
yarn add husky -D
npx husky install
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'



4.提交规范
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

<type>

<type>包含 : 
feat: 新增feature
fix: 修复bug
docs: 仅仅修改了文档，如readme.md
style: 仅仅是对格式进行修改，如逗号、缩进、空格等。不改变代码逻辑。
refactor: 代码重构，没有新增功能或修复bug
perf: 优化相关，如提升性能、用户体验等。
test: 测试用例，包括单元测试、集成测试。
chore: 改变构建流程、或者增加依赖库、工具等。
revert: 版本回滚
build: 打包构建

5.帮助生成提交文档避免格式出错
每次提交都要手动输入命令，容易照成提交失败。commitizen是一款可以交互式建立提交信息的工具可以帮助生成提交文档避免格式出错
yarn add commitizen -D
// 安装cz-conventional-changelog
// 将其保存到package.json的依赖项或devDependencies
// 将config commitizen配置添加到package.json的根目录，如下所示
npx commitizen init cz-conventional-changelog --save-dev --save-exact
// 配置
scripts: {
    commit: cz
}