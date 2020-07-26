const env = process.env.NODE_ENV; // 环境变量（环境信息）

// 配置
let MYSQL_CONF;

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost', 
    user: 'root', 
    password: 'xiaotaozi32', 
    port: '3306', 
    database: 'myblog'
  }
}

if (env === 'production') {
  // 暂时和开发用同一套配置，后续可以换
  MYSQL_CONF = {
    host: 'localhost', 
    user: 'root', 
    password: 'xiaotaozi32', 
    port: '3306', 
    database: 'myblog'
  }
}


module.exports = {
  MYSQL_CONF
}