﻿import React from 'react';
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
// 引入React-Router模块
import { Link, IndexLink} from 'react-router';
import { withRouter } from 'react-router'
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    componentDidMount() {
        this.props.router.setRouteLeaveHook(this.props.route, () => {
            return '确认离开本页面？？？'
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // YBCommon.YBFetch({
                //     bodyData: {
                //         api_name: 'user.user_login',
                //         user_telephone: values.telephone,
                //         user_password: values.password,
                //     },
                //     logMessage: '登录',
                //     cb_0: (json) => {
                //         console.log(json.response)
                //     }
                // })

            }
        });
    };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div>
            <Form onSubmit={this.handleSubmit} className="login-form" style={{
                maxWidth: '300px',
                margin: '10% auto',
                }}>
                  <h1 style={{textAlign: 'center',marginBottom:'30px'}}>优豹运营管理平台OSS</h1>
                <FormItem>
                  {getFieldDecorator('telephone', {
                    rules: [{ required: true, message: '请输入手机号!' }],
                  })(
                    <Input minLength="11" maxLength="11" prefix={<Icon type="phone" style={{ fontSize: 13 }} />} placeholder="手机号" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码!' }],
                  })(
                    <Input minLength="6" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                  )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
                      登录
                    </Button>
                  {/* {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>记住我</Checkbox>
                  )} */}
                  {/* <a className="login-form-forgot" href="">忘记密码</a>
                  <a href="">现在注册!</a> */}
                    <Button type="default" className="login-form-button" style={{width:'100%'}}>
                        <Link to="/index">开发进入</Link>
                    </Button>
                </FormItem>
            </Form>
        </div>
    );
  }
}

const Login = Form.create()(NormalLoginForm);
// export default Login;
export default withRouter(Login) //路由钩子，离开该路由触发 参考：https://segmentfault.com/q/1010000008511408?_ea=1668186
