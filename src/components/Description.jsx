import React from 'react';
import { Col } from 'antd';
const style = require('./Description.css');

/**
 * see https://codesandbox.io/s/92rok03kzp
 *     https://ant.design/components/page-header-cn/
 * */
export default function ({ term, children, span = 12 }) {
    return <Col span={span}>
        <div className={style.description}>
            <div className={style.term}>{term}</div>
            <div className={style.detail}>{children}</div>
        </div>
    </Col>;
};
