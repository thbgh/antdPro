import React, { Component } from 'react';
import { Button } from 'antd';
// process.env.NODE_ENV=='mock' && require('../mock/mock1.js');
import '../mock/mock1';
import $ from 'jquery';

export default class Btn extends Component {
  componentDidMount() {
    /**
         * 请求1 get 请求
         */
    $.ajax({ url: 'https://1.json', type: 'post' }).done(function(
      data,
      status
    ) {
      console.log(data);
      // console.log(data.list)
      // //方式一：使用eval解析
      // var obj = eval(data)
      // // console.dir(obj.constructor)
      // console.dir(obj)
    });

    // fetch('https://1.json', {
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         // api_name: "user.show_user_companies",
    //         // access_token: YBCommon.get_cookie('access_token'),
    //         // user_id: YBCommon.get_cookie('user_id'), from: "PC"
    //     })
    // }).then((response) => response.json()).then((json) => {
    //     console.log({json: json});
    // }).catch((error) => {
    //     console.log(error);
    //
    // });
  }

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
