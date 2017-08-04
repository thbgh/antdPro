/**
 * @Author: THB
 * @Date:   2017-08-03 19:17:20 PM Thursday
 * @Email:  thbwork2016@gmail.com
 * @Project: SDB
 * @Filename: echart.js
 * @Last modified by:   THB
 * @Last modified time: 2017-08-04 15:27:11 PM Friday
 */

import ReactEcharts from 'echarts-for-react';
// import echarts-gl from 'echarts-gl';
import React, {Component} from 'react';

export default class MyChart extends Component {

    // ready(chart) {
    //     chart.on('click', () => {
    //         alert('click');
    //     });
    // }

    render() {
        var option1 = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: [
                    "衬衫",
                    "羊毛衫",
                    "雪纺衫",
                    "裤子",
                    "高跟鞋",
                    "袜子"
                ]
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [
                        20,
                        30,
                        46,
                        30,
                        10,
                        20
                    ]
                }
            ]
        };



        return (
            <div>
                <ReactEcharts option={option1} notMerge={true} lazyUpdate={true} theme={"theme_name"} />
                {/* <ReactEcharts option={option} notMerge={true} lazyUpdate={true} theme={"theme_name"} /> */}
            </div>
        );
    }
}
