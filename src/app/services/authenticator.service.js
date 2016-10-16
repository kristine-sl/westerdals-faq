/* eslint-disable */
angular.module( 'app' )
    .service('Authenticator', function( Session ) {
        var user;

        return {
            login: function (credentials) {
                return user = Session.post(credentials).then(function (user) {
                    localStorage.setItem('user', angular.toJson(user));
                    return user;
                });
            },
            logout: function () {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            },
            isLoggedIn: function () {
                return localStorage.getItem('user');
            },
            getUser: function () {
                return angular.fromJson(localStorage.getItem('user'));
            }
        }
    } );