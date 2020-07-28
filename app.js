const querystring = require('querystring');
// 这里只是放处理路由的方法，因此不要把处理blog和username的详细过程放在这里
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');

// 处理post data
const getPostData = req => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      // 如果非post方法，不需要报错，返回一个空的对象即可
      resolve({});
      return;
    }
    // 请求头不是json格式，返回空的对象
    if (req.headers['content-type'] !== 'application/json') {
      resolve({});
      return;
    }
    let postData = '';
    req.on('data', chunk => {
      postData += chunk.toString();
    });
    req.on('end', () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData));
    })
  });
  return promise;
}

const serverHandle = (req, res) => {
  // 设置返回格式为JSON
  res.setHeader('Content-type', 'application/json');

  // 可以把处理两种不同路由里写的一些重复的东西提取到这里来，例如path
  const url = req.url;
  req.path = url.split('?')[0];

  // 解析query
  req.query = querystring.parse(url.split('?')[1]);

  // 解析cookie
  req.cookie = {};
  const cookieStr = req.headers.cookie || ''; // 也是一个个键值对
  cookieStr.split(';').forEach(item => {
    if (!item) {
      return;
    }
    const arr = item.split('=');
    // 应对新增的cookie在；后有一个空格，需要删除
    const key = arr[0].trim();
    const val = arr[1].trim();
    req.cookie[key] = val;
  });

  // 处理post data
  getPostData(req).then(postData => {
    // 获取postData后，把值放到请求体
    req.body = postData;

    // 处理blog路由
    const blogResult = handleBlogRouter(req, res);
    if (blogResult) {
      blogResult.then(blogData => {
        res.end(JSON.stringify(blogData));
      })
      return;
    }

    // 处理user路由
    // const userData = handleUserRouter(req, res);
    // if (userData) {
    //   res.end(JSON.stringify(userData));
    //   return;
    // }
    const userResult = handleUserRouter(req, res);
    if (userResult) {
      userResult.then(userData => {
        res.end(JSON.stringify(userData));
      });
      return;
    }

    // 未命中路由，返回404
    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.write('404 Not Found\n');
    res.end();
  });
}

module.exports = serverHandle;
// 获取当前环境：process.env.NODE_ENV
