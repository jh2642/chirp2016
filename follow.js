import React from 'react'
import ReactDOM from 'react-dom'

import Follow from './components/Follow'

fetchApi('GET', '/users', {}, function(response) {
    console.log(response)
    ReactDOM.render(<Follow users={response}/>, document.getElementById('followers'))
})
