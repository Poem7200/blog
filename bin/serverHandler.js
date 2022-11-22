const handleBlogRouter = require("../src/router/blog");

const serverHandler = (req, res) => {
  // res.setHeader("Content-type", "application/json");

  const data = handleBlogRouter(req, res);

  res.end(JSON.stringify(data));
};

module.exports = serverHandler;
