/* eslint-disable */

angular.module( 'app', [ 'angularMoment', 'pusher-angular', 'ui.router', 'ng', 'ui.router.title' ] )
    .run( function ( amMoment ) {
        amMoment.changeLocale( 'nb' );
    } ); 