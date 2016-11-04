import React from 'react'
import ReactDOM from 'react-dom'

import Profile from './components/Profile'
import Timeline from './components/Timeline'

function logout() {
    deleteToken()
    redirect('login.html')
}

fetchApi('GET', '/profile', {}, function(response) {
    console.log(response)
    ReactDOM.render(<Profile {...response}/>, document.getElementById('profile'))
})

ReactDOM.render(<Timeline />, document.getElementById('timeline'))

document.body.addEventListener('click', function(e) {
    if(e.target.id === 'logout') {
        destroyToken()
    }
})
