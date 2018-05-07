/**
 *   Revision  History
 *         Initial:  2018/05/03  Wang Huajian
 */

import { routerRedux } from 'dva/router';
import { AdminLogin } from '../services/login';

export default {
  namespace: 'login',

  state: {
  },

  subscriptions: {
  },

  effects: {
    * logins(object, { call, put }) {
      const params = { // 这里的params 是我们输入的name和pass，目的是把他传给AdminLogin函数。
        name: object.payload.userName,
        pass: object.payload.password,
      };
      const result = yield call(AdminLogin, params); // result是request中的return response.data
      if (result.errcode === 0) {
        yield put(routerRedux.push('/home'));
      }
    },
  },

  reducers: {
}};
