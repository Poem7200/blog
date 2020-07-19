// 这里主要放了参数处理及数据返回的方法
const getList = (authod, keyword) => {
  // 先返回一个格式正确的假数据
  return [
    {
      id: 1, 
      title: '标题1', 
      content: '内容1', 
      createTime: 1595151955704, 
      author: 'test1'
    }, 
    {
      id: 2, 
      title: '标题2', 
      content: '内容2', 
      createTime: 1595151958888, 
      author: 'test2'
    }
  ]
}

module.exports = { getList }
