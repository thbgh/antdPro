import React, { Component } from 'react';
import { Select } from 'antd';
const Option = Select.Option;

export default class Sselect extends React.Component {

    render() {
        const children = [];
        for (let i = 10; i < 36; i++) {
          children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }

        function handleChange(value) {
          console.log(`selected ${value}`);
        }
        return(
            <Select
                mode="tags"
                style={{ width: '100%' }}
                searchPlaceholder="标签模式"
                onChange={handleChange}
            >
            {children}
            </Select>
        );
    }

}
