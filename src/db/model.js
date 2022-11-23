const Sequelize = require('sequelize')
const seq = require('./db')

// User模型
const User = seq.define(
  "user", // 对应同步到数据库的users表
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    realname: {
      type: Sequelize.STRING
    }
  }
)

const Blog = seq.define(
  'blog',
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }
)

module.exports = {
  User,
  Blog
}
