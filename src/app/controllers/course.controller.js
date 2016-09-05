/* eslint-disable */
angular.module( 'app' )
    .controller( 'CourseController', function () {
      
        var vm = this; 

        this.active = false;

        this.toggleActive = function() {
            this.active = !this.active; 
            console.log( "hello" ); 
        }
    } );