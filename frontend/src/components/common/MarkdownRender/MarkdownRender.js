import React, { Component } from 'react'
import styles from './MarkdownRender.scss';
import classNames from 'classnames/bind';

import marked from 'marked';

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
// http://prismjs.com/#languages-list 참고
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-javascript.min.js'
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-css.min.js';

const cx = classNames.bind(styles);

class MarkdownRender extends Component {
  state = {
      html: ''
  }
  
  renderMarkdown = () => {
      const { markdown } = this.props;
      if (!markdown) {
          this.setState({html: ''});
          return;
      }

      this.setState({
          html: marked(markdown, {
              breaks: true,
              sanitize: true
          })
      });
  }

  constructor(props) {
      super(props);
      const { markdown } = props;
      // SSR에서도 마크다운 처리가 되도록 constructor에서도 구현
      this.state = {
          html: markdown ? marked(props.markdown, {breaks: true, sanitize: true}) : ''
      }
  }

  componentDidUpdate(prevProps, prevState) {
      // if markdown Changed, call renderMarkdown
      if (prevProps.markdown !== this.props.markdown) {
          this.renderMarkdown();
      }

      // if state Changed, CODE-HIGHLIGHTING
      if (prevState.html !== this.state.html) {
          Prism.highlightAll();
      }
  }
  
  componentDidMount() {
      Prism.highlightAll();
  }

  
  render() {
    const { html } = this.state;
    const markup = {
        __html: html
    };

    return (
      <div className={cx('markdown-render')} dangerouslySetInnerHTML={markup} />
    );
  }
}

export default MarkdownRender;