import React from 'react';
import { Icon, Card, Tag } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './index.less';

export default class Artical extends React.PureComponent {
  static defaultProps = {
    title: '',
    date: '',
    tag: '',
    essay: '',
  }
  static propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    tag: PropTypes.string,
    essay: PropTypes.string,
  }
  render() {
    const { title, date, tag, essay } = this.props;
    return (
      <div>
        <Card
          data-aos="fade-up"
          title={title}
          className={styles.card}
          onClick={this.userclick}
        >
          <Icon
            type="calendar"
            className={styles.icon}
          />
          {date}
          <Tag
            color="#2db7f5"
            className={styles.tag}
          >
            {tag}
          </Tag>
          <Link
            to="/react/react-essay"
          >
            <p>{essay}</p>
          </Link>
        </Card>
      </div>
    );
  }
}
