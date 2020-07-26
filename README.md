# 项目说明
该项目是用来学习nodejs的使用的，用nodemon监听了项目文件的变化，使用mysql数据库
## 项目文件说明
bin：整个项目的入口文件，入口路径在package.json里通过main修改  
src：项目的一些方法、模型等  
-- conf：各种配置文件  
-- controller：数据的处理以及假数据的返回（未使用mysql前）  
-- db：mysql数据库处理方法  
-- model：成功/失败时的返回数据格式  
-- router：不同路由的识别和返回数据处理