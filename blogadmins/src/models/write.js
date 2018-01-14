/**
 * 2018-01-14 Wang huajian
*/

// import { routerRedux } from 'dva/router';
import { WriteEssay } from '../services/write';

export default {
  namespace: 'write',

  state: {},

  effects: {
    * writeessay({ payload }, { call }) {
      console.log(payload, 'yyyyyyyyy');
      const params = {
        title: payload.writetitle,
        article: payload.writearticle,
      };
      console.log(params, 'bbbbbb');
      const result = yield call(WriteEssay, params);
      console.log(result, 'mmmmm');
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
