import React from 'react';
import { Row, Col, Alert } from 'antd';
import Editor from '@/components/Editor';
import style from './Example.css';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

export default class extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        draw: PropTypes.func,
        Timeline: PropTypes.func,
        defaultValue: PropTypes.any,
    };

    state = {
        timeline: null,
        draw: null,
        error: null,
    };

    componentDidMount() {
        if (this.props.Timeline) {
            const timeline = new this.props.Timeline(this.props.Timeline.mount('#short-night-app', this.props.name));
            this.setState({
                timeline
            });

            timeline.drawInfo.events = this.props.defaultValue;
            timeline.apply().then(() => {
                timeline.draw();
            });
        } else {
            this.props.draw('#short-night-app', this.props.defaultValue);
        }
    }

    async onEditorChange(jsonCode) {
        try {
            if (this.state.timeline) {
                this.state.timeline.hide();
                this.state.timeline.drawInfo.events = JSON.parse(jsonCode);
                await this.state.timeline.apply();
                this.state.timeline.draw();
            } else {
                this.props.draw('#short-night-app', JSON.parse(jsonCode));
            }

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
