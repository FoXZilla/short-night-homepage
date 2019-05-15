import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import Nav from './components/Nav';
import Footer from './components/Footer';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Layout>
        <Layout.Header>
            <Nav />
        </Layout.Header>
        <Layout.Footer><Footer /></Layout.Footer>
    </Layout>,
    root
);
