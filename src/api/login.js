// import request from '@/utils/request'

var fake_token = 'fake_token'

export function login(username, password) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (username === 'admin' && password === 'admin') {
        resolve({ 'token': fake_token })
      } else {
        reject({ 'error': 'invalid username/password' })
      }
    }, 500)
  })
}

export function getInfo(token) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (token === fake_token) {
        resolve({
          'roles': ['admin'],
          'name': 'admin',
          'avatar': window.location.origin + '/favicon.ico' })
      } else {
        reject({ 'error': 'invalid token' })
      }
    }, 500)
  })
}

export function logout(token) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (token === fake_token) {
        resolve()
      } else {
        reject({ 'error': 'invalid token' })
      }
    })
  })
}
