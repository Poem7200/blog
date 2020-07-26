const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method; // 获取method，即get/post
  const id = req.query.id;

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    
    const result = getList(author, keyword);
    // 注意这里返回的是一个promise，所以需要在外侧也return一下
    return result.then(listData => {
      return new SuccessModel(listData);
    });
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const result = getDetail(id);
    return result.then(data => {
      return new SuccessModel(data);
    });
  }

  // 新建博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    // TODO: 这里body里因为没有登录，没法儿拿到author，待开发登录时再改成真实数据
    req.body.author = 'shige';

    const result = newBlog(req.body);
    return result.then(data => {
      return new SuccessModel(data);
    });
  }

  // 更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body);
    return result.then(val => {
      if (val) {
        return new SuccessModel();
      } else {
        return new ErrorModel('更新博客失败');
      }
    })
  }

  // 删除博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    // TODO: 这里body里因为没有登录，没法儿拿到author，待开发登录时再改成真实数据
    const author = 'shige';

    const result = delBlog(id, author);
    return result.then(val => {
      if (val) {
        return new SuccessModel();
      } else {
        return new ErrorModel('删除博客失败');
      }
    });
  }
}

module.exports = handleBlogRouter;
