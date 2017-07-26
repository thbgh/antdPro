// 测试 组件之间的通信
import React from 'react';
import ToggleButton from './child1'
// 父组件
var MyContainer = React.createClass({
  getInitialState: function () {
    return {
      totalChecked: 1,
      checked1: false,
      checked2: true,
      checked3: false,
    };
  },
  onChildChanged: function (newState) {
    var newToral = this.state.totalChecked + (newState ? 1 : -1);
    this.setState({
      totalChecked: newToral
    });
  },
  render: function() {
    var totalChecked = this.state.totalChecked;
    return (
      <div>
        <div>How many are checked: {totalChecked}</div>
        <ToggleButton text="Toggle me"
          initialChecked={this.state.checked1}
          callbackParent={this.onChildChanged}
          />
        <ToggleButton text="Toggle me too"
            initialChecked={this.state.checked2}
            callbackParent={this.onChildChanged}
          />
        <ToggleButton text="And me"
          initialChecked={this.state.checked3}
          callbackParent={this.onChildChanged}
          />
      </div>
    );
  }
});

// // 子组件
// var ToggleButton = React.createClass({
//   getInitialState: function () {
//     return {
//       checked: this.props.initialChecked
//     };
//   },
//   onTextChange: function () {
//     var newState = !this.state.checked;
//     this.setState({
//       checked: newState
//     });
//     // 这里要注意：setState 是一个异步方法，所以需要操作缓存的当前值
//     this.props.callbackParent(newState);
//   },
//   render: function () {
//     // 从【父组件】获取的值
//     var text = this.props.text;
//     // 组件自身的状态数据
//     var checked = this.state.checked;
//
//     return (
//         <label>{text}: <input type="checkbox" checked={checked} onChange={this.onTextChange} /></label>
//     );
//   }
// });

export default MyContainer;
