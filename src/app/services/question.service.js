/* eslint-disable */
angular.module( 'app' )
    .service('Question', function( $http ) {

        function all() {
            return $http.get('http://faq.flugg.space/questions').then(function (response) {
                return response.data.data;
            });
        }

        function destroy( id ) {
            return $http.delete( 'http://faq.flugg.space/questions/' + id );
        }

        function post( parameters ) {
            return $http.post( 'http://faq.flugg.space/questions', parameters ).then( function( response ) {
                return response.data.data; 
            }); 
        }

        return {
            all: all, 
            post: post,
            destroy: destroy
        }; 
    }); 