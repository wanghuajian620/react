/**
 * 2018-01-14  Wang huajian
*/

import request from '../utils/request';

export async function WriteEssay(params) {
  return request({
    url: '/blog/insert',
    method: 'post',
    data: params,
  });
}
