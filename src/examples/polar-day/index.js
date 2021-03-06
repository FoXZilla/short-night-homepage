import ReactDOM from "react-dom";
import React from "react";
import {Col, Layout, Row} from "antd";
import Nav from "@/components/Nav";
import Example from "@/components/Example";
import {createElementInBody} from '@/commons/functions';

import Timeline from "@foxzilla/polar-day";
import defaultValue from "./default-value";

ReactDOM.render(<Layout>
    <Layout.Header>
        <Nav />
    </Layout.Header>
    <Layout.Content>
        <Example
            name='polar-day'
            defaultValue={defaultValue}
            Timeline={Timeline}
        />
    </Layout.Content>
</Layout>, createElementInBody());
