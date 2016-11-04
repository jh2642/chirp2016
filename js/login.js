document.getElementById('btnSignin').addEventListener('click', function() {
    var formFields = {
        name: document.getElementById('name').value,
        password: document.getElementById('password').value
    }

    fetchApi('POST', '/login', formFields, function(response, statusCode) {
        // console.log(response)
//something like response.user.token, it might not be exactly that
        if (statusCode >= 200 && statusCode < 300) {
            saveToken(response.api_token)
            redirect('/timeline.html')
        }
        else {
            // console.log(response if it's a string OR response.join if it's an array)
            document.getElementById('errorMessage').innerHTML = response
        }
    })
})
