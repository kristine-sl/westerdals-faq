/* eslint-disable */

angular.module( 'app', [ 'angularMoment', 'pusher-angular' ] )
    .run( function ( amMoment ) {
        amMoment.changeLocale( 'nb' );
    } )
    .controller( 'QuestionsController', function ( $http, $pusher ) {
        var vm = this;
        vm.newQuestion = '';

        $http.get( 'http://faq.flugg.space/questions' ).then( function ( results ) {
            vm.questions = results.data;
        } );

        vm.submit = function () {
            $http.post( 'http://faq.flugg.space/questions', {
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

        channel.bind( 'edit-question', function ( data ) {
            for ( var i = 0; i < vm.questions.length; i ++ ) {
                if ( vm.questions[ i ].id === data.id ) {
                    vm.questions[ i ] = data;
                }
            }
        } );

        channel.bind( 'delete-question', function ( data ) {
            for ( var i = 0; i < vm.questions.length; i ++ ) {
                if ( vm.questions[ i ].id === data.id ) {
                    vm.questions.splice( i, 1 );
                }
            }
        } );
    } );