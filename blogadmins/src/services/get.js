/**
 * 2018-01-19 Wang huajian
*/

import request from '../utils/request';

export async function GetEssay(params) {
  return request({
    url: '/blog/get',
    method: 'Get',
    data: params,
  });
}
