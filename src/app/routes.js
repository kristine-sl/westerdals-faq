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
                templateUrl: 'views/faculties.html', 
                resolve: {
                    $title: function() {
                        return 'Hjem'; 
                    }
                }
            } )

            .state( 'teacher', {
                url: '/foreleser',
                templateUrl: 'views/teacher.html'
            } )

            .state( 'admin', {
                url: '/admin', 
                templateUrl: 'views/admin.html'
            } )

            .state( 'faculties', {
                url: '/avdelinger',
                templateUrl: 'views/facul3ties.html', 
                controller: 'FacultiesController', 
                resolve: {
                    $title: function() {
                        return 'Avdelinger'; 
                    }
                }
            } )

            .state( 'courses', {
                url: '/fag',
                templateUrl: 'views/courses.html'
            } )

            .state( 'course', {
                url: '/fag/{id}',
                templateUrl: 'views/course.html', 
                controller: 'CourseController'
            } );

        $locationProvider.html5Mode( true );
    } );