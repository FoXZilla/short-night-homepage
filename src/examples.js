import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Row, Col } from 'antd';
import Nav from './components/Nav';
import Editor from './components/Editor';

import 'short-night/styles.css';
import defaultValue from './examples/polar-day/default-value';
import Timeline from '@foxzilla/polar-day/Timeline';

setTimeout(() => {
}, 1000);

const root = document.createElement('div');
document.body.appendChild(root);


class App extends React.Component {
    state = {
        timeline: null,
    };

    componentDidMount() {
        const timeline = new Timeline(Timeline.mount('#short-night-app', 'polar-day'));

        this.setState({ timeline });

        timeline.drawInfo.events = defaultValue;

        timeline.apply().then(function () {
            timeline.draw();
        });
    }
    render() {
        const onChange = jsonCode => {
            this.state.timeline.drawInfo.events = JSON.parse(jsonCode);

            this.state.timeline.hide();

            this.state.timeline.apply().then(() => {
                this.state.timeline.draw();
            });
        };
        return <Layout>
            <Layout.Header>
                <Nav />
            </Layout.Header>
            <Layout.Content>
                <Row type='flex'>
                    <Col span={12}>
                        <Editor code={JSON.stringify(defaultValue, null, '    ')} onChange={onChange} />
                    </Col>
                    <Col span={12}>
                        <div id="short-night-app"></div>
                    </Col>
                </Row>
            </Layout.Content>
            <Layout.Footer>Footer</Layout.Footer>
        </Layout>
    }
}
ReactDOM.render(<App />, root);
