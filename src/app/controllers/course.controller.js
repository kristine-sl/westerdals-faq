/* eslint-disable */
angular.module( 'app' )
    .controller( 'CourseController', function ( Faculty ) {
      
        var vm = this; 

        vm.active = true;

        vm.toggleActive = function() {
            vm.active = !vm.active; 
        }

        vm.approved = true; 

        vm.answering = false; 

        vm.toggleAnswering = function() {
            vm.answering = !vm.answering; 
        }
    } );