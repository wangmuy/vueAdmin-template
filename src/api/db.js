import request from '@/utils/request'

export function getList(table, params = null) {
  return request({
    url: '/db/' + table,
    method: 'get',
    params
  })
}

export function putRecord(table, data) {
  return request({
    url: '/db/' + table,
    method: 'post',
    data: data
  })
}

export function editRecord(table, id, data) {
  return request({
    url: '/db/' + table + '/edit/' + id,
    method: 'post',
    data: data
  })
}

export function handlePagination(response, table) {
  table.query.page = (response.page == null ? 1 : response.page)
  table.query.per_page = response.per_page
  table.total = response.total
}
