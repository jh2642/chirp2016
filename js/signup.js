document.getElementById('btnSignup').addEventListener('click', function() {
    var formFields = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        userpic: document.getElementById('userpic').value
    }

    fetchApi('POST', '/users', formFields, function(response) {
        saveToken(response.api_token)
        redirect('/timeline.html')
    })
})
