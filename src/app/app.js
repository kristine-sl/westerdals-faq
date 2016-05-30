/* eslint-disable */

angular.module( 'app', [ 'angularMoment', 'pusher-angular' ] )
    .run( function ( amMoment ) {
        amMoment.changeLocale( 'nb' );
    } )
    .controller( 'QuestionsController', function ( $http, $pusher ) {
        var vm = this;
        vm.newQuestion = '';

        $http.get( 'http://westerdals-faq-api.dev/questions' ).then( function ( results ) {
            vm.questions = results.data;
        } );

        vm.submit = function () {
            $http.post( 'http://westerdals-faq-api.dev/questions', {
                text: vm.newQuestion
            } ).then( function ( results ) {
                vm.newQuestion = '';
            } );
        }

        var client = new Pusher( 'd0d79ccf9c37e11d0f25', {
            cluster: 'eu'
        } );
        var pusher = $pusher( client );
        var channel = pusher.subscribe( 'westerdals-faq' );

        channel.bind( 'new-question', function ( data ) {
            vm.questions.push( data );
        } );
    } );