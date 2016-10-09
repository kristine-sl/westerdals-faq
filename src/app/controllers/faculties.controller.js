/* eslint-disable */
angular.module( 'app' )
    .controller( 'FacultiesController', function ( $rootScope, Faculty ) {

        var vm = this; 

        $rootScope.info = 'faculties';

        vm.faculties = Faculty.faculties; 
    } ); 