import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { Switch, Link, Route } from 'dva/router';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import NotFound from '../routes/Exception/404';
import Users from '../components/Users/UserList';
import styles from '../layouts/Basiclayouts.less';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

class BasicLayout extends React.PureComponent {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const layout = (
      <Layout>
        <Sider
          width={256}
          breakpoint="xs"
          // collapsedWidth="0" 不显示图标，全部折叠进去
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo}>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
            <h1>海贼王</h1>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" title={<span><Icon type="team" /><span>世界政府</span></span>}>
              <Menu.Item key="1">
                <Link to="/first">
                  海军
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/second">
                  七武海
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/third">
                  option3
                </Link>
              </Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" /><span>四皇</span></span>}>
              <Menu.Item key="5">
                <Link to="/a">
                  黑胡子
                </Link>
              </Menu.Item>
              <Menu.Item key="6">红发</Menu.Item>
              <Menu.Item key="7">百兽凯多</Menu.Item>
              <Menu.Item key="8">bigmom</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="user" /><span>帐户</span></span>}>
              <Menu.Item key="9">登录</Menu.Item>
              <Menu.Item key="10">注册</Menu.Item>
              <Menu.Item key="11">注册结果</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              style={{ cursor: 'pointer', fontSize: 25 }}
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Breadcrumb style={{ margin: '13px 0 0 18px' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 600 }}>
            <Switch>
              <Route path="/first" render={() => <div>我是成为海贼王的男人</div>} />
              <Route path="/second" render={() => <div>我是娜美</div>} />
              <Route path="/third" component={Users} />
              <Route component={NotFound} />
            </Switch>
          </Content>
          <Footer
            className={styles.Footer}
          >
            <div>
              <h4>
                <a href="http://github.com/wanghuajian620" Target="_blank">Github</a>
                <a href="http://ant.design" Target="_blank">Ant Design</a>
                <p>Copyright <Icon type="copyright" /> github.com/wanghuajian620.com</p>
              </h4>
            </div>
          </Footer>
        </Layout>
      </Layout>
    );

    return (
      <ContainerQuery query={query}>
        {params => <div className={classnames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}
export default connect()(BasicLayout);

