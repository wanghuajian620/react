/**
 * 2018-01-16 Wang huajian
 */

import { ManagerEssay } from '../services/manager';

export default {
  namespace: 'manager',

  state: {},

  effects: {
    * manageressay({ payload }, { call }) {
      const params = {
        title: payload.writetitle,
        article: payload.writearticle,
      };
      const result = yield call(ManagerEssay, params);
      if (result.status === 0) {
        // yield put(routerRedux.push('/main'));
      }
    },
  },

  reducers: {
    manageressay(state) {
      return {
        ...state,
      };
    },
  },
};
