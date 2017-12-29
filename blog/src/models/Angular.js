export default {
  namespace: 'Angula',

  state: {
    essay: '',
  },

  effects: {
    *thirdessay(_, { put }) {
      yield put({
        type: 'pear',
        payload: '山治是个色厨子',
      });
    },
  },

  reducers: {
    pear(state, action) {
      return {
        ...state,
        essay: action.payload,
      };
    },
  },
};
