/* eslint-disable */
angular.module( 'app' )
    .controller( 'UsersController', function () {

        var vm = this; 

        for( var i = 0; i < 20; i++ ) {
            var name = getRandomString(8) + ' ' + getRandomString(12);
            console.log( getRandomBoolean() ); 

        }   

        function getRandomString( characters ) {
            return Math.random().toString(36).substr( 2, characters ); 
        }

        function getRandomBoolean() {
            return Math.floor( Math.random() * 2 ); 
        }
    } );