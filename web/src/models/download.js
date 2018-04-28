/**
 *  Revision  History
 *        Initial: 2018/04/28   Wang  Huajian
 */

import { UserDownload } from '../services/download';
import { link } from 'fs';

export default {

  namespace: 'download',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    * link(object, { call, put }) {
      const params = {

      };
      const result = yield call(UserDownload, params);  
    }
  },

  reducers: {
    
  },

};
