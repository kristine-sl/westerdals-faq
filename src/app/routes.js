/* $urlRouterProvider */ 
angular.module( 'app' )
    .config( function ( $stateProvider, $locationProvider ) {
        $stateProvider
            .state( 'home', {
                url: '/',
                templateUrl: 'views/faculties.html'
            } )
            .state( 'teacher', {
                url: '/foreleser',
                templateUrl: 'views/teacher.html'
            } )
            .state( 'faculties', {
                url: '/avdelinger',
                templateUrl: 'views/faculties.html'
            } )
            .state( 'courses', {
                url: '/fag',
                templateUrl: 'views/courses.html'
            } )
            .state( 'course', {
                url: '/fag/{id}',
                templateUrl: 'views/course.html'
            } );

        $locationProvider.html5Mode( true );
    } );