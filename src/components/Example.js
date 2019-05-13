import React from 'react';
import { Row, Col } from 'antd';
import Editor from '@/components/Editor';
import style from './example.css';
import debounce from 'lodash/debounce';


export default class extends React.Component {
    state = {
        timeline: null,
    };

    componentDidMount() {
        const timeline = new this.props.Timeline(this.props.Timeline.mount('#short-night-app', this.props.name));
        this.setState({
            timeline
        });

        timeline.drawInfo.events = this.props.defaultValue;
        timeline.apply().then(() => {
            timeline.draw();
        });
    }
    render() {
        const onChange = debounce(jsonCode => {
            this.state.timeline.drawInfo.events = JSON.parse(jsonCode);

            this.state.timeline.hide();
            this.state.timeline.apply().then(() => {
                this.state.timeline.draw();
            });
        }, 500);
        return <Row type='flex'>
            <Col span={12}>
                <Editor code={JSON.stringify(this.props.defaultValue, null, '    ')} onChange={onChange} />
            </Col>
            <Col span={12} className={style.timelineArea}>
                <div id="short-night-app" className={style.shortNightApp} />
            </Col>
        </Row>
    }
}
