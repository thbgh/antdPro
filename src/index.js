// 入口文件  进行Router配置
import React from 'react';
import { render } from 'react-dom';
// import {registerServiceWorker} from './registerServiceWorker';
// 引入React-Router模块
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// // 引入组件
// import Btn from './components/button';
// import MyForm from './components/form';
// import Login from './components/login';
// import Home from './components/home';
// import Ccalender from './components/calender';
// import Ttable from './components/table';
// import Ttree from './components/tree';
// import Cchart from './components/echart';
// import TTest from './components/test';
// // import {Btn, MyForm, Login, Home, Ccalender, Ttable, Ttree, Cchart, TTest} from './components'
// import IndexPage from './indexPage/indexPage';

//react-router2 路由按需加载资源

//参考：http://dobit.top/Detail/351.html

// 判断开发环境 还是 生产环境。
// 用于在发布后不显示console.log/warn调试信息
if (window.location.hostname == 'localhost') {
  console.log = () => {};
  console.warn = () => {};
}

const IndexPage = (location, cb) => {
  require.ensure(
    [],
    require => {
      cb(null, require('./indexPage/indexPage').default);
    },
    'IndexPage'
  );
};
const Login = (location, cb) => {
  require.ensure(
    [],
    require => {
      cb(null, require('./components/login').default);
    },
    'Login'
  );
};
const Home = (location, cb) => {
  require.ensure(
    [],
    require => {
      cb(null, require('./components/home').default);
    },
    'Home'
  );
};
const Btn = (location, cb) => {
  require.ensure(
    [],
    require => {
      cb(null, require('./components/button').default);
    },
    'Btn'
  );
};
const MyForm = (location, cb) => {
  require.ensure(
    [],
    require => {
      cb(null, require('./components/form').default);
    },
    'MyForm'
  );
};
const Ccalender = (location, cb) => {
  require.ensure(
    [],
    require => {
      cb(null, require('./components/calender').default);
    },
    'Ccalender'
  );
};
const Ttable = (location, cb) => {
  require.ensure(
    [],
    require => {
      cb(null, require('./components/table').default);
    },
    'Ttable'
  );
};
const Ttree = (location, cb) => {
  require.ensure(
    [],
    require => {
      cb(null, require('./components/tree').default);
    },
    'Ttree'
  );
};
const Cchart = (location, cb) => {
  require.ensure(
    [],
    require => {
      cb(null, require('./components/echart').default);
    },
    'Cchart'
  );
};
const TTest = (location, cb) => {
  require.ensure(
    [],
    require => {
      cb(null, require('./components/test').default);
    },
    'TTest'
  );
};

// 配置路由
render(
  <Router history={hashHistory}>
    <Route path="/" getComponent={Login} />
    <Route path="/index" getComponent={IndexPage}>
      <IndexRoute getComponent={Home} />
      <Route path="home" getComponent={Home} />
      <Route path="form" getComponent={MyForm} />
      <Route path="button" getComponent={Btn} />
      <Route path="calender" getComponent={Ccalender} />
      <Route path="table" getComponent={Ttable} />
      <Route path="tree" getComponent={Ttree} />
      <Route path="test" getComponent={TTest} />
      <Route path="chart" getComponent={Cchart} />
    </Route>

    {/* <Route path="/" getComponent={Login}/>
        <Route path="/index" getComponent={IndexPage}>
            <IndexRoute getComponent={Home}/>
            <Route path="home" getComponent={Home}/>
            <Route path="form" getComponent={MyForm}/>
            <Route path="button" getComponent={Btn}/>
            <Route path="calender" getComponent={Ccalender}/>
            <Route path="table" getComponent={Ttable}/>
            <Route path="tree" getComponent={Ttree}/>
            <Route path="test" getComponent={TTest}/>
            <Route path="chart" getComponent={Cchart}/>
        </Route> */}
  </Router>,
  document.getElementById('root')
);
