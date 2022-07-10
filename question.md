# 目录结构
- src 下是所有核心代码
	- __test__下是核心测试
- example里放着各种demo例子

# .editorconfig 作用
跨不同编译器和IDE，保持代码风格统一。编译器的插件会读取文件并格式化代码

# .gitattributes作用

.gitattributes 是一个文本文件，文件中的一行定义一个路径的若干个属性，主要用于定义每种文件的属性，以方便 git 帮我们统一管理。

格式如下
要匹配的文件模式 属性1 属性2..
```
*text=auto
```


# 持续集成是如何实现的
###  持续集成是什么？
 Circle CI
 CI既Continuous Integration，当代码提交上来有变动时，在merge之前自动进行一些流程，如：代码风格检查、单测是否通过等。CD  当被merge之后，又会自动进行一些流程，如：自动打包、自动部署等
常用的工具有Jenkins，Circle CI 等

### circle.yml 是如何配置的
https://circleci.com/
https://blog.csdn.net/dghkgjlh/article/details/108041353
