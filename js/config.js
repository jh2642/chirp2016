// API Host
//var api = 'https://arcane-shore-86443.herokuapp.com'
var api = 'https://923ad329.ngrok.io'
var tokenId = 'api_token'
var token = sessionStorage.getItem(tokenId)

// Utilities
// endpoint ... /users
// formFields ... {name: 'Joe'}

function fetchApi(method, endpoint, formFields, callback) {
  var statusCode,
      payload
  if (method === undefined) {
    method = 'POST'
  }

  if (formFields === undefined || formFields === null || formFields === '') {
    formFields = {}
  }

  payload = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (method.toUpperCase() === 'POST') {
    formFields[tokenId] = token
	  payload.body = JSON.stringify(formFields)
  }
  else {
    endpoint += '?' + tokenId + '=' + encodeURIComponent(token)
  }

  fetch(api + endpoint, payload)
    .then(function(response) {
	     statusCode = response.status
      return response.json()
    })
    .then(function(data) {
      if (typeof callback === 'function') {
          callback(data, statusCode)
      }
    })
}

function saveToken(token) {
  sessionStorage.setItem(tokenId, token)
}

function destroyToken() {
  sessionStorage.removeItem(tokenId)
}

function redirect(url) {
  window.location.href = url
}
