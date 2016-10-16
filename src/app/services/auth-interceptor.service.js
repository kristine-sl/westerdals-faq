/* eslint-disable */
angular.module( 'app' )
    .service('AuthInterceptor', function() {
        return {
            request: function (request) {
                if (localStorage.getItem('token')) {
                    request.headers = request.headers || {}
                    request.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
                }

                return request
            },
            response: function (response) {
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token)
                }

                return response
            }
        }
    });