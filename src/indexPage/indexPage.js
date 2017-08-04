/**
 * @Author: THB
 * @Date:   2017-07-26 10:47:51 AM Wednesday
 * @Email:  thbwork2016@gmail.com
 * @Project: antdPro
 * @Filename: indexPage.js
 * @Last modified by:   THB
 * @Last modified time: 2017-08-03 17:04:57 PM Thursday
 */

import React from 'react';
// import { render } from 'react-dom';
import './indexPage.less';
import Common from '../common'
import registerServiceWorker from './registerServiceWorker';
// 引入React-Router模块
import {Link, IndexLink} from 'react-router'
// 引入资源
import logo from './logo.svg';
// 引入Antd的导航组件
import {Layout, Menu, Icon, Avatar, Badge, message} from 'antd';
// const { Header, Footer, Sider, Content } = Layout;
const {Header, Sider, Content} = Layout;
const SubMenu = Menu.SubMenu;

// 配置导航
// class IndexPage extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             current: '',
//             username: ''
//         }
//     }
//
//     handleClick = (e) => {
//         this.setState({
//             current: e.key
//         })
//     }
//
//     componentDidMount() {
//         this.getUser()
//     }
//
//     getUser = () => {
//         this.setState({
//             username: '海波'
//         })
//     }
//     render() {
//        return (
//            <div>
//                 <div id="leftMenu">
//                     <Link to="/"><img src={logo} width="90" id="logo" alt="logoImg"/></Link>
//                     <Menu
//                         theme="dark"
//                         onClick={this.handleClick}
//                         style={{ width: 185 }}
//                         defaultOpenKeys={['sub1', 'sub2']}
//                         defaultSelectedKeys={[this.state.current]}
//                         mode="inline">
//                         <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
//                             <Menu.Item key="1"><Link to="/login">登录</Link></Menu.Item>
//                             <Menu.Item key="2"><Link to="/button">按钮</Link></Menu.Item>
//                             <Menu.Item key="3"><Link to="/myForm">表单</Link></Menu.Item>
//                         </SubMenu>
//                         <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
//                             <Menu.Item key="4"><Link to="/button">按钮</Link></Menu.Item>
//                             <Menu.Item key="5"><Link to="/myForm">表单</Link></Menu.Item>
//                         </SubMenu>
//                     </Menu>
//                 </div>
//                 <div id="rightWrap">
//                     <Menu mode="horizontal">
//                         <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
//                             <Menu.Item key="setting:1">退出</Menu.Item>
//                         </SubMenu>
//                     </Menu>
//                     <div className="right-box">
//                         { this.props.children }
//                     </div>
//                 </div>
//             </div>
//
//
//
//
//        )
//    }
// }

export default class IndexPage extends React.Component {
    // state = {
    //   collapsed: false,
    // };
    // toggle = () => {
    //   this.setState({
    //     collapsed: !this.state.collapsed,
    //   });
    // }
    componentWillMount() {
        // 查找指定登录cookie,控制页面进入权限
        // ***** 在主页面作此限制就可以全局控制其他页面的登入权限了，因为访问任何一个路由地址时都会先加载根路由
        // 通过cookie名值，检验登入权限
        if (!Common.getCookie('isLogin')) {
            window.location.href = '#';
            message.error("你还未登录，请登入！")
        }
    };

    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            current: '',
            username: ''
        }
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    handleClick = (e) => {
        this.setState({current: e.key})
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({username: 'THB'})
    }

    render() {
        return (
            <Layout id='components-layout-demo-custom-trigger'>
                <Sider style={{
                    minHeight: '100vh'
                }} trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">
                        <Link to="/index">
                            <img src={logo} width="65" id="logo" alt="logo"/>
                        </Link>
                    </div>

                    <Menu theme="dark" defaultSelectedKeys={['7']} defaultOpenKeys={['sub2']} mode="inline" theme="dark" inlineCollapsed={this.state.collapsed}>
                        <Menu.Item key="1">
                            <Icon type="pie-chart"/>
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop"/>
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={< span > <Icon type="user"/> < span > User < /span></span >}>
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                            <Menu.Item key="6">THB</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={< span > <Icon type="team"/> < span > Team < /span></span >}>
                            {/* //选中的自定义高亮颜色
                <Menu.Item key="7"><Link to="/index/home" activeStyle={{backgroundColor: 'rgb(66, 218, 41)'}}>首页</Link></Menu.Item>
                <Menu.Item key="8"><Link to="/index/login" activeStyle={{backgroundColor: 'rgb(66, 218, 41)'}}>登录</Link></Menu.Item>
                <Menu.Item key="9"><Link to="/index/button" activeStyle={{backgroundColor: 'rgb(66, 218, 41)'}}>按钮</Link></Menu.Item>
                <Menu.Item key="10"><Link to="/index/form" activeStyle={{backgroundColor: 'rgb(66, 218, 41)'}}>表单</Link></Menu.Item>
                <Menu.Item key="11"><Link to="/index/calender" activeStyle={{backgroundColor: 'rgb(66, 218, 41)'}}>日历</Link></Menu.Item>
                <Menu.Item key="12"><Link to="/index/table" activeStyle={{backgroundColor: 'rgb(66, 218, 41)'}}>表格</Link></Menu.Item> */}

                            <Menu.Item key="7">
                                <Link to="/index/home">首页</Link>
                            </Menu.Item>
                            {/* <Menu.Item key="8"><Link to="/index/login">登录</Link></Menu.Item> */}
                            <Menu.Item key="9">
                                <Link to="/index/button">按钮</Link>
                            </Menu.Item>
                            <Menu.Item key="10">
                                <Link to="/index/form">表单</Link>
                            </Menu.Item>
                            <Menu.Item key="11">
                                <Link to="/index/calender">日历</Link>
                            </Menu.Item>
                            <Menu.Item key="12">
                                <Link to="/index/table">表格</Link>
                            </Menu.Item>
                            <Menu.Item key="13">
                                <Link to="/index/tree">树形结构</Link>
                            </Menu.Item>
                            <Menu.Item key="14">
                                <Link to="/index/test">测试</Link>
                            </Menu.Item>
                            <Menu.Item key="15">
                                <Link to="/index/chart">G2图表</Link>
                            </Menu.Item>

                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{
                        background: '#fff',
                        padding: 0
                    }}>
                        <Icon className="trigger" type={this.state.collapsed
                            ? 'menu-unfold'
                            : 'menu-fold'} onClick={this.toggle}/>
                        <Menu mode="horizontal" style={{
                            float: "right",
                            marginTop: 13
                        }}>
                            <SubMenu title={< span > <Badge count={1}><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/></Badge> < span style = {{marginLeft: 10}} > {
                                this.state.username
                            } < /span> </span >}>
                                <Menu.Item key="setting:1">
                                    <IndexLink to="/">退出</IndexLink>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Header>
                    <Content className='content' style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280
                    }}>
                        {/* Content */}
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

registerServiceWorker();
