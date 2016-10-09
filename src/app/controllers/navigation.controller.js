/* eslint-disable */
angular.module( 'app' )
    .controller( 'NavigationController', function () {

        var vm = this;

        vm.open = false; 

        vm.toggleOpen = function() {
            vm.open = !vm.open; 
        }
    } );