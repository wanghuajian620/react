/**
 *  Revision  History
 *        Initial: 2018/04/28   Wang  Huajian
 */

import request from '../utils/request';

export async function UserDownload(params) {
  return request({
    url: '',
    method: 'POST',
    data: params,
  });
}