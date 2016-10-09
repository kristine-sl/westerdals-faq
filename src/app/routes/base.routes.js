/* eslint-disable */
angular.module( 'app' )
    .config( function ( $urlRouterProvider, $stateProvider, $locationProvider ) {

        $urlRouterProvider.otherwise( function ( $injector, $location ) {
            var state = $injector.get( '$state' );
            state.go( '404' );
            return $location.path();
        } ); 

        $stateProvider

            .state( '404', {
                templateUrl: 'views/errors/404.html', 
            } )

            .state( 'home', {
                url: '/',
                templateUrl: 'views/course.html'
            } )

            // .state( 'faq', { 
            //     url: '/faq', 
            //     templateUrl: 'views/faq.html'
            // } ); 

        $locationProvider.html5Mode( true );
    } );