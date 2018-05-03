/**
 * Revision History:
 *     Initial: 2018/05/03         Wang Huajian
 */

import request from '../utils/request';

export async function AdminLogin(params) {
  return request({
    url: '/v1/r/login',
    method: 'post',
    data: params,
  });
}
