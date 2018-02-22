// import request from '@/utils/request'

var domains = (function() {
  var items = [
    { '_id': 1, 'name': 'Movie', 'desc': '电影', 'status': '1' },
    { '_id': 2, 'name': 'Music', 'desc': '音乐', 'status': '1' },
    { '_id': 3, 'name': 'ChitChat', 'desc': '闲聊', 'status': '0' },
    { '_id': 4, 'name': 'Cate', 'desc': '餐饮', 'status': '1' },
    { '_id': 5, 'name': 'Weather', 'desc': '天气', 'status': '1' },
    { '_id': 6, 'name': 'Map', 'desc': '电视剧', 'status': '0' },
    { '_id': 7, 'name': 'Perform', 'desc': '演出', 'status': '1' },
    { '_id': 8, 'name': 'Display', 'desc': '展览', 'status': '0' },
    { '_id': 9, 'name': 'Baike', 'desc': '百科', 'status': '0' },
    { '_id': 10, 'name': 'Relation', 'desc': '关系', 'status': '1' },
    { '_id': 11, 'name': 'Calc', 'desc': '计算器', 'status': '1' },
    { '_id': 12, 'name': 'Recipie', 'desc': '菜谱', 'status': '1' },
    { '_id': 13, 'name': 'Trip', 'desc': '旅游', 'status': '1' },
    { '_id': 14, 'name': 'Remind', 'desc': '提醒', 'status': '0' },
    { '_id': 15, 'name': 'Story', 'desc': '故事', 'status': '1' },
    { '_id': 16, 'name': 'Story', 'desc': '笑话', 'status': '0' }
  ]
  return {
    'items': items,
    'total': items.length
  }
})()

export function getList(table, params = null) {
  // return request({
  //   url: '/table/list',
  //   method: 'get',
  //   params
  // })
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      try {
        if (table !== 'domains') {
          reject({ 'error': 'cannot find table ' + table })
        }
        var ret = null
        if (params != null) {
          var per_page = Number(params.per_page)
          var start = (Number(params.page) - 1) * per_page
          ret = {
            'items': domains.items.slice(start, start + per_page),
            'total': domains.total,
            'page': params.page,
            'per_page': params.per_page }
        } else {
          ret = domains
        }
        if (ret.length <= 0) {
          reject({ 'error': 'empty list' })
        }
        resolve(ret)
      } catch (error) {
        reject({ 'error': JSON.stringify(error) })
      }
    }, 1000)
  })
}

export function handlePagination(response, table) {
  table.query.page = (response.page == null ? 1 : response.page)
  table.query.per_page = response.per_page
  table.total = response.total
}
