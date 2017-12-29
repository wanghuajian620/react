export default {
  namespace: 'Java',

  state: {
    essay: '',
  },

  effects: {
    *fouressay(_, { put }) {
      yield put({
        type: 'banana',
        payload: '乔巴是个驯鹿',
      });
    },
  },

  reducers: {
    banana(state, action) {
      return {
        ...state,
        essay: action.payload,
      };
    },
  },
};
