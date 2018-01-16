/**
 * 2018-01-16 Wang huajian
*/

import request from '../utils/request';

export async function ManagerEssay(params) {
  return request({
    url: '/blog/update',
    method: 'post',
    data: params,
  });
}
