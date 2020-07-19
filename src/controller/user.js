const loginCheck = (username, password) => {
  // 先用假数据跑通业务
  if (username === 'zhangsan' && password === '123') {
    return true;
  }
  return false;
}

module.exports = { loginCheck }