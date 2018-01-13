/**
 * 2018-01-13 Wang huajian
 */
import request from '../utils/request';

export async function AdminLogin(params) {
  return request({
    url: '/login',
    method: 'post',
    data: params,
  });
}
