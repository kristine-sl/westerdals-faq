/* eslint-disable */
angular.module( 'app' )
    .service('Faculty', function( $location, $stateParams ) {

        var services = {
            faculties: [ 
                {
                    faculty: 'management', 
                    name: 'Ledelse', 
                    courses: []
                },{
                    faculty: 'technology', 
                    name: 'Teknologi', 
                    courses: [ 'Objektorientert Programmering 1', 'Interaktivt Design 1', 'Bachelorprosjekt' ]
                },{
                    faculty: 'arts', 
                    name: 'Kunst', 
                    courses: [ 'Maling', 'Tegning', 'Logodesign' ]
                },{
                    faculty: 'communication', 
                    name: 'Kommunikasjon', 
                    courses: [ 'Markedsføring', 'Publisering', 'Journalistikk' ]
                },{
                    faculty: 'film_tv_games', 
                    name: 'Film, TV og Spill', 
                    courses: [ 'Spillutvikling', 'Kameraføring', 'Filmredigering' ]
                },{
                    faculty: 'other', 
                    name: 'Spørsmål?', 
                    courses: [ 'Spørsmål' ]
                }
            ],

            facultyIsApproved: function( faculty ) {
                var approved = services.getFacultyKeys();

                for( var i = 0; i < approved.length; i++ ) {
                    if( approved[i] === faculty ) {
                        return true; 
                    }
                }
                return false; 
            },

            getFacultyKeys: function() {
                var keys = []; 

                for( var i = 0; i < services.faculties.length; i++ ) {
                    keys.push( services.faculties[i].faculty )
                }

                return keys; 
            },

            getCurrentFaculty: function() {

                var current = $stateParams.faculty;
            
                return services.facultyIsApproved( current ) ? current : 'technology'; 
            },

            getFaculty: function( faculty ) {
                var filtered = services.faculties.filter( function( f ) {
                    return f.faculty === faculty; 
                } ); 

                console.log( 'Proof that getFaculty works: ', filtered[0] ); 
                return filtered[0]; 
            },

            getCourses: function( faculty ) {
                return services.facultyIsApproved( faculty ) ? services.getFaculty( faculty ).courses : [];; 
            }
        }

        return services; 
    } )