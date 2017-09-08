import React, { Component } from 'react';
import { Button } from 'antd';
import { Link, IndexLink, hashHistory } from 'react-router';
export default class Btn extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        {/* <div style={{
                    paddingTop: 100,
                    margin: "0 auto",
                    width: 200,
                    textAlign: 'center'
                }}> */}
        <div className="noMatch">
          <h1 style={{ color: 'red' }}>404</h1>
          <h5>你想看的页面已经逃离地球</h5>
          <button
            onClick={() => {
              hashHistory.push('/index');
            }}
          >
            返回主页
          </button>
          {/* <p>
            <Link to="/index">返回主页</Link>
          </p> */}
        </div>
      </div>
    );
  }
}
