import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism-dark.css'


export default class extends React.Component {
    state = { code: this.props.code };

    render() {
        const onValueChange = code => {
            this.setState({ code });
            this.props.onChange(code);
        };
        return (
            <Editor
                value={this.state.code}
                onValueChange={onValueChange}
                highlight={code => highlight(code, languages.json)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 18,
                    background: '#263238',
                    color: '#fff',
                }}
            />
        );
    }
}