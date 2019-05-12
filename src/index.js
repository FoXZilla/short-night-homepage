import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import Nav from './components/Nav';

const {
    Header, Footer, Sider, Content,
} = Layout;


const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Layout>
        <Header>
            <Nav />
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>,
    root
);
