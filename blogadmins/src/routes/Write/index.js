import React from 'react';
import { Input, Button, TreeSelect } from 'antd';
import { connect } from 'dva';
import SimpleMDE from 'simplemde';
import marked from 'marked';
import highlight from 'highlight.js';
import styles from './index.less';
import Article from '../../components/Article';

const Search = Input.Search;

const treeData = [{ label: 'React', value: 0, key: 0 }, { label: 'ReactNative', value: 1, key: 1 },
  { label: 'Angular', value: 2, key: 2 }, { label: 'JavaScript', value: 3, key: 3 }];

class Write extends React.Component {
  state = {
    value: undefined,
  }
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
  onChange = (value) => {
    console.log(arguments);
    this.setState({ value });
  }
  handleSubmit = () => {
    const writearticle = {
      writeclasses: document.getElementById('classes').value, // eslint-disable-line
      writetitle: document.getElementById('title').value, // eslint-disable-line
      writearticle: this.smde.value(),
    };

    this.props.dispatch({
      type: 'write/writeessay',
      payload: writearticle,
    });
  }
  handleCorrect = () => {
    this.props.dispatch({
      type: 'correct/correctessay',
      payload: 'correctarticle',
    });
  }
  render() {
    return (
      <div>
        <Search placeholder="搜索希望修改的文章" enterButton="Search" size="large" className={styles.serach} />
        <Input id="title" placeholder="Please input your title" className={styles.input} />
        <TreeSelect
          className={styles.tree} value={this.state.value} dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          treeData={treeData} placeholder="Please select classes" treeDefaultExpandAll onChange={this.onChange}
        />
        <Article />
        <Button onClick={this.handleSubmit.bind(this)} type="primary">Publish</Button>
        <Button onClick={this.handleCorrect.bind(this)} className={styles.correct}>Correct</Button>
      </div>
    );
  }
}

export default connect(state => ({ write: state.write }))(Write);
