const { getList } = require("../controller/blog");
const { SuccessModel } = require("../model/resModel");

const handleBlogRouter = (req, res) => {
  const { url, method } = req;
  const path = url.split("?")[0];

  if (method === "GET" && path === "/api/blog/list") {
    const author = req.query?.author || "";
    const keyword = req.query?.keyword || "";
    const resData = getList(author, keyword);
    return new SuccessModel(resData);
  }

  if (method === "POST" && path === "/api/blog/add") {
    return {
      msg: "新增接口",
    };
  }

  if (method === "POST" && path === "/api/blog/update") {
    return {
      msg: "更新接口",
    };
  }

  if (method === "POST" && path === "/api/blog/delete") {
    return {
      msg: "删除接口",
    };
  }
};

module.exports = handleBlogRouter;
