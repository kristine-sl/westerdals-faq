/* eslint-disable */
angular.module( 'app' )
    .config( function ( $stateProvider ) {

        $stateProvider
            .state( 'login', {
                url: '/login',
                templateUrl: 'views/login.html'
            } );
    } ); 