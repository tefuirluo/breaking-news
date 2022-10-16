// 封装的是具体的接口请求方法
// ! 注意: 每个方法只负责请求一个 url 地址
// 引入 自定义 axios 函数
import request from '@/utils/request'

/**
 * 注册接口
 * @param username  用户名
 * @param password  密码
 * @param repassword  再次确认密码
 * @returns {Promise 对象}
 */
export const registerAPI = ({ username, password, repassword }) => {
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username,
      password,
      repassword
    }
  })
}

/**
 * 登录接口
 * @param username  用户名
 * @param password  密码
 * @returns {Promise 对象}
 */
export const loginAPI = ({ username, password }) => {
  return request({
    url: '/api/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

/**
 * 获取用户信息
 * @returns { Promise 对象 }
 */
export const getUserInfoAPI = () => {
  return request({
    url: '/my/userinfo',
    method: 'GET'
  })
}

/**
 * 获取侧边栏数据
 * @returns {Promise 对象}
 */
export const getMenusListAPI = () => {
  return request({
    url: '/my/menus'
  })
}

/**
 * 更新 => 基本资料
 * @param id  用户 id
 * @param username  用户名
 * @param nickname  用户昵称
 * @param email 用户邮箱
 * @param user_pic  用户头像地址
 * @returns {{user_pic, nickname, id, email, username}|*}
 */
export const updateUserInfoAPI = ({ id, username, nickname, email, user_pic }) => {
  return request({
    url: '/my/userinfo',
    method: 'PUT',
    data: {
      id,
      username,
      nickname,
      email,
      user_pic
    }
  })
}

/**
 * 更新用户头像
 * @param avatar  头像图片的 base64 字符串
 * @returns {*} Promise 对象
 */
export const updateUserAvatarAPI = (avatar) => {
  return request({
    url: '/my/update/avatar',
    method: 'PATCH',
    data: {
      avatar // 头像图片的 base64 字符串
    }
  })
}

/**
 * 更新用户密码
 * @param old_pwd 旧密码
 * @param new_pwd 新密码
 * @param re_pwd  新密码-确认
 * @returns {*} Promise 对象
 */
export const updatePwdAPI = ({ old_pwd, new_pwd, re_pwd }) => {
  return request({
    url: '/my/updatepwd',
    method: 'PATCH',
    data: {
      old_pwd,
      new_pwd,
      re_pwd
    }
  })
}

/**
 * 获取文章分类
 * @returns {*} Promise 对象
 */
export const getArtCateListAPI = () => {
  return request({
    url: '/my/cate/list',
    method: 'GET'
  })
}

/**
 * 增加文章分类
 * @param cate_name 文章分类名字
 * @param cate_alias  文章分类别名
 * @returns {*} Promise 对象
 */
export const saveArtCateAPI = ({ cate_name, cate_alias }) => {
  return request({
    url: '/my/cate/add',
    method: 'POST',
    data: {
      cate_name,
      cate_alias
    }
  })
}
/**
 * 更新文章分类
 * @param id  文章分类id
 * @param cate_name 文章分类名字
 * @param cate_alias  文章分类别名
 * @returns {*} Promise 对象
 */
export const updateArtCateAPI = ({ id, cate_name, cate_alias }) => {
  return request({
    url: '/my/cate/info',
    method: 'PUT',
    data: {
      id,
      cate_name,
      cate_alias
    }
  })
}
/**
 * 删除文章分类
 * @param id  文章分类 id
 * @returns {*} Promise 对象
 */
export const delArtCartAPI = (id) => {
  return request({
    url: '/my/cate/del',
    method: 'DELETE',
    params: {
      id
    }
  })
}

/**
 * 发布文章
 * @param fd  Form data objects
 * @returns {*} Promise 对象
 */
export const uploadArticleAPI = (fd) => {
  return request({
    url: '/my/article/add',
    method: 'POST',
    data: fd
  })
}
