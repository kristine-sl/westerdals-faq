/* eslint-disable */
angular.module( 'app' )
    .controller( 'CoursesController', function ( Faculty ) {

        var vm = this;  
        vm.courses = Faculty.getCourses( Faculty.getCurrentFaculty() );
    } );