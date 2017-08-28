/**
 * @Author: THB
 * @Date:   2017-07-27 16:33:12 PM Thursday
 * @Email:  thbwork2016@gmail.com
 * @Filename: modal.js
 * @Last modified by:   THB
 * @Last modified time: 2017-08-28 13:44:08 PM Monday
 */

import React from 'react';
import { Modal, Button } from 'antd';

export default class extends React.Component {
  state = {
    visible: false
  };
  showModal = () => {
    this.setState({ visible: true });
  };
  handleOk = e => {
    console.log(e);
    this.setState({ visible: false });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({ visible: false });
  };
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          弹出层
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
