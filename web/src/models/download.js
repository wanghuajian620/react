/**
 *  Revision  History
 *        Initial: 2018/04/28   Wang  Huajian
 */

import { UserDownload } from '../services/download';

export default {

  namespace: 'download',

  state: {
    address: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getUrl(payload, { call, put }) {
      yield put({
        type: 'changLoading',
        payload: true,
      });
      const result = yield call(UserDownload, payload);
      if(result !== '') {
        yield put({
          type: 'saveNotices',
          payload: result,
        });
      }
    }
  },

  reducers: {
    saveNotices(state, { payload }) {
      return {
        ...state,
        address: payload
      };
    },
  },

};
