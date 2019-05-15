import React from 'react';
import { Row, Col, Alert } from 'antd';
import Editor from '@/components/Editor';
import style from './example.css';
import debounce from 'lodash/debounce';


export default class extends React.Component {
    state = {
        timeline: null,
        error: null,
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

    async onEditorChange(jsonCode) {
        try {
            this.state.timeline.hide();
            this.state.timeline.drawInfo.events = JSON.parse(jsonCode);
            await this.state.timeline.apply();
            this.state.timeline.draw();

            this.setState({ error: null });
        } catch (error) {
            this.setState({ error: error });
            console.error(error);
        }
    }

    render() {
        const onChange = debounce(this.onEditorChange.bind(this), 300);

        const errorBox = this.state.error ? <div className={style.alertContainer}><Alert
            className={style.errorBox}
            message={this.state.error.name}
            description={this.state.error.message}
            type="error"
        /></div> : null;

        return <Row type='flex'>
            <Col span={12}>
                <Editor
                    code={JSON.stringify(this.props.defaultValue, null, '    ')}
                    onChange={onChange}
                />
            </Col>
            <Col span={12} className={style.timelineArea}>
                <div id="short-night-app" className={style.shortNightApp} />
                {errorBox}
            </Col>
        </Row>
    }
}
