/**
 *  Revision  History
 *        Initial: 2018/04/28   Wang  Huajian
 */

import { UserDownload } from '../services/download';

export default {

  namespace: 'download',

  state: {
    urls: [{
      
    }],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    * getUrl(payload, { call, put }) {
      const params = {
        url: payload
      };
      console.log(params, 'ggggg');
      const result = yield call(UserDownload, params);
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
        urls: payload
      };
    },
  },

};
