const seq = require('./db')

// 引入需要同步的数据
require('./model')

// 测试连接

// 同步数据
seq.sync({ force: true }).then(() => {
  process.exit()
})
