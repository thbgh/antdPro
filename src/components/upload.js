import React, {Component} from 'react';
import {Upload, Button, Icon} from 'antd';

export default class Uupload extends React.Component {

    render() {
        const fileList = [
            {
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            }, {
                uid: -2,
                name: 'yyy.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            }
        ];

        const props2 = {
            action: '//jsonplaceholder.typicode.com/posts/',
            listType: 'picture',
            defaultFileList: [...fileList],
            className: 'upload-list-inline'
        };
        // const uploadSty = {
        //     listItemSty: {
        //         float: left;
        //         width: 200px;
        //         margin-right: 8px;
        //     },
        //     animate-enter:{
        //         animation-name: uploadAnimateInlineIn;
        //     },
        //     animate-leave:{
        //         animation-name: uploadAnimateInlineOut;
        //     }
        // };
        return (
            <div>
                <Upload {...props2}>
                    <Button>
                        <Icon type="upload"/>
                        upload
                    </Button>
                </Upload>
            </div>
        );
    }

}
