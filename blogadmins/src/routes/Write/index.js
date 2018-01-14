import React from 'react';
import { Input, Button } from 'antd';
import { connect } from 'dva';
import SimpleMDE from 'simplemde';
import marked from 'marked';
import highlight from 'highlight.js';
import styles from './index.less';
import Article from '../../components/Article';

class Write extends React.Component {
  componentDidMount() {
    this.smde = new SimpleMDE({
      element: document.getElementById('editor').childElementCount, // eslint-disable-line
      autofocus: true,
      autosave: true,
      previewRender: function (plainText) { // eslint-disable-line
        return marked(plainText, {
          renderer: new marked.Renderer(),
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight: function (code) { // eslint-disable-line
            return highlight.highlightAuto(code).value;
          },
        });
      },
    });
  }
  handleSubmit = () => {
    const writearticle = {
      writetitle: document.getElementById('title').value, // eslint-disable-line
      writearticle: this.smde.value(),
    };

    this.props.dispatch({
      type: 'write/writeessay',
      payload: writearticle,
    });
  }
  render() {
    return (
      <div>
        <Input id="title" placeholder="Please input your bref" className={styles.input} />
        <Article />
        <Button onClick={this.handleSubmit.bind(this)} type="primary">Publish</Button>
      </div>
    );
  }
}

export default connect(state => ({ write: state.write }))(Write);
