/**
 * 2018-01-16 Wang huajian
 */

import React from 'react';
import { connect } from 'dva';
import Correct from '../../components/Correct';

class Manager extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'manager/manageressay',
    });
  }
  render() {
    const { essay } = this.props;
    console.log(essay, 'mmmmm');
    return (
      <div>
        {/* {
          essay.map(item => <Correct
            title={item.title}
            article={item.article}
            key={item.key}
          />)
        } */}
        <Correct />
      </div>
    );
  }
}

export default connect(state => ({ manager: state.manager }))(Manager);
