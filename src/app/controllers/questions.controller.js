/* eslint-disable */
angular.module( 'app' )
    .controller( 'QuestionsController', function ( $http, $pusher, $location, Question ) {

        var vm = this;
        vm.newQuestion = '';

        Question.all().then( function ( questions ) {
            vm.questions = questions;
        } );

        vm.getQuestions = function() {
            if( $location.path() === '/faq') {
                // Special case because it does not contain a faculty in the URL.
                // TODO: Implement when getting actual data from actual API 
            }

            return vm.questions; 
        }

        vm.submit = function () {
            Question.post(vm.newQuestion).then(function() {
                vm.newQuestion = '';
            });
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

        vm.inputActive = false; 

        vm.toggleInputActive = function() {
            vm.inputActive = !vm.inputActive; 
        }
    } );