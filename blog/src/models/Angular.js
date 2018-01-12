export default {
  namespace: 'angular',

  state: {
    content: [
      { title: 'Angular快速入门', date: '2017-01-03', tag: 'angular', essay: 'lala', key: 'index[0]' },
      { title: 'Angular官方demo', date: '2017-01-03', tag: 'css3', essay: 'lala', key: 'index[1]' },
      { title: 'apple', date: '2017-01-03', tag: 'js', essay: 'lala', key: 'index[2]' },
      { title: 'apple', date: '2017-01-03', tag: 'angular', essay: 'lala', key: 'index[3]' },
    ],
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
