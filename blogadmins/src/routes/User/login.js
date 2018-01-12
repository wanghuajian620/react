import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'dva';
import styles from './login.less';

const FormItem = Form.Item;


class LoginPage extends React.Component {
  handlePassword = (e) => {
    this.props.dispatch({
      type: 'login/writePassword',
      payload: e,
    });
  }
  handleUsername = (e) => {
    this.props.dispatch({
      type: 'login/writeUsername',
      payload: e,
    });
  }
  render() {
    const { login } = this.props;
    console.log(login, 'login');
    return (
      <div className={styles.background}>
        <Form onSubmit={this.handleSubmit} className={styles.loginform}>
          <FormItem>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              value={login.username}
              onChange={this.handleUsername}
            />
          </FormItem>
          <FormItem>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password" placeholder="Password"
              value={login.password}
              onChange={this.handlePassword}
            />
          </FormItem>
          <FormItem>
            <Checkbox>Remember me</Checkbox>
            <Button type="primary" htmlType="submit" className={styles.loginformbutton}>
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default connect(state => ({
  login: state.login,
}))(LoginPage);
