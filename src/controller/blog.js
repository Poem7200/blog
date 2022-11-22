const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: "title A",
      content: "content A",
      createTime: 1546610491112,
      author: "shige",
    },
    {
      id: 2,
      title: "title B",
      content: "content B",
      createTime: 1485114561234,
      author: "xiao",
    },
  ];
};

module.exports = {
  getList,
};
