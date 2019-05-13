import ReactDOM from "react-dom";
import React from "react";
import {Col, Layout, Row} from "antd";
import Nav from "@/components/Nav";
import Example from "@/components/Example";
import {createElementInBody} from '@/commons/functions';

import defaultValue from "./default-value";
import '@foxzilla/rules';

ReactDOM.render(<Layout>
    <Layout.Header>
        <Nav />
    </Layout.Header>
    <Layout.Content>
        <Example
            name='rules'
            defaultValue={defaultValue}
            Timeline={Rules.Timeline}
        />
    </Layout.Content>
    <Layout.Footer>Footer</Layout.Footer>
</Layout>, createElementInBody());
