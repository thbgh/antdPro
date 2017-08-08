// 入口文件  进行Router配置
import React from 'react';
import { render } from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
// 引入React-Router模块
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// 引入组件
import Btn from './components/button';
import MyForm from './components/form';
import Login from './components/login';
import Home from './components/home';
import Ccalender from './components/calender';
import Ttable from './components/table';
import Ttree from './components/tree';
import Cchart from './components/echart';
import MyContainer from './components/test';
// import {Btn, MyForm, Login, Home, Ccalender, Ttable, Ttree, Cchart, MyContainer} from './components'
import IndexPage from './indexPage/indexPage';


// const routes = {
//   path: 'course/:courseId',
//
//   getChildRoutes(location, callback) {
//     require.ensure([], function (require) {
//       callback(null, [
//         require('./routes/Announcements'),
//         require('./routes/Assignments'),
//         require('./routes/Grades'),
//       ])
//     })
//   },
//
//   getIndexRoute(location, callback) {
//     require.ensure([], function (require) {
//       callback(null, {
//         component: require('./components/login')
//       })
//     })
//   },
//
//   // getComponents(location, callback) {
//   //   require.ensure([], function (require) {
//   //     callback(null, require('./components/Course'))
//   //   })
//   // }
// }




// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={Login} />
        <Route path="/index" component={IndexPage}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home} />
            {/* <Route path="login" component={Login} /> */}
            <Route path="form" component={MyForm} />
            <Route path="button" component={Btn} />
            <Route path="calender" component={Ccalender} />
            <Route path="table" component={Ttable} />
            <Route path="tree" component={Ttree} />
            <Route path="test" component={MyContainer} />
            <Route path="chart" component={Cchart} />
        </Route>
    </Router>
), document.getElementById('root'));


// registerServiceWorker();
