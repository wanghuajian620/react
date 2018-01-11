
import request from '../utils/request';

export async function queryDerivative() {
  return request({
    url: '/get',
    method: 'get',
  });
}

export async function createDerivative(params) {
  return request({
    url: '/post',
    method: 'post',
    data: params,
  });
}
