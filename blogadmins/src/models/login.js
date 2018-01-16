/**
* 2018-01-12 Wang huajian
*/
import { routerRedux } from 'dva/router';
import { AdminLogin } from '../services/login';

export default {
  namespace: 'login',

  state: {
  },

  subscriptions: {
    // setup({ dispatch }) {
    //   dispatch({
    //     type: 'checkLogin',
    //   });
    // },
  },

  effects: {
    * logins(object, { call, put }) {
      const params = { // 这里的params 是我们输入的name和pass，目的是把他传给AdminLogin函数。
        name: object.payload.userName,
        pass: object.payload.password,
      };
      const result = yield call(AdminLogin, params); // result是request中的return response.data
      if (result.status === 0) {
        if (object.payload.remember) {
          localStorage.setItem('logined', 'true'); // eslint-disable-line
        }
        yield put(routerRedux.push('/main/editor'));
      }
    },

    * checkLogin(_, { put }) {
      if (localStorage.getItem('logined')) { // eslint-disable-line
        yield put(routerRedux.push('/main/editor'));
      }
    },
  },

  reducers: {
    inputName(state, action) {
      return {
        ...state,
        username: action.payload,
      };
    },
    inputPassword(state, action) {
      return {
        ...state,
        password: action.payload,
      };
    },
  },
};
