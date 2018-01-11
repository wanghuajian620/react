/*
2018-01-10 Wang huajian
*/

import React from 'react';
import SimpleMDE from 'simplemde';
import marked from 'marked';
import highlight from 'highlight.js';

class Article extends React.Component {
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
  render() {
    return (
      <div>
        <textarea id="editor">ni hao</textarea>
      </div>
    );
  }
}

export default Article;
