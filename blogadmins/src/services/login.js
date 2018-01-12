import request from '../utils/request';

export async function AdminLogin() {
  return request({
    url: '/adminLogin',
    method: 'post',
    data: 'params',
  });
}
