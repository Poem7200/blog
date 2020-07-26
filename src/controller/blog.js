const { exec } = require('../db/mysql');
// 这里主要放了参数处理及数据返回的方法
const getList = (author, keyword) => {
  // 这里SQL语句的1=1只是为了占位
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `;
  }
  sql += `order by createTime desc;`

  return exec(sql);
}

const getDetail = id => {
  const sql = `select * from blogs where id='${id}';`;
  return exec(sql).then(rows => {
    return rows[0];
  });
}

const newBlog = (blogData = {}) => {
  // blogData是一个博客对象，包含了title、content、author等属性
  const { title, content, author } = blogData;
  const createTime = Date.now();

  const sql = `insert into blogs (title, content, author, createTime)
  values ('${title}', '${content}', '${author}', ${createTime});`
  
  return exec(sql).then(insertData => {
    return {
      id: insertData.insertId
    }
  });
}

const updateBlog = (id, blogData = {}) => {
  // id为需要更新博客的id
  // blogData是一个博客对象，包含title、content等属性
  const { title, content } = blogData;

  const sql = `update blogs set title='${title}', content='${content}' where id=${id};`;
  return exec(sql).then(updateData => {
    console.log('updateData is ', updateData);
    if (updateData.affectedRows > 0) {
      return true;
    }
    return false;
  });
}

const delBlog = (id, author) => {
  // id为要删除博客的id
  const sql = `delete from blogs where id=${id} and author='${author}';`;
  return exec(sql).then(delData => {
    if (delData.affectedRows > 0) {
      return true;
    }
    return false;
  });
}

module.exports = { getList, getDetail, newBlog, updateBlog, delBlog }
