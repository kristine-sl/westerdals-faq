/* eslint-disable */
angular.module( 'app' )
    .controller( 'SiteController', function () {
      
        var vm = this; 

        vm.loggedIn = false; 

        vm.toggleLoggedIn = function() {
        	vm.loggedIn = !vm.loggedIn; 
        }
} );