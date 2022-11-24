const { Blog } = require('./model')

!(async function() {
  const res = await Blog.update({
    title: 'title ABC',
    content: 'content ABC'
  }, {
    where: {
      id: 1
    }
  })
  // res返回修改的数据条数
  console.log('update', res)
})()
