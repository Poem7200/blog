const Sequelize = require('sequelize')

const conf = {
  host: 'localhost',
  dialect: 'mysql'
}

// 创建sequelize实例
const seq = new Sequelize(
  'blog',
  'root',
  '12345678',
  conf
)

// 生产环境下使用连接池
// conf.pool = {
//   max: 5, // 连接池中最大连接数
//   min: 0,
//   idle: 10 * 1000 // 没有连接后释放的时长
// }

// 测试链接
// seq.authenticate().then(() => {
//   console.log('connect success')
// })
// .catch(() => {
//   console.log('connect failed')
// })

module.exports = seq
