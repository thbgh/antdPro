import React, { Component } from 'react';
import { Button } from 'antd';
// process.env.NODE_ENV=='mock' && require('../mock/mock1.js');
import '../mock/mock1';
import $ from 'jquery';

export default class Btn extends Component {
  componentDidMount() {}

  render() {
    return (
      <div style={{ padding: 10 }}>
        <h1>404</h1>
        <h3>你想看的页面已经逃离地球！</h3>
      </div>
    );
  }
}
