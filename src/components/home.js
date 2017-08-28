/**
 * @Author: THB
 * @Date:   2017-07-26 20:50:59 PM Wednesday
 * @Email:  thbwork2016@gmail.com
 * @Filename: home.js
 * @Last modified by:   THB
 * @Last modified time: 2017-08-28 13:44:46 PM Monday
 */

import React, { Component } from 'react';
import './home.less';
import Complete from './autoComplete';
import Ccascader from './cascader';
import CCheckbox from './checkbox';
import Datep from './datePicker';
import Sselect from './select';
import Uupload from './upload';
import Ccollapse from './collapse';
import Ttree from './tree';
import Mmodal from './modal';
import { Row, Col } from 'antd';
import {
  Menu,
  Dropdown,
  Icon,
  message,
  Button,
  Steps,
  Carousel,
  Tooltip,
  Progress
} from 'antd';
import { Rate } from 'antd';
import { Switch } from 'antd';
import { Anchor } from 'antd';
import { BackTop } from 'antd';

const { Link, AnchorLink } = Anchor;

const Step = Steps.Step;

export default class Home extends Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  onCheck = (checkedKeys, info) => {
    console.log('onCheckhahahahhqa', checkedKeys, info);
  };

  render() {
    const onClick = function({ item, key, keyPath }) {
      message.info(`Click on item ${item.props.dataValue}`);
      console.log(item.props.dataValue);
    };

    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key="1" dataValue="1st menu item">
          1st menu item
        </Menu.Item>
        <Menu.Item key="2" dataValue="2nd menu item">
          2nd memu item
        </Menu.Item>
        <Menu.Item key="3" dataValue="3rd menu item">
          3rd menu item
        </Menu.Item>
      </Menu>
    );
    const onChangeSwitch = checked => {
      console.log(`switch to ${checked}`);
    };

    return (
      <div>
        <BackTop />
        {/* <Anchor>
                  <Link href="#components-anchor-demo-basic" title="Basic demo" />
                  <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
                  <Link href="#API" title="API">
                    <Link href="#Anchor-Props" title="Anchor Props" />
                    <Link href="#Link-Props" title="Link Props" />
                  </Link>
                </Anchor> */}

        <Anchor>
          <Link href="#xxx">xxxx</Link>
          <Link href="#yyy">yyyy</Link>
        </Anchor>

        <div id="xxx">xxxxxxxxx</div>
        {/* <div id="yyy">yyyyyyyyy</div> */}

        {/* <div>
                <BackTop />
                Scroll down to see the bottom-right
                <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
                button.
              </div> */}

        <div style={{ textAlign: 'center' }} className="title">
          <a href="#components-anchor-demo-basic" className="anchor">
            #
          </a>
          <h1>Home</h1>
          <h2>这是我的antd项目</h2>
        </div>
        <br />
        <br />
        <div className="gutter-example">
          <a href="#components-anchor-demo-basic" className="anchor">
            #
          </a>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">
                col-6
                <h1>Home</h1>
                <h2>这是我的antd项目</h2>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <Dropdown overlay={menu} trigger={['click']}>
          <Button className="ant-dropdown-link">
            Hover me, Click menu item <Icon type="down" />
          </Button>
        </Dropdown>
        <br />
        <br />
        <Steps>
          <Step status="finish" title="Login" icon={<Icon type="user" />} />
          <Step
            status="process"
            title="Verification"
            icon={<Icon type="solution" />}
          />
          <Step status="wait" title="Pay" icon={<Icon type="credit-card" />} />
          <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
        </Steps>
        <br />
        <br />
        <Complete />
        <br />
        <br />
        <Ccascader />
        <br />
        <br />
        <CCheckbox />
        <br />
        <br />
        <Datep />
        <br />
        <br />
        <Rate allowHalf defaultValue={2.5} />
        <br />
        <br />
        <Sselect />
        <br />
        <br />
        <div>
          <Switch
            checkedChildren="开"
            unCheckedChildren="关"
            onChange={onChangeSwitch}
          />
          <br />
          <Switch
            checkedChildren="1"
            unCheckedChildren="0"
            onChange={onChangeSwitch}
          />
          <br />
        </div>
        <div id="yyy">yyyyyyyyy</div>
        <br />
        <br />
        <Uupload />
        <br />
        <br />
        <Ccollapse />
        {/* <Carousel autoplay>
                   <div><h3>1</h3></div>
                   <div><h3>2</h3></div>
                   <div><h3>3</h3></div>
                   <div><h3>4</h3></div>
                </Carousel> */}

        <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
          <Button>Arrow points to center / 箭头指向中心</Button>
        </Tooltip>
        <br />
        <br />
        <Ttree />
        <br />
        <br />
        <Mmodal />
        <br />
        <br />
        <div>
          <Progress
            type="circle"
            percent={75}
            format={percent => `${percent} Days`}
          />
          <Progress type="circle" percent={100} format={() => 'Done'} />
        </div>
        {/* <div style={{position:"fixed",left:0,right:0,top:0,bottom:0,backgroundColor:" rgba(0, 0, 0, 0.43)"}}>
                    <p style={{color:"red"}}>弹出浮层</p>
                </div> */}
        <p style={{ color: 'red' }}>弹出浮层，已经隐藏</p>
        {/* <div className="musk-container">
                    <p  className="musk-container-content" style={{color:"red"}}>弹出浮层</p>
                </div> */}
      </div>
    );
  }
}
