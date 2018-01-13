// /*
// 2018-01-12 Wang huajian
// */
import { routerRedux } from 'dva/router';
import { AdminLogin } from '../services/login';

export default {
  namespace: 'login',

  state: {
  },

  subscriptions: {
    setup({ dispatch }) {
      dispatch({
        type: 'checkLogin',
      });
    },
  },

  effects: {
    *logins(object, { call, put }) {
      const params = {
        name: object.payload.userName,
        pass: object.payload.password,
      };
      const result = yield call(AdminLogin, params);
      if (result.status === 0) {
        console.log(object);
        if (object.payload.remember) {
          console.log(1111);
          localStorage.setItem('logined', 'true'); // eslint-disable-line
        }
        yield put(routerRedux.push('/main'));
      }
    },

    * checkLogin(_, { put }) {
      console.log('check');
      if (localStorage.getItem('logined')) { // eslint-disable-line
        yield put(routerRedux.push('/main'));
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
