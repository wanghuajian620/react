
export default {
  namespace: 'react',

  state: {
    // essay: [],
    card: [{ title: 'React快速入门', date: '2017-01-03', tag: 'angular', essay: 'lala', key: 'index[0]' },
    { title: 'React demo', date: '2017-01-03', tag: 'css3', essay: 'lala', key: 'index[1]' },
    { title: 'apple', date: '2017-01-03', tag: 'js', essay: 'lala', key: 'index[2]' },
    { title: 'apple', date: '2017-01-03', tag: 'angular', essay: 'lala', key: 'index[3]' }],
  },

  effects: {
    * firstessay({ payload }, { put }) {
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

