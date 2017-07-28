/**
 * @Author: THB
 * @Date:   2017-07-26 10:47:51 AM Wednesday
 * @Email:  thbwork2016@gmail.com
 * @Project: antdPro
 * @Filename: child1.js
 * @Last modified by:   THB
 * @Last modified time: 2017-07-28 17:03:35 PM Friday
 */



import React from 'react';


// 子组件
var ToggleButton = React.createClass({
  getInitialState: function () {
    return {
      checked: this.props.initialChecked
    };
  },
  onTextChange: function () {
    var newState = !this.state.checked;
    this.setState({
      checked: newState
    });
    // 这里要注意：setState 是一个异步方法，所以需要操作缓存的当前值
    this.props.callbackParent(newState);
  },
  render: function () {
    // 从【父组件】获取的值
    var text = this.props.text;
    // 组件自身的状态数据
    var checked = this.state.checked;

    return (
        <label>{text}: <input type="checkbox" checked={checked} onChange={this.onTextChange} /></label>
    );
  }
});

export default ToggleButton;
