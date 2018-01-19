import { GetEssay } from '../services/get';

export default {
  namespace: 'get',

  state: {
    essay: [],
  },

  effects: {
    * manageressay({ payload }, { call, put }) {
      const params = {
        title: '',
        classes: 'react',
      };
      const result = yield call(GetEssay, params);
      console.log(result, 'xxxxx');
      if (result.status === 0) {
        yield put({
          type: 'getessay',
          payload: result,
        });
      }
    },
  },

  reducers: {
    getessay(state, action) {
      return {
        ...state,
        essay: action.payload,
      };
    },
  },
};
