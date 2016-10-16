/* eslint-disable */
angular.module( 'app' )
    .controller( 'SiteController', function ( $scope, $state, $location, Faculty, Authenticator ) {

        var vm = this;
        vm.auth = Authenticator;
        vm.credentials = {
            email: '',
            password: ''
        };

        $scope.go = function( path ) {
            $location.path( path );
        }

        vm.logOut = function() {
            Authenticator.logout();
            $state.go( 'home' );
        }

        vm.logIn = function() {
            Authenticator.login(vm.credentials).then(function () {
                $state.go( 'home' );
            });
        }

        vm.color = Faculty.getCurrentFaculty();

        vm.getFaculty = function() {
            return Faculty.getCurrentFaculty();
        }
    } );