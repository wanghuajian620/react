export default {
  namespace: 'Native',

  state: {
    essay: '',
  },

  effects: {
    *Secondessay({ payload }, { put }) {
      yield put({
        type: 'apple',
        payload: '索隆是副船长',
      });
    },
  },

  reducers: {
    apple(state, { payload }) {
      return {
        ...state,
        essay: payload,
      };
    },
  },
};
