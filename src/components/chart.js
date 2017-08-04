/**
 * @Author: THB
 * @Date:   2017-08-03 16:54:39 PM Thursday
 * @Email:  thbwork2016@gmail.com
 * @Project: SDB
 * @Filename: chart.js
 * @Last modified by:   THB
 * @Last modified time: 2017-08-03 16:55:12 PM Thursday
 */



 import createG2 from 'g2-react';
 import { Stat } from 'g2';
 import React, { Component } from 'react';
 import ReactDOM from 'react-dom';
 import data from './data.json';

 class HigherChart extends Component {

   constructor(props, ...others) {
     super(props, ...others);
     this.Chart = createG2(chart => {
       this.chart = chart;
       chart.line().position('time*price').color('name').shape(props.shape).size(2);
       chart.render();
     });
   }

   componentWillReceiveProps(nextProps) {
     if (nextProps.shape !== this.props.shape) {
       this.chart.clear();
       this.chart.line().position('time*price').color('name').shape(nextProps.shape).size(2);
       this.chart.render();
     }
   }

   render() {
     return (<this.Chart {...this.props} />);
   }
 }

 export default class Cchart extends Component {
   state = {
     shape: 'spline',
     data: data.slice(0, data.length / 2 - 1),
     width: 500,
     height: 250,
     plotCfg: {
       margin: [10, 100, 50, 120],
     },
   }
   changeHandler = () => {
     this.setState({
       shape: 'line',
     });
   }
   render() {
     return <div>
       <HigherChart
         shape={this.state.shape}
         data={this.state.data}
         width={this.state.width}
         height={this.state.height}
         plotCfg={this.state.plotCfg}
       />
       <button onClick={this.changeHandler}>Change shape</button>
     </div>
   }
 }
