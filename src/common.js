/**
 * @Author: THB
 * @Date:   2017-07-31 10:38:27 AM Monday
 * @Email:  thbwork2016@gmail.com
 * @Filename: common.js
 * @Last modified by:   THB
 * @Last modified time: 2017-08-19 17:47:10 PM Saturday
 */

// 已经放到入口路由配置文件里了，全局化了
// // 判断开发环境 还是 生产环境。
// // 用于在发布后不显示console.log/warning调试信息
//  if(window.location.host.indexOf('localhost') > -1) {
//     console.log = () => {};
//     console.warn = () => {};
//  }

const Common = {
  // 设置cookie,以及过期时间
  // 此处30天期限，过期自动删除
  setCookie: (name, value) => {
    // var Days = 30;
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + escape(value) + ';expires=' + exp.toGMTString();
  },
  // 获取cookie
  getCookie: name => {
    var arr,
      reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if ((arr = document.cookie.match(reg))) {
      return unescape(arr[2]); //cookie值
    } else {
      return false;
    }
  },
  // 删除cookie
  delCookie: name => {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = Common.getCookie(name);
    if (cval != null)
      document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
  }
};

export default Common;
