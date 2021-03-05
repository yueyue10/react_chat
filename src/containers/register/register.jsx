import React, {Component} from 'react'
import {Radio, List, InputItem, NavBar, WingBlank, WhiteSpace} from 'antd-mobile'
import Logo from "../../components/logo/logo";

const ListItem = List.Item
export default class Register extends Component {

    render() {
        return (
            <div>
                <NavBar>硅&nbsp;谷&nbsp;聊&nbsp;天</NavBar>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem>用户名：</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem>密&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem>确认密码：</InputItem>
                        <WhiteSpace></WhiteSpace>

                        <ListItem>
                            <span>用户类型：</span>
                            <Radio>老板</Radio>
                            <Radio>大神</Radio>
                        </ListItem>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
