// /*
// 2018-01-12 Wang huajian
// */
// import { routerRedux } from 'dva/router';
// import { AdminLogin } from '../services/login';

export default {
  namespace: 'login',

  state: {
    username: '',
    password: '',
  },

  effects: {
    *writeUsername(_, { put }) {
      yield put({
        type: 'inputName',
        payload: _.value,
      });
    },
    *writePassword(payload, { put }) {
      console.log(payload, 'sss');
      yield put({
        type: 'inputPassword',
        payload: payload.value,
      });
    },
    // *logins(_, { call, put, select }) {
    //   const login = yield select(state => state.login);
    //   const result = yield call(AdminLogin, login);
    //   if (result.status === '') {
    //     yield put(routerRedux.push('/main'));
    //   }
    // },
  },

  reducers: {
    inputName(state, action) {
      return {
        ...state,
        username: action.payload,
      };
    },
    inputPassword(state, action) {
      return {
        ...state,
        password: action.payload,
      };
    },
  },


// import { routerRedux } from 'dva/router';
// import { message } from 'antd';
// import { AdminLogin } from '../services/login';

// export default {
//   namespace: 'login',

//   state: {
//     username: '',
//     passward: '',
//   },

//   effects: {
//     *adminLogin({ payload }, { call, put, select }) {
//       const login = yield select(state => state.login);
//       console.log('login+++++', login);
//       const result = yield call(AdminLogin, login);
//       console.log('result....', result.status);
//       if (result.status === 'success') {
//         yield put(routerRedux.push('/main'));
//       } else if (result.status === 'not found user') {
//         message.error('用户名不存在！');
//       } else {
//         message.error('密码错误！');
//       }
//     },

//   },

//   reducers: {
//     writeUsername(state, { payload }) {
//       return {
//         ...state,
//         username: payload.target.value,
//       };
//     },

//     writePassward(state, { payload }) {
//       return {
//         ...state,
//         passward: payload.target.value,
//       };
//     },
//   },
// };
};
