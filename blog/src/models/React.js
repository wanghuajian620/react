// import { queryNotices } from '../services/api';

export default {
  namespace: 'Reac',

  state: {
    essay: '',
  },

  effects: {
    * Firstessay({ payload }, { put }) {
      console.log('module');
      yield put({
        type: 'firstartical',
        payload: '你好，我是海贼王路飞',
      });
    },
  },

  reducers: {
    firstartical(state, { payload }) {
      return {
        ...state,
        essay: payload,
      };
    },
  },
};

