const { User, Blog } = require('./model')

!(async function() {
  // 创建user
  const zhangsan = await User.create({
    username: 'zhangsan',
    password: '123',
    realname: '张三'
  })
  console.log('zhangsan', zhangsan.dataValues)

  // 创建博客
  const blog1 = await Blog.create({
    title: 'title A',
    content: 'content A',
    author: 'zhangsan'
  })
  console.log('blog1', blog1,dataValues)
})()
