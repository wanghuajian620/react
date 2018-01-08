export default {
  namespace: 'javascript',

  state: {
    // essay: [],
    content: [
      { title: 'javascript厉害', date: '2017-01-03', tag: 'javascript', essay: 'nihao', key: 'index[0]' },
      { title: '4b', date: '2017-01-03', tag: 'js', essay: 'nihao', key: 'index[1]' },
      { title: '4b', date: '2017-01-03', tag: 'js', essay: 'nihao', key: 'index[2]' },
      { title: '4b', date: '2017-01-03', tag: 'js', essay: 'nihao', key: 'index[3]' }],
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
