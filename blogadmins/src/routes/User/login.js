/**
 * 2018-01-13 Wang huajian
 */
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
  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.props.dispatch({
          type: 'login/logins',
          payload: values,
        });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.background}>
        <Form onSubmit={this.handleSubmit} className={styles.loginform}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>,
            )}
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
}))(Form.create()(LoginPage));
