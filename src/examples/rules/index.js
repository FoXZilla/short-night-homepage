import ReactDOM from "react-dom";
import React from "react";
import {PageHeader, Layout, Row} from "antd";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Description from "@/components/Description";
import Example from "@/components/Example";
import {createElementInBody} from '@/commons/functions';
import packageJson from '@foxzilla/rules/package.json';

import defaultValue from "./default-value";
import '@foxzilla/rules';

ReactDOM.render(<Layout>
    <Layout.Header>
        <Nav />
    </Layout.Header>
    <Layout.Content>
        <PageHeader title="Rules">
            <Row>
                <Description term="Created">{packageJson.author}</Description>
                <Description term="Version">{packageJson.version}</Description>
                <Description term="Homepage">
                    <a href={packageJson.homepage} target='_blank'>Here</a>
                </Description>
            </Row>
        </PageHeader>
        <Example
            name='rules'
            defaultValue={defaultValue}
            Timeline={Rules.Timeline}
        />
    </Layout.Content>
    <Layout.Footer><Footer /></Layout.Footer>
</Layout>, createElementInBody());
