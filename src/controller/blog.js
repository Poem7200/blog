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

const getDetail = id => {
  return {
    id: 1,
    title: '标题1',
    content: '内容1',
    createTime: 1595151955704,
    author: 'test1'
  }
}

const newBlog = (blogData = {}) => {
  // blogData是博客对象，包含title、content属性
  // 这里是用来测试blogData的，可以在postman里试试
  console.log('newBlog blogData...', blogData);
  
  return {
    id: 3 // 新建博客插入到数据表的id
  }
}

const updateBlog = (id, blogData = {}) => {
  // id为需要更新博客的id
  // blogData是一个博客对象，包含title、content等属性

  // 下面是用来测试blogData的，可以在postman里试试
  console.log('update blog', id, blogData);
  
  return true;
}

const delBlog = id => {
  // id为要删除博客的id
  return true;
}

module.exports = { getList, getDetail, newBlog, updateBlog, delBlog }
