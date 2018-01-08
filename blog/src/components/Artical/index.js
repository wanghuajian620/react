import React from 'react';
import { Layout, Icon, Card, BackTop, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'dva';

import styles from './index.less';

const { Content } = Layout;

class Artical extends React.Component {
  render() {
    const { card, react, reactnative, javascript } = this.props;
    return (
      <div>
        <Content className={styles.content}>
          <div className={styles.logo}>
            <Link to="/">
              <img src="http://www.logobook.com/wp-content/uploads/2017/03/MorseLife_logo.svg" alt="" />
            </Link>
            {console.log(card, 'mm')}
            {console.log(react, 'qweqwe')}
            {console.log(reactnative, 'bbbbbbbb')}
            {console.log(javascript, 'vvvvvvvv')}
          </div>
          {
            card.content.map(item =>
              (
                <Card
                  data-aos="fade-up"
                  title={item.title}
                  key={item.key}
                  className={styles.card}
                  onClick={this.usrclick}
                >
                  <Icon type="calendar" className={styles.icon} />
                  {item.date}
                  <Tag color="#2db7f5" className={styles.tag}>{item.tag}</Tag>
                  <Link to="essay">
                    <p>{item.essay}</p>
                  </Link>
                </Card>
              ),
            )
          }
          <BackTop visibilityHeight={200} />
        </Content>
      </div>
    );
  }
}

export default connect(state => ({
  card: state.angular,
  react: state.react,
  reactnative: state.reactnative,
  javascript: state.javascript,
}))(Artical);

