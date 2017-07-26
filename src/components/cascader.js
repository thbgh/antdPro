import React, {Component} from 'react';

import {Cascader} from 'antd';

export default class Ccascader extends React.Component {
    render() {
        const options = [
            {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                            {
                                value: 'xihu',
                                label: 'West Lake'
                            }
                        ]
                    }
                ]
            }, {
                value: 'jiangsu',
                label: 'Jiangsu',
                disabled: true,
                children: [
                    {
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [
                            {
                                value: 'zhonghuamen',
                                label: 'Zhong Hua Men'
                            }
                        ]
                    }
                ]
            }
        ];

        function onChange(value) {
            console.log(value);
        }
        return (<Cascader options={options} onChange={onChange} placeholder="Please select" style={{width:200}}/>);
    }
}
