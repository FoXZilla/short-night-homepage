import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import logoImg from '@/assets/foxzilla.png';
const style = require('./nav.css');

export default function () {
    return <Row type='flex' justify='space-between'>
        <Col className={style.logoContainer} span={4} >
            <img className={style.logoImg} src={logoImg} />
            <h1 className={style.logoText}>Short Night</h1>
        </Col>
        <Col className={style.menuContainer} span={6}>
            <Menu mode='horizontal' theme='dark' selectable={false}>
                <Menu.Item key='home'><a href="/">Home</a></Menu.Item>
                <Menu.Item key='guide'><a href="https://github.com/FoXZilla/short-night/wiki" target='_blank'>Guide</a></Menu.Item>
                <Menu.SubMenu key='examples' title={["Examples ", <Icon type="down" key='icon' />]}>
                    <Menu.Item key='rules'>Rules</Menu.Item>
                    <Menu.Item key='polar-day'>Polar day</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key='github'><a href="https://github.com/FoXZilla/short-night-homepage" target='_blank'><Icon type="github" /></a></Menu.Item>
            </Menu>
        </Col>
    </Row>
}