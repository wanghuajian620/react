/**
 *  Revision  History
 *        Initial: 2018/04/28   Wang  Huajian
 */

import request from '../utils/request';

export async function UserDownload(params) {
  return request({
    url: '/v1/download/vid',
    method: 'POST',
    data: params,
  });
}