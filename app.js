// 这里只是放处理路由的方法，因此不要把处理blog和username的详细过程放在这里
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');

const serverHandle = (req, res) => {
  // 设置返回格式为JSON
  res.setHeader('Content-type', 'application/json');

  // 可以把处理两种不同路由里写的一些重复的东西提取到这里来，例如path
  const url = req.url;
  req.path = url.split('?')[0];

  // 处理blog路由
  const blogData = handleBlogRouter(req, res);
  if (blogData) {
    res.end(JSON.stringify(blogData));
    return;
  }

  // 处理user路由
  const userData = handleUserRouter(req, res);
  if (userData) {
    res.end(JSON.stringify(userData));
    return;
  }

  // 未命中路由，返回404
  res.writeHead(404, {'Content-type': 'text/plain'});
  res.write('404 Not Found\n');
  res.end();
}

module.exports = serverHandle;
// 获取当前环境：process.env.NODE_ENV
