import React, { Component } from 'react';
import { Button } from 'antd';
import { Row, Col } from 'antd';
// 引入React-Router模块
import { Link, IndexLink } from 'react-router';

export default class Btn extends Component {
  render() {
    return (
      <div>
        <h1>多路由页面展示</h1>
        <Row gutter={16}>
          <Col className="gutter-row" span={4}>
            <div className="gutter-box">
              <h3>
                <Link to="/index/multiRouters/button">Button按钮</Link>
              </h3>
              <h3>
                <Link to="/index/multiRouters/form">Form表单</Link>
              </h3>
              <h3>
                <Link to="/index/multiRouters/table">Table表格</Link>
              </h3>
            </div>
          </Col>
          <Col className="gutter-row" span={20}>
            <div>
              {this.props.children}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
