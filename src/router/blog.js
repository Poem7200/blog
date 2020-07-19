const { getList, getDetail, newBlog, updateBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method; // 获取method，即get/post

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const listData = getList(author, keyword);
    
    // 以下的return实际上就是返回的消息体，可以直接用model来创建这个消息体
    return new SuccessModel(listData);
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id;
    const detailData = getDetail(id);
    
    // 以下的return实际上就是返回的消息体
    return new SuccessModel(detailData);
  }

  // 新建博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    const blogData = req.body;
    const data = newBlog(blogData);
    return new SuccessModel(data);
  }

  // 更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const id = req.query.id;
    const result = updateBlog(id, req.body);
    if (result) {
      return new SuccessModel;
    } else {
      return new ErrorModel('更新博客失败');
    }
  }

  // 删除博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    return {
      msg: '这是删除博客的接口'
    }
  }
}

module.exports = handleBlogRouter;
