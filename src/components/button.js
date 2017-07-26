import React, { Component } from 'react';
import { Button } from 'antd';

export default class Btn extends Component {
  render() {
    return (
        <div>
            <h3>Button</h3>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
        </div>
    );
  }
}
