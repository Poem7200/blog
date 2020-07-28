const { login } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

// 获取cookie过期时间
const getCookieExpires = () => {
  const d = new Date();
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
  return d.toGMTString();
}

const handleUserRouter = (req, res) => {
  const method = req.method; // 获取method，即get/post

  // 登录接口
  if (method === 'GET' && req.path === '/api/user/login') {
    // const { username, password } = req.body;
    const { username, password } = req.query;
    const result = login(username, password);

    return result.then(data => {
      if (data.username) {
        // 操作cookie
        // 这里的path需要放根路径，否则默认取当前路径，其他页面访问会失效
        res.setHeader('Set-Cookie', `username=${data.username} path=/; httpOnly; expires=${getCookieExpires()}`);
        return new SuccessModel();
      }
      return new ErrorModel('登录失败，请重试！');
    });
  }

  // 用来测试cookie的接口
  if (method === 'GET' && req.path === '/api/user/login-test') {
    // 注意这里需要返回一个promise实例
    if (req.cookie.username) {
      return Promise.resolve(new SuccessModel({
        username: req.cookie.username
      }));
    }
    return Promise.resolve(new ErrorModel('尚未登录'));
  }
}

module.exports = handleUserRouter;
