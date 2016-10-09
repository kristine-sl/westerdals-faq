/* eslint-disable */

angular.module( 'app', [ 'angularMoment', 'pusher-angular', 'ui.router', 'ng', 'ui.router.title'  ] )
    .run( function ( amMoment, $rootScope, Faculty ) {
        amMoment.changeLocale( 'nb' );

        $rootScope.$on('$stateChangeSuccess', function() {
            $rootScope.colorKey = Faculty.getCurrentFaculty();
        });
    } ); 