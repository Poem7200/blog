const Sequelize = require('sequelize')
const { User, Blog } = require('./model')

!(async function() {
  const zhangsan = await User.findOne({
    where: {
      username: 'zhangsan',
      password: '123'
    }
  })
  console.log('zhangsan', zhangsan.dataValues)

  const blog1 = await Blog.findAll({
    where: {
      author: 'zhangsan',
      title: {
        [Sequelize.Op.like]: '%title%'
      }
    },
    order: [
      ['id', 'desc']
    ]
  })
  console.log('blog', blog1.map(item => item.dataValues))
})()

