/* eslint-disable */
angular.module( 'app' )
    .controller( 'SiteController', function ( $scope, $location, Faculty ) {

        var vm = this;

        $scope.go = function( path ) {
            $location.path( path );
        }

        vm.loggedIn = false;

        vm.logOut = function() {
            vm.loggedIn = false; 
        }

        vm.logIn = function() {
            vm.loggedIn = true;
            $scope.go( '/' ); 
        }

        vm.color = Faculty.getCurrentFaculty(); 

        vm.getFaculty = function() {
            return Faculty.getCurrentFaculty(); 
        }
    } );