/**
 * 2018-01-16 Wang huajian
 */

import { ManagerEssay } from '../services/manager';

export default {
  namespace: 'manager',

  state: {
    essay: [],
  },

  effects: {
    * manageressay({ payload }, { call, put }) {
      const result = yield call(ManagerEssay);
      console.log(result, 'xxxxx');
      if (result.status === 0) {
        yield put({
          type: 'manageressay',
          payload: result,
        });
      }
    },
  },

  reducers: {
    manageressay(state, action) {
      return {
        ...state,
        essay: action.payload,
      };
    },
  },
};
