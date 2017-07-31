/**
 * @Author: THB
 * @Date:   2017-07-31 10:38:27 AM Monday
 * @Email:  thbwork2016@gmail.com
 * @Filename: common.js
 * @Last modified by:   THB
 * @Last modified time: 2017-07-31 11:50:33 AM Monday
 */

const Common = {
    // 设置cookie,以及过期时间
    // 此处30天期限，过期自动删除
    setCookie: (name, value) => {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
    },
    // 获取cookie
    getCookie: (name) => {
        var arr,
            reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            // return unescape(arr[2]);
            console.log(unescape(arr[2])) //cookie值
        } else {
            if (name == 'isLogin') {
                window.location.href = '#';
                alert("你还未登录，请登入！")
            }
        }
    }

}

export default Common
