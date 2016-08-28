/* $urlRouterProvider */ 
angular.module( 'app' )
    .config( function ( $stateProvider, $locationProvider ) {
        $stateProvider
            .state( 'home', {
                url: '/',
                templateUrl: 'views/questions.html'
            } )
            .state( 'teacher', {
                url: '/teacher',
                templateUrl: 'views/teacher.html'
            } );

        $locationProvider.html5Mode( true );
    } );