export default {
  namespace: 'reactnative',

  state: {
    content: [
      { title: 'ReactNative快速入门', date: '2017-01-03', tag: 'html', essay: 'nihao', key: 'index[0]' },
      { title: '2b', date: '2017-01-03', tag: 'css', essay: 'nihao', key: 'index[1]' },
      { title: '2b', date: '2017-01-03', tag: 'css3', essay: 'nihao', key: 'index[2]' },
      { title: '2b', date: '2017-01-03', tag: 'reactnative', essay: 'nihao', key: 'index[3]' }],
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
