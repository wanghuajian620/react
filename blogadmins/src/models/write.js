/**
 * 2018-01-14 Wang huajian
*/

import { WriteEssay } from '../services/write';

export default {
  namespace: 'write',

  state: {},

  effects: {
    * writeessay({ payload }, { call }) {
      const params = {
        title: payload.writetitle,
        article: payload.writearticle,
      };
      const result = yield call(WriteEssay, params);
      console.log(result, 'mmmmm'); // eslint-disable-line
      if (result.status === 0) {
        // yield put(routerRedux.push('/main'));
      }
    },
  },

  reducers: {
    inputarticle(state) {
      return {
        ...state,
      };
    },
  },
};
